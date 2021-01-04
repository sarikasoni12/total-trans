<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DriverModel extends Model
{
    protected $table = 'driver';

    public function team()
    {
        return $this->belongsTo(TeamModel::class, 'driver_id', 'id');
    }
}
