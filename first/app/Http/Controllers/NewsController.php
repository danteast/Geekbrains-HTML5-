<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NewsController extends Controller
{
    protected $newsArr = [
        [
            'cat_id' => 1,
            'cat_title' => 'Политика',
            'cat_news' => [
                [
                    'new_id' => 1,
                    'new_title' => 'Новость политики №1',
                    'new_content' => 'lorem pacem...'
                ],
                [
                    'new_id' => 2,
                    'new_title' => 'Новость политики №2',
                    'new_content' => 'lorem pacem...'
                ],
                [
                    'new_id' => 3,
                    'new_title' => 'Новость политики №3',
                    'new_content' => 'lorem pacem...'
                ],
                [
                    'new_id' => 4,
                    'new_title' => 'Новость политики №4',
                    'new_content' => 'lorem pacem...'                    
                ],

            ],
        ],
        [
            'cat_id' => 2,
            'cat_title' => 'Культура',
            'cat_news' => [
                [
                    'new_id' => 1,
                    'new_title' => 'Новость культуры №1',
                    'new_content' => 'lorem pacem...'
                ],
                [
                    'new_id' => 2,
                    'new_title' => 'Новость культуры №2',
                    'new_content' => 'lorem pacem...'
                ],
                [
                    'new_id' => 3,
                    'new_title' => 'Новость культуры №3',
                    'new_content' => 'lorem pacem...'
                ],
                [
                    'new_id' => 4,
                    'new_title' => 'Новость культуры №4',
                    'new_content' => 'lorem pacem...'                    
                ],

            ],
        ],
        [
            'cat_id' => 3,
            'cat_title' => 'Кино',
            'cat_news' => [
                [
                    'new_id' => 1,
                    'new_title' => 'Новость кино №1',
                    'new_content' => 'lorem pacem...'
                ],
                [
                    'new_id' => 2,
                    'new_title' => 'Новость кино №2',
                    'new_content' => 'lorem pacem...'
                ],
                [
                    'new_id' => 3,
                    'new_title' => 'Новость кино №3',
                    'new_content' => 'lorem pacem...'
                ],
                [
                    'new_id' => 4,
                    'new_title' => 'Новость кино №4',
                    'new_content' => 'lorem pacem...'                    
                ],

            ],
        ],
        [
            'cat_id' => 4,
            'cat_title' => 'Авто',
            'cat_news' => [
                [
                    'new_id' => 1,
                    'new_title' => 'Автоновость №1',
                    'new_content' => 'lorem pacem...'
                ],
                [
                    'new_id' => 2,
                    'new_title' => 'Автоновость №2',
                    'new_content' => 'lorem pacem...'
                ],
                [
                    'new_id' => 3,
                    'new_title' => 'Автоновость №3',
                    'new_content' => 'lorem pacem...'
                ],
                [
                    'new_id' => 4,
                    'new_title' => 'Автоновость №4',
                    'new_content' => 'lorem pacem...'                    
                ],

            ],
        ],
        [
            'cat_id' => 5,
            'cat_title' => 'Погода',
            'cat_news' => [
                [
                    'new_id' => 1,
                    'new_title' => 'Новость о погоде №1',
                    'new_content' => 'lorem pacem...'
                ],
                [
                    'new_id' => 2,
                    'new_title' => 'Новость о погоде №2',
                    'new_content' => 'lorem pacem...'
                ],
                [
                    'new_id' => 3,
                    'new_title' => 'Новость о погоде №3',
                    'new_content' => 'lorem pacem...'
                ],
                [
                    'new_id' => 4,
                    'new_title' => 'Новость о погоде №4',
                    'new_content' => 'lorem pacem...'                    
                ],

            ],
        ],        
    ];

    public function index() {
        return view('task2/firstPage', ['newsArr'=>$this->newsArr]);
    } 

    public function catList() {
        return view('task2/newsCatList', ['newsArr'=>$this->newsArr]);
    }

    public function newsList(int $id) {        
        $checkedCat =  $this->newsArr[$id-1];        
        return view('task2/newsList', ['checkedCat'=>$checkedCat]);
    }

    public function checkedNew(int $cat_id, int $new_id) {
        $checkedNew = $this->newsArr[$cat_id-1]['cat_news'][$new_id-1];
        // echo $checkedNew['new_title'];
        return view('task2/checkedNew', ['checkedNew'=>$checkedNew]);
    }
}
