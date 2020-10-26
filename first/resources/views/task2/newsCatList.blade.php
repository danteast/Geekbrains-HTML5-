<h2>Выберите интересующую Вас категорию новостей</h2>
@foreach($newsArr as $newsCat)
<a href="/news/{{ $newsCat['cat_id'] }}">{{ $newsCat['cat_title'] }}</a><br><br>
@endforeach