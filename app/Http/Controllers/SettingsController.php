<?php


namespace App\Http\Controllers;


use App\Http\Repositories\SettingsRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class SettingsController extends Controller
{


    /**
     * @var SettingsRepository
     */
    private $settingsRepository;

    public function __construct(SettingsRepository $settingsRepository)
    {

        $this->settingsRepository = $settingsRepository;
    }

    public function get():JsonResponse
    {
        $settings = $this->settingsRepository->get(1);
        return new JsonResponse($settings, 200);
    }

    public function save(Request $request):JsonResponse
    {
        $data = $request->request->all();
        $saved = $this->settingsRepository->save(1, $data);
        return new JsonResponse($saved, 200);
    }
}
