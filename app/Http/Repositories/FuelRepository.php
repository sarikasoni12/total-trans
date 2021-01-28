<?php

namespace App\Http\Repositories;


use App\Models\FuelModel;
use Illuminate\Database\Eloquent\Collection;

class FuelRepository
{
    public function getAll($search): Collection
    {
        $qry = FuelModel::query();
        if(isset($search['from_date'])){
            $qry->where('date_issued', '>=' ,$search['from_date']);
        }
        if(isset($search['to_date'])){
            $qry->where('date_issued','<=', $search['to_date']);
        }
        return $qry->orderBy('date_issued', 'asc')->get();
    }
}
