<?php


namespace App\Http\Controllers;


use App\Http\Repositories\BrokerRepository;
use Symfony\Component\HttpFoundation\JsonResponse;

class BrokerController
{
    /**
     * @var BrokerRepository
     */
    private $brokerRepository;

    public function __construct(BrokerRepository $brokerRepository)
    {
        $this->brokerRepository = $brokerRepository;
    }

    public function getBrokers(): JsonResponse
    {
        $brokers = $this->brokerRepository->getBrokers();
        return new JsonResponse($brokers, 200);
    }
}
