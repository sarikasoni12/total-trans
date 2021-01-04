<?php


namespace App\Http\Controllers;


use App\Http\Repositories\ExpensesRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class ExpensesController extends Controller
{
    /**
     * @var ExpensesRepository
     */
    private $expensesRepository;

    /**
     * ExpensesController constructor.
     */
    public function __construct(ExpensesRepository  $expensesRepository)
    {
        $this->expensesRepository = $expensesRepository;
    }

    public function getAllExpenses(Request  $request)
    {
        $search['from_date'] = $request->query->get('from_date', null);
        $search['to_date'] = $request->query->get('to_date', null);

        $expenses = $this->expensesRepository->getAllExpenses($search);
        return new JsonResponse($expenses, 200);
    }
}


