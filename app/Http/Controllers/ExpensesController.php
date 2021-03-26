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

    public function get(Request  $request)
    {
        $search['from_date'] = $request->query->get('from_date', null);
        $search['to_date'] = $request->query->get('to_date', null);

        $expenses = $this->expensesRepository->get($search);
        return new JsonResponse($expenses, 200);
    }

    public function getById(Request $request, $id)
    {
        $id = (int)$id;
        $expense = $this->expensesRepository->getById($id);
        return new JsonResponse($expense, 200);
    }

    public function save(Request $request):JsonResponse
    {
        $data = $request->request->all();
        $id = $this->expensesRepository->save($data);
        if($id > 0){
            return new JsonResponse(['success' => true], 200);
        }
        return new JsonResponse(['success' => false], 500);
    }

    public function update(Request $request, $id):JsonResponse
    {
        $data = $request->request->all();
        $id = (int)$id;
        $id = $this->expensesRepository->update($id, $data);
        if($id > 0){
            return new JsonResponse(['success' => true], 200);
        }
        return new JsonResponse(['success' => false], 500);
    }
}


