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

Route::get('/units', ['uses' =>  "\App\Http\Controllers\UnitController@getAll"]);
Route::get('/trucks', ['uses' =>  "\App\Http\Controllers\UnitController@getTruckUnits"]);
Route::get('/trailers', ['uses' =>  "\App\Http\Controllers\UnitController@getTrailerUnits"]);
Route::get('/brokers', ['uses' =>  "\App\Http\Controllers\BrokerController@getBrokers"]);
Route::get('/teams', ['uses' =>  "\App\Http\Controllers\TeamController@getTeams"]);

Route::get('/trips', ['uses' =>  "\App\Http\Controllers\TripController@getAll"]);
Route::post('/trip', ['uses' =>  "\App\Http\Controllers\TripController@saveTrip"]);
Route::post('/trip/{trip_id}/upload-documents', ['uses' =>  "\App\Http\Controllers\TripController@uploadDocuments"]);

Route::get('/repair', ['uses' => "\App\Http\Controllers\RepairController@getAll"]);
Route::get('/fuel', ['uses' => "\App\Http\Controllers\FuelController@getAll"]);
Route::get('/expenses', ['uses' => "\App\Http\Controllers\ExpensesController@getAllExpenses"]);
Route::get('/salary', ['uses' => "\App\Http\Controllers\TripSalaryController@getAll"]);

Route::get('/process-trip-salary', ['uses' => '\App\Http\Controllers\ProcessTripSalaryController@processTripSalary']);
