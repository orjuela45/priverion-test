<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\TodoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->group(function(){
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post("logout", [AuthController::class, "logout"]);
    Route::group(["prefix" => "/todos"], function(){
        Route::get("/public", [TodoController::class, "publicTodos"]);
        Route::put("/close/{todo}", [TodoController::class, "closeTodo"]);
        Route::put("/public/{todo}", [TodoController::class, "changePublic"]);
    });
    Route::apiResource("/todos", TodoController::class);
});

Route::post("/signup", [AuthController::class, "signup"]);
Route::post("/login", [AuthController::class, "login"]);