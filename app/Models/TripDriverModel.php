<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TripDriverModel extends Model
{
    protected $table = 'trip_driver';
    protected $fillable = [
        'trip_id',
        'driver_id',
        'miles',
        'cents_per_mile'
    ];
}
