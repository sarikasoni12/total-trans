<?php
namespace App\Http\Repositories;

use App\Models\TripPaymentModel;
use Illuminate\Database\Eloquent\Collection;

class TripPaymentRepository
{

    public function get(array $search):Collection
    {
         return TripPaymentModel::query()
            ->where('deposited_in_bank_on','>=', $search['from_date'])
            ->where('deposited_in_bank_on','<=', $search['to_date'])
            ->get();
    }
}
