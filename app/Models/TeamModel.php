<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TeamModel extends Model
{
    protected $table = 'team';

    public function drivers()
    {
        return $this->belongsToMany(DriverModel::class, 'team_driver', 'team_id', 'driver_id' )
            ->withPivot('driver_id');
    }
}
