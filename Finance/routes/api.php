<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InstallmentController;
use App\Http\Controllers\BorrowerController; 

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


Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});



Route::middleware(['auth:sanctum'])->post('/installmentlist', [InstallmentController::class, 'list'])
->name('installmentlist');
Route::middleware(['auth:sanctum'])->post('/installmentlist/status', [InstallmentController::class, 'UpdatePaidStatus']);
//->name('instStatusUpdate');

Route::middleware(['auth:sanctum'])->post('/borrower', [BorrowerController::class, 'list']);
Route::middleware(['auth:sanctum'])->post('/addnew-brrower', [BorrowerController::class, 'AddNew']);
//->name('borrower');