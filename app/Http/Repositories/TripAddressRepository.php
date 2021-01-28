<?php

namespace App\Http\Repositories;


use App\Models\TripAddressModel;
use Illuminate\Database\Eloquent\Model;

class TripAddressRepository
{

    public function save(int $tripId, string $addressType, array $address): Model
    {
        $address = new TripAddressModel(array_merge(['trip_id' => $tripId, 'type' => $addressType], $address));
        $address->save();
        return $address->refresh();
    }

    public function update(int $id, int $tripId, string $addressType, array $address): Model
    {
        $model = TripAddressModel::query()->where('id', $id)->first();
        $model->update(array_merge(['trip_id' => $tripId, 'type' => $addressType], $address));
        return $model->refresh();
    }

    public function getAddressByType(int $tripId, string $addressType): ?Model
    {
        return TripAddressModel::query()->where('trip_id', $tripId)
            ->where('type', $addressType)->first();
    }
}
