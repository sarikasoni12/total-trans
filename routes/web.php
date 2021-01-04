<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/trip', function(){ return view('trip');});
Route::get('/trip/{id}', function(){ return view('trip');});
Route::get('/trips', function(){ return view('trip');});
//Route::post('/api/trip', \App\Http\Controllers\TripController::save());
