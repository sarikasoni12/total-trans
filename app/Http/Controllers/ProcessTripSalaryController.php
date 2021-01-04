<?php

namespace App\Http\Controllers;


use App\Jobs\ProcessTripSalary;

class ProcessTripSalaryController extends Controller
{

    public function processTripSalary()
    {
        ProcessTripSalary::dispatch()->onQueue('salary');
    }
}
