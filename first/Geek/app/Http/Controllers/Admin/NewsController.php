<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function index()
	{
		return redirect()->route('news');
	}
	public function create()
	{
		echo "Добавить новость";
	}
	public function edit(int $id)
	{
		echo "Редактировать новость " . $id;
	}
	public function destroy(int $id)
	{
		echo "Удалить новость " . $id;
	}
}
