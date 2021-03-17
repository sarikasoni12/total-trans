<?php

namespace App\Http\Repositories;

use App\Models\DriverModel;
use App\Models\TripDocumentModel;
use App\Models\TripModel;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class TripRepository
{
    public function getAll($search): Collection
    {
        $qry = TripModel::query()
            ->with(['truck', 'trailer', 'broker', 'driver1', 'driver2', 'payments', 'shipperAddress', 'consigneeAddress']);

        if(isset($search['from_date'])){
            $qry->where('delivery_Date', '>=' ,$search['from_date']);
        }
        if(isset($search['to_date'])){
            $qry->where('delivery_Date','<=', $search['to_date']);
        }

        if(isset($search['driver_id']) && $search['driver_id'] > 0){
            $qry->where(function ($q) use($search){
                $q->where('driver1_id', $search['driver_id'])
                    ->orWhere('driver2_id', $search['driver_id']);
            });
        }
        if(isset($search['truck_id'])){
            $qry->where('truck_unit', $search['truck_id']);
        }
        if(isset($search['broker_id'])){
            $qry->where('broker_id', $search['broker_id']);
        }
        return $qry->orderBy('id', 'asc')->get();
    }

    public function getById(int $tripId): Model
    {
        return TripModel::query()->with(['truck', 'trailer', 'broker', 'driver1', 'driver2', 'payments', 'documents', 'shipperAddress', 'consigneeAddress'])
            ->where('id', $tripId)->first();
    }

    public function getByIdForInvoice(int $tripId): Model
    {
        return TripModel::query()->with(['truck', 'trailer', 'broker', 'shipperAddress', 'consigneeAddress'])
            ->where('id', $tripId)->first();
    }

    public function getTripsNotProcessed(): Collection
    {
        return TripModel::query()
            ->with(['truck', 'trailer', 'broker', 'driver1', 'driver2', 'payments'])
            ->where('completed', 1)
            ->where('salary_processed', 0)
            ->get();

    }

    public function saveTrip(TripModel $tripData): Model
    {
        $model = new TripModel($tripData->toArray());
        $model->save();
        return $model->refresh();
    }

    public function updateTrip(int $tripId, TripModel $tripData): Model
    {
        /** @var TripModel $trip */
        $trip = TripModel::query()->where('id', $tripId)->first();
        $trip->update($tripData->toArray());
        return  $trip->refresh();
    }

    public function saveDocuments(int $tripId, array $documents)
    {
        $doc = new TripDocumentModel(array_merge(['trip_id'=>$tripId], $documents));
        $doc->save();
    }

    public function getDriverSalary(int $driverId, string $fromDate, string $endDate): array
    {
        $qry = TripModel::query()
            ->with(['truck', 'trailer', 'broker', 'driver1', 'driver2', 'payments']);
        $qry->where('delivery_Date', '>=', $fromDate);
        $qry->where('delivery_Date','<=', $endDate);

        $qry->where(function ($q) use($driverId){
            $q->where('driver1_id', $driverId)
                ->orWhere('driver2_id', $driverId);
        });

        $trips = $qry->orderBy('pickup_date', 'asc')->get();
        $data = [];
        foreach ($trips as $trip){
            $data[] =$this->getSalaryForTripByDriverId($driverId, $trip);
        }
        return $data;
    }

    public function getSalaryForAll(string $fromDate, string $endDate): array
    {
        $qry = TripModel::query()
            ->with(['truck', 'trailer', 'broker', 'driver1', 'driver2', 'driver1Settings', 'driver2Settings', 'payments']);
        $qry->where('delivery_Date', '>=', $fromDate);
        $qry->where('delivery_Date','<=', $endDate);

        $trips = $qry->orderBy('pickup_date', 'asc')->get();
        $data = [];
        foreach ($trips as $trip){
            if($trip->driver1Settings->on_salary) {
                $data[] = $this->getSalaryForTripByDriverId($trip->driver1_id, $trip);
            }
            if($trip->driver2 && $trip->driver2Settings->on_salary){
                $data[] = $this->getSalaryForTripByDriverId($trip->driver2_id, $trip);
            }
        }
        return $data;
    }

    public function getSalaryForTripByDriverId(int $driverId, TripModel $trip): array
    {
        /** @var DriverRepository $driverRepo */
        $driverRepo = app(DriverRepository::class);
        $driver = $driverRepo->getPayrollSettingsById($driverId);

        $data['trip_id'] = $trip->id;
        $data['trip_delivery_date'] = $trip->getDeliverDate();

        /** @var DriverModel $driver */

        $data['driver_id'] = $driverId;
        $data['amount_on_miles'] = round(($trip->miles * ($driver->cents_per_mile/100)),2);
        $data['border_crossing_fee'] = $trip->border_crossing_no * $driver->border_crossing_fee;
        $data['layover_fee'] = $trip->layover * $driver->layover_fee;
        $data['pickup_delivery_fee'] = $trip->pickup_delivery_no * $driver->pickup_delivery_fee;
        $data['waiting_hours_fee'] = $trip->waiting_hours * $driver->waiting_fee;
        return $data;
    }
}
