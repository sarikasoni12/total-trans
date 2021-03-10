<?php

namespace App\Http\Repositories;

use App\Models\DriverModel;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class DriverRepository
{

    public function getDriverById(int $id):Model
    {
        return DriverModel::query()->where('id', $id)->first();
    }

    public function getAll():Collection
    {
        return DriverModel::query()
            ->whereNull('date_of_departure')
            ->get();
    }
}
