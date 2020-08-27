<!-- *Повторить третье задание, но вывести на экран только города, начинающиеся с буквы «К»-->
<?php
$Russia = [
    'Татарстан' => ["Казань", "Нижнекамск", "Набереные Челны"],
    'Ростовская область' => ["Ростов-на-Дону", "Новочеркасск", "Аксай", "Каменск-Шахтинский"]
];
$Russia1 = $Russia;
foreach($Russia1 as $region => $city) {
    $arr = [];
    foreach($city as $item) {
    $firstLet = mb_substr($item, 0, 1,"UTF-8");
    if ($firstLet == 'К') {
        array_push($arr, $item);
    }    
}     
    $str = implode(', ',$arr);    
    echo "$region: $str <br>";
}
?>