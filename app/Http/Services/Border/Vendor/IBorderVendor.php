<?php

namespace App\Http\Services\Border\Vendor;

interface IBorderVendor
{
    public function connect(int $tripId, string $type): array;
    public function createTrip(int $tripId, string $type): array;
    public function updateTrip(int $tripId, string $type): array;
}
