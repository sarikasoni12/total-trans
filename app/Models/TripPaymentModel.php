<?php
namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class TripPaymentModel extends Model
{

    protected $table = 'trip_payments';
    public $timestamps = false;
    protected $fillable = [
        'trip_id',
        'amount',
        'invoice_no',
        'paid_full_amount',
        'paid_on'
    ];
}
