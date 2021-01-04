<?php

namespace App\Http\Repositories;


use App\Models\TripModel;
use App\Models\TripSalaryModel;

class TripSalaryRepository
{

    public function saveTripSalary(array $data)
    {
        return TripSalaryModel::query()->insert($data);
    }

    public function getAll($search)
    {
        $qry = TripSalaryModel::query();

        if(isset($search['from_date'])){
            $qry->where('trip_delivery_date', '>=' ,$search['from_date']);
        }
        if(isset($search['to_date'])){
            $qry->where('trip_delivery_date','<=', $search['to_date']);
        }
        return $qry->orderBy('trip_delivery_date', 'asc')->get();
    }
}
