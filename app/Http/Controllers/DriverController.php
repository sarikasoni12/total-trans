<?php


namespace App\Http\Controllers;


use App\Http\Repositories\DriverRepository;
use App\Http\Repositories\TripRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class DriverController extends Controller
{
    /**
     * @var TripRepository
     */
    private $tripRepository;
    /**
     * @var DriverRepository
     */
    private $driverRepository;


    /**
     * DriverController constructor.
     */
    public function __construct(TripRepository $tripRepository, DriverRepository $driverRepository)
    {
        $this->tripRepository = $tripRepository;
        $this->driverRepository = $driverRepository;
    }

    public function getSalary(Request $request, string $driverId)
    {
        $search['from_date'] = $request->query->get('from_date', null);
        $search['to_date'] = $request->query->get('to_date', null);
        $driverId = (int)$driverId;
        $trips = $this->tripRepository->getDriverSalary($driverId, $search['from_date'], $search['to_date']);
        return new JsonResponse($trips, 200);
    }

    public function getSalaryForAll(Request $request)
    {
        $search['from_date'] = $request->query->get('from_date', null);
        $search['to_date'] = $request->query->get('to_date', null);

        $trips = $this->tripRepository->getSalaryForAll($search['from_date'], $search['to_date']);
        return new JsonResponse($trips, 200);
    }

    public function getAll()
    {
        $drivers = $this->driverRepository->getAll();
        return new JsonResponse($drivers, 200);
    }
}
