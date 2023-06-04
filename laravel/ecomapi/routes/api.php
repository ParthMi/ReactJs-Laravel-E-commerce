<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;

use App\Http\Controllers\OrderController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register',[UserController::class,'register']);
Route::post('/login',[UserController::class,'login']);
Route::post('/add-product',[ProductController::class,'add']);
Route::post('/delete-product/{id}',[ProductController::class,'delete']);
Route::get('/products',[ProductController::class,'index']);
Route::get('/product/{id}',[ProductController::class,'product']);
Route::post('/contact',[UserController::class,'contact']);
Route::post('/makeorder',[OrderController::class,'makeorder']);
Route::get('/myorders/{id}',[OrderController::class,'myorders']);

Route::get('/',function(){
    return "hello";
});