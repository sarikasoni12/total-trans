<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class TripDocumentModel extends Model
{

    protected $table = 'trip_document';
    protected $fillable = ['trip_id', 'name'];
    protected $appends = ['public_path'];

    public function getPublicPathAttribute():string
    {
//        return Storage::disk('public')->path($this->name);
        return Storage::disk('local')->url($this->name);
    }
}
