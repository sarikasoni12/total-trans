<?php


namespace App\Http\Repositories;


use App\Models\BrokerModel;
use Illuminate\Database\Eloquent\Collection;

class BrokerRepository
{
    public function getBrokers(): Collection
    {
        return BrokerModel::query()
            ->get();
    }
}
