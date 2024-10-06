<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return Inertia::render('Admin/LoginAdmin', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',

])->group(function () {
    Route::get('/main', function () {
        return Inertia::render('Admin/AdminPage');
    })->name('admin');
});
// Route::group(['prefix' => 'admin'], function () {

//     Route::get('login', ''App\Http\Controllers\Admin\LoginController@showLoginForm')->name('admin.login');
//     Route::post('login', ''App\Http\Controllers\Admin\LoginController@login')->name('admin.login.post');
//     Route::get('logout', ''App\Http\Controllers\Admin\LoginController@logout')->name('admin.logout');
 
//     Route::get('/', function () {
//        return view('admin.dashboard.index');
//     });
 
//  });