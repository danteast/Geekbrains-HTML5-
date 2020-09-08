<?php
    include'count.php'
    ?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Калькулятор-1</title>
    </head>
    <body>
        <form class='calculator' method="GET">
        <input class='field' type='text' name = 'number1' cols='3' placeholder="число 1" value= <?= $_GET['number1'] ?>>
        <input class='field' type='text' name = 'number2' cols='3' placeholder="число 2" value= <?= $_GET['number2'] ?>>
        <span class='field'>Результат =</span>
        <input class='field' type='text' name = 'answer' cols='4' value= <?= $res ?>>
        <div class='result'>
            <input  class='field btn' type='submit' name = 'operation[]'value= '+'>
            <input  class='field btn' type='submit' name = 'operation[]'value= '-'>
            <input  class='field btn' type='submit' name = 'operation[]'value= '*'>
            <input  class='field btn' type='submit' name = 'operation[]'value= '/'>
        </div>
        </form>
        
    </body>
    </html>