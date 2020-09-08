<?php
    $sqlserver = "localhost";
    $sqluser = "root";
    $sqlpass = "root";
    $sqlbase = "danis_03.09";
     
    $connect = mysqli_connect($sqlserver, $sqluser, $sqlpass, $sqlbase);
    
    if (!$connect) {
        echo "Ошибка: Невозможно установить соединение с MySQL<br>";
        echo "<br>Код ошибки errno: " . mysqli_connect_errno();
        echo "<br>Текст ошибки error: " . mysqli_connect_error();
        exit;
    }
?>