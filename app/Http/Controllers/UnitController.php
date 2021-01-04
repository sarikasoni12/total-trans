<?php

namespace App\Http\Controllers;


use App\Http\Repositories\UnitRepository;
use Illuminate\Http\JsonResponse;

class UnitController extends Controller
{
    /**
     * @var UnitRepository
     */
    private $unitRepository;

    public function __construct(UnitRepository $unitRepository)
    {
        $this->unitRepository = $unitRepository;
    }

    public function getTruckUnits():JsonResponse
    {
        $trucks = $this->unitRepository->getTruckUnits();
        return new JsonResponse($trucks, 200);
    }

    public function getTrailerUnits():JsonResponse
    {
        $trucks = $this->unitRepository->getTrailerUnits();
        return new JsonResponse($trucks, 200);
    }

    public function getAll():JsonResponse
    {
        $units = $this->unitRepository->getAll();
        return new JsonResponse($units, 200);
    }
}
