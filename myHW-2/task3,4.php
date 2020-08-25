<?php
    function sum($a, $b) {
        return $a + $b;
    }
    function decr($a, $b) {
        return $a - $b;
    }
    function mult($a, $b) {
        return $a * $b;
    }
    function div($a, $b) {
        return $a / $b;
    }

    function mathOperation($arg1, $arg2, $operation) {
        switch ($operation) {
            case '+':
                echo "сумма чисел равна " . sum($arg1, $arg2);
            break;
            case '-':
                echo "разность чисел равна " . decr($arg1, $arg2);
            break;
            case '*':
                echo "произведение чисел равно " . mult($arg1, $arg2);
            break;
            case '/':
                echo "частное чисел равно " . div($arg1, $arg2);
            break;
        }            
    }
    mathOperation(5, 9, '/')
?>