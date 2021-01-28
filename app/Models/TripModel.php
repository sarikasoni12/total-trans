<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TripModel extends Model
{
    protected $table = 'trip';

    protected $fillable = [
        'company_id',
        'vendor_order_no',
        'vendor_order_date',
        'pickup_date',
        'expected_delivery_date',
        'delivery_date',
        'truck_unit',
        'trailer_unit',
        'pickup_location',
        'delivery_location',
        'miles',
        'broker_id',
        'price',
        'currency',
        'conversion_rate',
        'driver1_id',
        'driver2_id',
        'trailer_other'
    ];

    protected $dates = ['vendor_order_date', 'pickup_date', 'expected_delivery_date', 'delivery_date'];
    protected $dateFormat = 'Y-m-d';


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
        return $this->hasOne(BrokerModel::class, 'id', 'broker_id');
    }

    public function driver1()
    {
        return $this->hasOne(DriverModel::class, 'id', 'driver1_id');
    }

    public function driver2()
    {
        return $this->hasOne(DriverModel::class, 'id', 'driver2_id');
    }

    public function payments()
    {
        return $this->hasMany(TripPaymentModel::class, 'trip_id', 'id');
    }

    public function documents()
    {
        return $this->hasMany(TripDocumentModel::class, 'trip_id', 'id');
    }

    public function getDeliverDate(): string
    {
        return date('Y-m-d', strtotime($this->delivery_date));
    }

    public function shipperAddress()
    {
        return $this->hasOne(TripAddressModel::class, 'trip_id', 'id')
            ->where('type', 'shipper');
    }

    public function consigneeAddress()
    {
        return $this->hasOne(TripAddressModel::class, 'trip_id', 'id')
            ->where('type', 'consignee');
    }
}
