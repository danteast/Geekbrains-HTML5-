<?php 
// Написать функцию, которая вычисляет текущее время и возвращает его в формате с правильными склонениями
$time = time();
$currDays = (int)(time() / 86400);
$currDays1 = time() % 86400;
$currHours = (int)($currDays1 / 3600 + 3);
$currHours1 = $currDays1 % 3600;
$currMins = (int)($currHours1 / 60);
$hourStr = (string)$currHours;
$hour = '';
if ($hourStr[-1] && $hourStr[-2] == 0) {   
        $hour = 'час';
    }   elseif ($hourStr[-1] > 1 && $hourStr[-1] < 5 && $hourStr[-2] == 0) {    
        $hour = 'часа';
    } else {
        $hour = 'часов'; 
    }
$minStr = (string)$currMins;
$min = '';
if ($minStr[-1] == 1 && $minStr[-2] == 0) {   
        $min = 'минута';
    }   elseif ($minStr[-1] > 1 && $minStr[-1] < 5 && $minStr[-2] == 0) {    
        $min = 'минуты';
    } else {
        $min = 'минут'; 
    }    
echo "Текущее время сервера: $currHours $hour $currMins $min <br>";
echo date('H:m:s')
?>