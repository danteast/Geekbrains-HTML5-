<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    

    
    public function index() {
        dd($this->newsArr);
        return view('newsList');
    }

    public function create() {
        return view('new', $id);
    }

    public function edit() {
        return view('editNew');
    }

    public function destroy() {
        return view('editNew');
    }
}
