<?php

namespace App\Http\Controllers;


use App\Http\Repositories\TripSalaryRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class TripSalaryController
{
    /**
     * @var TripSalaryRepository
     */
    private $tripSalaryRepository;


    public function __construct(TripSalaryRepository $tripSalaryRepository)
    {
        $this->tripSalaryRepository = $tripSalaryRepository;
    }

    public function getAll(Request $request)
    {
        $search['from_date'] = $request->query->get('from_date', null);
        $search['to_date'] = $request->query->get('to_date', null);

        $salary = $this->tripSalaryRepository->getAll($search);
        return new JsonResponse($salary, 200);
    }
}
