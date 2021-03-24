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
        return DriverModel::query()->with('payrollSettings')->where('id', $id)->first();
    }

    public function getAll():Collection
    {
        return DriverModel::query()
            ->with('payrollSettings')
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

    public function saveDriver(int $companyId, array $data):int
    {
        return DriverModel::query()->insertGetId(array_merge(['company_id' => $companyId], $data));
    }

    public function update(int $companyId, int $driverId, array $data):int
    {
        return DriverModel::query()
            ->where('company_id', $companyId)
            ->where('id', $driverId)
            ->update( $data);
    }

    public function savePayrollSettings(int $companyId, int $driverId, array $data):int
    {
        return DriverPayrollSettingsModel::query()->insertGetId(
            array_merge(['company_id' => $companyId, 'driver_id' => $driverId], $data)
        );
    }

    public function updatePayrollSettings(int $companyId, int $driverId, array $data):int
    {
        return DriverPayrollSettingsModel::query()
            ->where('company_id', $companyId)
            ->where('driver_id', $driverId)
            ->update($data);
    }
}
