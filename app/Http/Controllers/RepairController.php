<?php

namespace App\Http\Controllers;


use App\Http\Repositories\FuelRepository;
use App\Http\Repositories\RepairRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class RepairController
{
    /**
     * @var RepairRepository
     */
    private $repairRepository;

    /**
     * FuelController constructor.
     */
    public function __construct(RepairRepository $repairRepository)
    {
        $this->repairRepository = $repairRepository;
    }

    public function getAll(Request $request)
    {
        $search['from_date'] = $request->query->get('from_date', null);
        $search['to_date'] = $request->query->get('to_date', null);

        $fuel = $this->repairRepository->getAll($search);
        return new JsonResponse($fuel, 200);
    }
}
