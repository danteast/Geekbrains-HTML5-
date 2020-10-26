<div>
    <h2>Список новостей:</h2><br>
    @foreach($news as $n)
        <p><a href="{{ route('news.show', ['slug' => $n['slug']]) }}">{{ $n['title'] }}</a></p>
    @endforeach
</div>