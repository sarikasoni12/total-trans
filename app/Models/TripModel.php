<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TripModel extends Model
{
    protected $table = 'trip';

    protected $fillable = [
        'pickup_date',
        'expected_delivery_date',
        'delivery_date',
        'truck_unit',
        'trailer_unit',
        'pickup_location',
        'delivery_location',
        'miles',
        'broker',
        'price',
        'currency',
        'conversion_rate',
    ];

    protected $dateFormat = 'yy-m-d';
    protected $dates = ['pickup_date', 'expected_delivery_date', 'delivery_date'];

    public function truck()
    {
        return $this->hasOne(UnitModel::class,  'id', 'truck_unit');
    }

    public function trailer()
    {
        return $this->hasOne(UnitModel::class, 'id', 'trailer_unit');
    }

    public function broker()
    {
        return $this->hasOne(BrokerModel::class, 'id', 'broker');
    }

    public function driver1()
    {
        return $this->hasOne(DriverModel::class, 'id', 'driver1');
    }

    public function driver2()
    {
        return $this->hasOne(DriverModel::class, 'id', 'driver2');
    }
}
