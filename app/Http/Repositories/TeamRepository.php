<?php


namespace App\Http\Repositories;


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
}
