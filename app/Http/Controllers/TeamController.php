<?php

namespace App\Http\Controllers;

use App\Http\Repositories\TeamRepository;
use Symfony\Component\HttpFoundation\JsonResponse;

class TeamController extends Controller
{
    /**
     * @var TeamRepository
     */
    private $teamRepository;

    public function __construct(TeamRepository $teamRepository)
    {
        $this->teamRepository = $teamRepository;
    }

    public function getTeams()
    {
        $teams = $this->teamRepository->getTeams();
        return new JsonResponse($teams, 200);
    }
}
