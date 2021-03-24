<?php

namespace App\Http\Services\Border;

use App\Http\Services\Border\Vendor\IBorderVendor;

abstract class BorderService
{

    abstract public function getInstance(): IBorderVendor;
    public function connect(int $tripId, string $type): array
    {
        $instance = $this->getInstance();
        return $instance->connect($tripId, $type);
    }
}
