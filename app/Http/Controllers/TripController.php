<?php

namespace App\Http\Controllers;

use App\Http\Repositories\TripDocumentRepository;
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

    public function __construct(TripRepository $tripRepository)
    {
        $this->tripRepository = $tripRepository;
    }

    public function getAll(Request $request)
    {
        $search['from_date'] = $request->query->get('from_date', null);
        $search['to_date'] = $request->query->get('to_date', null);

        $trips = $this->tripRepository->getAll($search);
        return new JsonResponse($trips, 200);
    }

    public function saveTrip(Request $request)
    {
        $data = $request->request->all();
        $data['broker'] = (int)$data['broker'];
        $trip = new TripModel();
        $trip->fill($data);
        $trip = $this->tripRepository->saveTrip($trip);
        return new JsonResponse($trip, 200);
    }

    public function uploadDocuments(Request $request, $tripId)
    {
        $uploads = $request->files->all();
        $documents = [];
        foreach ($uploads as $upload){
            if($upload){
                Storage::disk('local')->put($upload->getClientOriginalName(), file_get_contents($upload->getRealPath()));
                $this->tripRepository->saveDocuments($tripId, ['name' => $upload->getClientOriginalName()]);
            }
        }
    }
}
