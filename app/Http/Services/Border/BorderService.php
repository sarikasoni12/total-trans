<?php

namespace App\Http\Services\Border;

use App\Http\Services\Border\Vendor\IBorderVendor;

abstract class BorderService
{

    abstract public function getInstance(): IBorderVendor;
    public function createTrip(int $tripId, string $type): array
    {
        $instance = $this->getInstance();
        return $instance->createTrip($tripId, $type);
    }

    public function updateTrip(int $tripId, string $type): array
    {
        $instance = $this->getInstance();
        return $instance->updateTrip($tripId, $type);
    }
}
