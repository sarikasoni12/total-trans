<?php

namespace App\Http\Repositories;

use App\Models\DriverModel;
use App\Models\DriverPayrollSettingsModel;
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

    public function getPayrollSettings()
    {
        return DriverPayrollSettingsModel::query()
            ->get();
    }

    public function getPayrollSettingsById(int $driverId):Model
    {
        return DriverPayrollSettingsModel::query()->where('driver_id', $driverId)->first();
    }
}
