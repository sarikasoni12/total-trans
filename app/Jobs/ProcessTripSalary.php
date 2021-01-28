<?php

namespace App\Jobs;

use App\Http\Repositories\DriverRepository;
use App\Http\Repositories\TripRepository;
use App\Http\Repositories\TripSalaryRepository;
use App\Models\DriverModel;
use App\Models\TripModel;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcessTripSalary implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        \Log::info('Processing salary');
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        \Log::info('Beginning makeEPSCert');
        /** @var TripRepository $tripRepo */
        $tripRepo = app(TripRepository::class);
        $trips = $tripRepo->getTripsNotProcessed();

        /** @var TripSalaryRepository $tripSalaryRepo */
        $tripSalaryRepo = app(TripSalaryRepository::class);
        foreach ($trips as $trip){
            /** @var TripModel $trip */
            $data['trip_id'] = $trip->id;
            $data['trip_delivery_date'] = $trip->delivery_date;

            if($trip->driver1) {
                $data = $tripRepo->getSalaryForTripByDriverId($trip->driver1_id, $trip);
                $tripSalaryRepo->saveTripSalary($data);
            }

            /** @var DriverModel $driver */
            if($trip->driver2){
                $data = $tripRepo->getSalaryForTripByDriverId($trip->driver1_id, $trip);
                $tripSalaryRepo->saveTripSalary($data);
            }
            $trip->salary_processed = 1;
            $trip->save();
        }
    }
}
