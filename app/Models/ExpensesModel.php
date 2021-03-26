<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ExpensesModel extends Model
{
    protected $table = 'expenses';
    public $timestamps = false;
    protected $fillable = [
        'trip_id',
        'amount',
        'currency',
        'comment'
    ];
}
