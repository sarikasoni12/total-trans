<?php

namespace App\Http\Services\Border;

use App\Http\Services\Border\Vendor\BorderConnectVendor;
use App\Http\Services\Border\Vendor\IBorderVendor;

class BorderConnectService extends BorderService
{

    public function getInstance(): IBorderVendor
    {
        return app(BorderConnectVendor::class);
    }
}
