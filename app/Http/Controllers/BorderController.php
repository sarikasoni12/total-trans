<?php

namespace App\Http\Controllers;

use App\Http\Services\Border\BorderConnectService;
use App\Http\Services\Border\BorderService;
use Illuminate\Http\JsonResponse;

class BorderController extends Controller
{

    public function createTrip($tripId, $type):JsonResponse
    {
        $tripId = (int)$tripId;
        try {
            /** @var BorderService $borderConnect */
            $borderConnect = app(BorderConnectService::class);
            $data = $borderConnect->createTrip($tripId, $type);
        } catch (\Exception $e){
            throw $e;
        }
        return new JsonResponse($data, 422);
    }

    public function updateTrip($tripId, $type):JsonResponse
    {
        $tripId = (int)$tripId;
        try {
            /** @var BorderService $borderConnect */
            $borderConnect = app(BorderConnectService::class);
            $data = $borderConnect->updateTrip($tripId, $type);
        } catch (\Exception $e){
            throw $e;
        }
        return new JsonResponse($data, 422);
    }
}
