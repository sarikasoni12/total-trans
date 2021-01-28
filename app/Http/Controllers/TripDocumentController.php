<?php


namespace App\Http\Controllers;


use App\Http\Repositories\TripDocumentRepository;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\Request;


class TripDocumentController
{
    /**
     * @var TripDocumentRepository
     */
    private $tripDocumentRepository;


    public function __construct(TripDocumentRepository $tripDocumentRepository)
    {
        $this->tripDocumentRepository = $tripDocumentRepository;
    }

    public function get(Request $request, $tripId, $documentId)
    {
        $tripId = (int)$tripId;
        $documentId = (int)$documentId;
        $document = $this->tripDocumentRepository->getDocumentById($tripId, $documentId);
        $file = storage_path("app/$document->name");
        return response()->download($file);
    }

}
