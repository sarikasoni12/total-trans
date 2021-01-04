<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TeamDriverModel extends Model
{
    protected $table = 'team_driver';

    public function driver()
    {
        return $this->hasOne(DriverModel::class, 'id', 'driver_id');
    }
}
