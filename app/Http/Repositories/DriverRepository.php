<?php

namespace App\Http\Repositories;

use App\Models\DriverModel;
use Illuminate\Database\Eloquent\Model;

class DriverRepository
{

    public function getDriverById(int $id):Model
    {
        return DriverModel::query()->where('id', $id)->first();
    }
}
