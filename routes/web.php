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

Route::middleware(['auth'])->group(function () {
    Route::get('/new-trip', function () {
        return view('trip');
    });
    Route::get('/trip/{id}', function () {
        return view('trip');
    });
    Route::get('/trips', function () {
        return view('trip');
    });

    Route::get('/drivers', function () {
        return view('trip');
    });
//---For Salary-----
    Route::get('/salary', function () {
        return view('trip');
    });
    Route::get('/new-driver', function () {
        return view('trip');
    });
    Route::get('/driver/{id}', function () {
        return view('trip');
    });
    Route::get('/settings', function () {
        return view('trip');
    });
    Route::get('/expenses', function () {
        return view('trip');
    });
    Route::get('/new-expense', function () {
        return view('trip');
    });
    Route::get('/expenses/{id}', function () {
        return view('trip');
    });

    Route::get('/', function () {
        return view('welcome');
    });


    Route::get('/home', 'HomeController@index')->name('home');
});

Route::get('/logout', '\App\Http\Controllers\Auth\LoginController@logout');

Auth::routes();


