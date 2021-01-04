<?php

namespace App\Http\Repositories;

use App\Models\TripDocumentModel;
use App\Models\TripModel;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class TripRepository
{
    public function getAll($search): Collection
    {
        $qry = TripModel::query()
            ->with(['truck', 'trailer', 'broker', 'driver1', 'driver2']);

        if(isset($search['from_date'])){
            $qry->where('delivery_Date', '>=' ,$search['from_date']);
        }
        if(isset($search['to_date'])){
            $qry->where('delivery_Date','<=', $search['to_date']);
        }
        return $qry->orderBy('pickup_date', 'asc')->get();
    }

    public function getTripsNotProcessed(): Collection
    {
        return TripModel::query()
            ->with(['truck', 'trailer', 'broker', 'driver1', 'driver2'])
            ->where('completed', 0)
            ->where('salary_processed', 0)
            ->get();

    }

    public function saveTrip(TripModel $tripData): Model
    {
        $model = new TripModel($tripData->toArray());
        $model->save();
        return $model->refresh();
    }

    public function saveDocuments(int $tripId, array $documents)
    {
        $doc = new TripDocumentModel(array_merge(['trip_id'=>$tripId], $documents));
        $doc->save();
    }
}
