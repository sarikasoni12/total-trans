<?php

namespace App\Jobs;

use App\Http\Repositories\DriverRepository;
use App\Http\Repositories\TripRepository;
use App\Http\Repositories\TripSalaryRepository;
use App\Models\DriverModel;
use App\Models\TripModel;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcessTripSalary implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        \Log::info('Processing salary');
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        \Log::info('Beginning makeEPSCert');
        /** @var TripRepository $tripRepo */
        $tripRepo = app(TripRepository::class);
        $trips = $tripRepo->getTripsNotProcessed();

        /** @var TripSalaryRepository $tripSalaryRepo */
        $tripSalaryRepo = app(TripSalaryRepository::class);
        /** @var DriverRepository $driverRepo */
        $driverRepo = app(DriverRepository::class);
        foreach ($trips as $trip){
            /** @var TripModel $trip */
            $data = [];
            $data['trip_id'] = $trip->id;
            $data['trip_delivery_date'] = $trip->delivery_date;

            /** @var DriverModel $driver */
            $driver1 = $driverRepo->getDriverById($trip->driver1);
            $data['driver_id'] = $trip->driver1;
            $data['amount_on_miles'] = $trip->miles * ($driver1->cents_per_mile/100);
            $data['border_crossing_fee'] = $trip->border_crossing_no * $driver1->border_crossing_fee;
            $data['layover_fee'] = $trip->layover * $driver1->layover_fee;
            $data['pickup_delivery_fee'] = $trip->pickup_delivery_no * $driver1->pickup_delivery_fee;
            $data['waiting_hours_fee'] = $trip->waiting_hours * $driver1->waiting_hours_fee;
            $tripSalaryRepo->saveTripSalary($data);

            /** @var DriverModel $driver */
            if($trip->driver2){
                $driver2 = $driverRepo->getDriverById($trip->driver2);
                $data['driver_id'] = $trip->driver2;
                $data['amount_on_miles'] = $trip->miles * ($driver2->cents_per_mile/100);
                $data['border_crossing_fee'] = $trip->border_crossing_no * $driver2->border_crossing_fee;
                $data['layover_fee'] = $trip->layover * $driver2->layover_fee;
                $data['pickup_delivery_fee'] = $trip->pickup_delivery_no * $driver2->pickup_delivery_fee;
                $data['waiting_hours_fee'] = $trip->waiting_hours * $driver2->waiting_hours_fee;
                $tripSalaryRepo->saveTripSalary($data);
            }
            $trip->salary_processed = 1;
            $trip->save();
        }
    }
}
