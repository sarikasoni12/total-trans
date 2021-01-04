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
            $qry->where('date', '>=' ,$search['from_date']);
        }
        if(isset($search['to_date'])){
            $qry->where('date','<=', $search['to_date']);
        }
        return $qry->orderBy('date', 'asc')->get();
    }
}
