<?php

namespace App\Http\Controllers;

use App\Http\Repositories\TripAddressRepository;
use App\Http\Repositories\TripRepository;
use App\Models\TripModel;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class TripController extends Controller
{
    /**
     * @var TripRepository
     */
    private $tripRepository;
    /**
     * @var TripAddressRepository
     */
    private $tripAddressRepository;

    public function __construct(TripRepository $tripRepository, TripAddressRepository $tripAddressRepository)
    {
        $this->tripRepository = $tripRepository;
        $this->tripAddressRepository = $tripAddressRepository;
    }

    public function getAll(Request $request)
    {
        $search['from_date'] = $request->query->get('from_date', null);
        $search['to_date'] = $request->query->get('to_date', null);
        $search['driver_id'] = $request->query->get('driver_id', null);
        $search['truck_id'] = $request->query->get('truck_id', null);
        $search['broker_id'] = $request->query->get('broker_id', null);

        $trips = $this->tripRepository->getAll($search);
        return new JsonResponse($trips, 200);
    }

    public function getById(Request $request, ?string $tripId)
    {
        $tripId = (int)$tripId;
        $trips = $this->tripRepository->getById($tripId);
        return new JsonResponse($trips, 200);
    }

    public function saveTrip(Request $request)
    {
        $data = $request->request->all();
        $data['broker_id'] = (int)$data['broker_id'];
        $data['company_id'] = 1;
        $tripId = isset($data['id'])? $data['id'] : null;
        $trip = new TripModel();
        $trip->fill($data);
        if($tripId){
            $trip = $this->tripRepository->updateTrip($tripId, $trip);
//            $shipper = $this->tripAddressRepository->getAddressByType($tripId, 'shipper');
//            if($shipper){
//                $this->tripAddressRepository->update($shipper->id, $tripId, 'shipper', $data['shipper_address']);
//            }
//
//            $consignee = $this->tripAddressRepository->getAddressByType($tripId, 'consignee');
//            if($consignee){
//                $this->tripAddressRepository->update($shipper->id, $tripId, 'consignee', $data['consignee_address']);
//            }
        } else {
            $trip = $this->tripRepository->saveTrip($trip);
        }

        return new JsonResponse($trip, 200);
    }

    public function uploadDocuments(Request $request, $tripId)
    {
        $uploads = $request->files->all();
        foreach ($uploads as $key => $upload){
            if($upload){
                $fileName = "trip-$tripId-$key.".$upload->getClientOriginalExtension();
                Storage::disk('local')->put($fileName, file_get_contents($upload->getRealPath()));
                $this->tripRepository->saveDocuments($tripId, ['name' => $fileName]);
            }
        }
    }

    public function saveAddress(Request $request, $tripId, $addressType)
    {
        $tripId = (int)$tripId;
        $address = $request->request->all();
        $addressModel = $this->tripAddressRepository->getAddressByType($tripId, $addressType);
        if($addressModel){
            $return =$this->tripAddressRepository->update($addressModel->id, $tripId, 'shipper', $address);
        }
        else{
            $return = $this->tripAddressRepository->save($tripId, $addressType, $address);
        }

        return new JsonResponse($return, 200);
    }

    public function deleteDocument(Request $request, $tripId)
    {
        $documentId = $request->request->get('id');

    }

    public function saveDrivers(Request $request, $tripId)
    {
        $tripId = (int)$tripId;
        $data = $request->request->all();

        $driverIds = array_map(function ($item){
            return $item['driver_id'];
        }, $data);
        foreach ($data as $item){
            $this->tripRepository->saveTripDrivers($tripId, $item);
        }

        $this->tripRepository->deleteDriversExcept($tripId, $driverIds);
        return new JsonResponse(['trip_id' => $tripId], 200);
    }
    public function getDrivers(Request $request, $tripId)
    {
        $tripId = (int)$tripId;
        $drivers = $this->tripRepository->getDrivers($tripId);

        return new JsonResponse($drivers, 200);
    }
}
