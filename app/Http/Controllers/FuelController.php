<?php

namespace App\Http\Controllers;


use App\Http\Repositories\FuelRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class FuelController
{
    /**
     * @var FuelRepository
     */
    private $fuelRepository;

    /**
     * FuelController constructor.
     */
    public function __construct(FuelRepository $fuelRepository)
    {
        $this->fuelRepository = $fuelRepository;
    }

    public function getAll(Request $request)
    {
        $search['from_date'] = $request->query->get('from_date', null);
        $search['to_date'] = $request->query->get('to_date', null);

        $fuel = $this->fuelRepository->getAll($search);
        return new JsonResponse($fuel, 200);
    }
}
