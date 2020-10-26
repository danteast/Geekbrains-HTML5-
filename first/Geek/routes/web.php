<?php
//declare(strict_types=1);

use Illuminate\Support\Facades\Route;

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
Route::group(['prefix' => 'admin'], function() {
  Route::get('/news', [\App\Http\Controllers\Admin\NewsController::class, 'index'])
	  ->name('admin.news');
  Route::get('/news/create', [\App\Http\Controllers\Admin\NewsController::class, 'create']);
  Route::get('/news/edit/{id}', [\App\Http\Controllers\Admin\NewsController::class, 'edit'])
	  ->where('id', '\d+');
  Route::get('/news/delete/{id}', [\App\Http\Controllers\Admin\NewsController::class, 'destroy'])
	  ->where('id', '\d+');
});

Route::get('/news', [\App\Http\Controllers\NewsController::class, 'index'])->name('news');
Route::get('/news/blabla/{slug}', [\App\Http\Controllers\NewsController::class, 'show'])
	->where('slug', '\w+')->name('news.show');

