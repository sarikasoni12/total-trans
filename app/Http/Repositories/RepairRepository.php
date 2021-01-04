<?php

namespace App\Http\Repositories;


use App\Models\RepairModel;
use Illuminate\Database\Eloquent\Collection;

class RepairRepository
{
    public function getAll($search): Collection
    {
        $qry = RepairModel::query();
        if(isset($search['from_date'])){
            $qry->where('date', '>=' ,$search['from_date']);
        }
        if(isset($search['to_date'])){
            $qry->where('date','<=', $search['to_date']);
        }
        return $qry->orderBy('date', 'asc')->get();
    }
}
