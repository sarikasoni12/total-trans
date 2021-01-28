<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class TripAddressModel extends Model
{

    protected $table = 'trip_address';
    protected $fillable = [
        'trip_id',
        'type',
        'company_name',
        'address1',
        'address2',
        'city',
        'state',
        'zip'
    ];
}
