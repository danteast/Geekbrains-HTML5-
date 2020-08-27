<!-- Объявить массив, в котором в качестве ключей будут использоваться названия областей, а в
качестве значений – массивы с названиями городов из соответствующей области.
Вывести в цикле значения массива, чтобы результат был таким:
Московская область:
Москва, Зеленоград, Клин.
Ленинградская область:
Санкт-Петербург, Всеволожск, Павловск, Кронштадт.
Рязанская область…(названия городов можно найти на maps.yandex.ru)-->
<?php
$Russia = [
    'Татарстан' => ["Казань", "Нижнекамск", "Набереные Челны"],
    'Ростовская область' => ["Ростов-на-Дону", "Новочеркасск", "Аксай", "Шахты"]
];
foreach($Russia as $region => $city) {     
    $str = implode(', ',$city);    
    echo "$region: $str <br>";
}
?>