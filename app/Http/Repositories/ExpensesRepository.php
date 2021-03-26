<?php

namespace App\Http\Repositories;


use App\Models\ExpensesModel;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class ExpensesRepository
{

    public function get($search):Collection
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

    public function getById(int $id):Model
    {
        return ExpensesModel::query()->where('id', $id)->first();
    }

    public function save(array $data): int
    {
        return ExpensesModel::query()->insertGetId($data);
    }

    public function update(int $id, array $data): int
    {
        return ExpensesModel::query()->where('id', $id)->update($data);
    }
}
