<h2>Выберите интересующую Вас новость в категории {{ $checkedCat['cat_title'] }}</h2>
@foreach($checkedCat['cat_news'] as $new)
<a href="/news/{{ $checkedCat['cat_id'] }}/{{ $new['new_id'] }}">{{ $new['new_title'] }}</a><br><br>
@endforeach