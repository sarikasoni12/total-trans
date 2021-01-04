<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TripDocumentModel extends Model
{

    protected $table = 'trip_document';
    protected $fillable = ['trip_id', 'name'];
}
