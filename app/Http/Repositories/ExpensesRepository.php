<?php

namespace App\Http\Repositories;


use App\Models\ExpensesModel;
use Illuminate\Database\Eloquent\Collection;

class ExpensesRepository
{

    public function getAllExpenses($search):Collection
    {
        $qry = ExpensesModel::query();
        if(isset($search['from_date'])){
            $qry->where('date', '>=' ,$search['from_date']);
        }
        if(isset($search['to_date'])){
            $qry->where('date','<=', $search['to_date']);
        }
        return $qry->orderBy('date', 'asc')->get();
    }
}
