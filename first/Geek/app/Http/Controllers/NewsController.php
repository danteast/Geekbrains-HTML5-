<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NewsController extends Controller
{
	protected $newsList = [
		[
			'id'   => 1,
			'slug' => 'one',
			'title' => 'Первая новость',
			'description' => 'Описание первой новости'
		],
		[
			'id'   => 2,
			'slug' => 'two',
			'title' => 'Вторая новость',
			'description' => 'Описание второй новости'
		],
		[
			'id'   => 3,
			'slug' => 'three',
			'title' => '3 новость',
			'description' => 'Описание 3 новости'
		],
	];
	public function index()
	{
		return view('news.index', ['news' => $this->newsList]);
	}

	public function show(string $slug = 'test')
	{
		return view('news.show', ['slug' => $slug]);
	}
}
