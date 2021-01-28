<?php


namespace App\Http\Repositories;


use App\Models\TripDocumentModel;
use Highlight\Mode;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class TripDocumentRepository
{

    public function getDocument(int $tripId): Collection
    {
        return TripDocumentModel::query()->where('trip_id', $tripId)->get();
    }

    public function getDocumentById(int $tripId, int $id): Model
    {
        return TripDocumentModel::query()
            ->where('trip_id', $tripId)
            ->where('id', $id)
            ->first();
    }
}
