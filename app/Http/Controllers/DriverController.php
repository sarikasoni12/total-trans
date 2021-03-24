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

    public function getPayrollSettings(): JsonResponse
    {
        $drivers = $this->driverRepository->getPayrollSettings();
        return new JsonResponse($drivers, 200);
    }

    public function save(Request $request):JsonResponse
    {
        $driverData = $request->request->get('driver_data');
        $payrollSettings = $request->request->get('payroll_settings');
        $driverId = $this->driverRepository->saveDriver(1, $driverData);
        if($driverId > 0){
            $settingsSaved = $this->driverRepository->savePayrollSettings(1, $driverId, $payrollSettings);
            if($settingsSaved > 0){
                return new JsonResponse(['success' => true], 200);
            }
        }
        return new JsonResponse(['success' => false], 500);
    }

    public function update($driverId, Request $request):JsonResponse
    {
        $driverId = (int) $driverId;
        $driverData = $request->request->get('driver_data');
        $payrollSettings = $request->request->get('payroll_settings');
        $this->driverRepository->update(1, $driverId, $driverData);
        $this->driverRepository->updatePayrollSettings(1, $driverId, $payrollSettings);

        return new JsonResponse(['success' => true], 200);
    }

    public function getById($id)
    {
        $id = (int)$id;
        $data = $this->driverRepository->getDriverById($id);
        return new JsonResponse($data, 200);
    }
}
