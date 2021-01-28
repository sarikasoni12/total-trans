<?php
namespace App\Http\Controllers;

use App\Http\Repositories\TripPaymentRepository;
use Symfony\Component\HttpFoundation\Request;

class TripPaymentController
{
    /**
     * @var TripPaymentRepository
     */
    private $paymentRepository;

    public function __construct(TripPaymentRepository $paymentRepository)
    {
        $this->paymentRepository = $paymentRepository;
    }

    public function get(Request $request)
    {
        $search['from_date'] = $request->query->get('from_date', null);
        $search['to_date'] = $request->query->get('to_date', null);
        $payments = $this->paymentRepository->get($search);
        return response()->json($payments, 200);
    }
}
