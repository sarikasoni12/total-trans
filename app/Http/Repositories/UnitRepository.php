<?php

namespace App\Http\Repositories;

use App\Models\UnitModel;
use Illuminate\Database\Eloquent\Collection;

class UnitRepository
{
    public function getTruckUnits(): Collection
    {
        return UnitModel::query()
                ->where('type', 'truck')
                ->get();
    }

    public function getTrailerUnits(): Collection
    {
        return UnitModel::query()
            ->where('type', 'trailer')
            ->get();
    }

    public function getAll():Collection
    {
        return UnitModel::query()->get();
    }
}
