<?php


namespace App\Http\Repositories;


use App\Models\DriverModel;
use App\Models\TeamModel;
use Illuminate\Database\Eloquent\Collection;

class TeamRepository
{
    public function getTeams(): Collection
    {
        $coll =  TeamModel::query()
            ->with(['drivers'])
            ->get();
        return $coll;
    }

    public function getDrivers(): Collection
    {
        return DriverModel::query()->get();
    }
}
