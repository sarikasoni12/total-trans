<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DriverPayrollSettingsModel extends Model
{
    protected $table = 'driver_payroll_settings';

    public function driver()
    {
        return $this->belongsTo(DriverModel::class, 'driver_id', 'id');
    }
}
