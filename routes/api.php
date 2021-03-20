<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware([])->group(function () {

    Route::prefix('driver')->group(function () {
        Route::get('/', ['uses' => "\App\Http\Controllers\DriverController@getAll"]);
        Route::get('/{driver_id}/salary', ['uses' => "\App\Http\Controllers\DriverController@getSalary"]);
        Route::get('/salary', ['uses' => "\App\Http\Controllers\DriverController@getSalaryForAll"]);
        Route::get('/payroll/settings', ['uses' => "\App\Http\Controllers\DriverController@getPayrollSettings"]);
    });
    Route::prefix('drivers')->group(function () {
        Route::get('/', ['uses' => "\App\Http\Controllers\DriverController@getAll"]);

    });

//Route::get('/drivers', ['uses' =>  "\App\Http\Controllers\TeamController@getDrivers"]);

    Route::get('/trips', ['uses' => "\App\Http\Controllers\TripController@getAll"]);

    Route::prefix('trip')->group(function () {
        Route::post('/', ['uses' => "\App\Http\Controllers\TripController@saveTrip"]);
        Route::get('/{id}', ['uses' => "\App\Http\Controllers\TripController@getById"]);
        Route::post('/{trip_id}/upload-documents', ['uses' => "\App\Http\Controllers\TripController@uploadDocuments"]);
        Route::post('/{trip_id}/address/{address_type}', ['uses' => "\App\Http\Controllers\TripController@saveAddress"]);
        Route::get('/{trip_id}/drivers', ['uses' => "\App\Http\Controllers\TripController@getDrivers"]);
        Route::post('/{trip_id}/drivers', ['uses' => "\App\Http\Controllers\TripController@saveDrivers"]);

        Route::get('/{trip_id}/document/{id}', ['uses' => "\App\Http\Controllers\TripDocumentController@get"]);
        Route::get('/{id}/invoice/generate', ['uses' => "\App\Http\Controllers\InvoiceController@generate"]);
        Route::get('/{id}/invoice', ['uses' => "\App\Http\Controllers\InvoiceController@get"]);
    });


    Route::get('/payment', ['uses' => "\App\Http\Controllers\TripPaymentController@get"]);
    Route::get('/repair', ['uses' => "\App\Http\Controllers\RepairController@getAll"]);
    Route::get('/fuel', ['uses' => "\App\Http\Controllers\FuelController@getAll"]);
    Route::get('/expenses', ['uses' => "\App\Http\Controllers\ExpensesController@getAllExpenses"]);
    Route::get('/salary', ['uses' => "\App\Http\Controllers\TripSalaryController@getAll"]);
    Route::get('/process-trip-salary', ['uses' => '\App\Http\Controllers\ProcessTripSalaryController@processTripSalary']);
    Route::get('/units', ['uses' => "\App\Http\Controllers\UnitController@getAll"]);
    Route::get('/trucks', ['uses' => "\App\Http\Controllers\UnitController@getTruckUnits"]);
    Route::get('/trailers', ['uses' => "\App\Http\Controllers\UnitController@getTrailerUnits"]);
    Route::get('/brokers', ['uses' => "\App\Http\Controllers\BrokerController@getBrokers"]);
});
