<?php
// print_r($_GET);
if (((double)$_GET['number1'] || $_GET['number1'] == NULL) && // проверка, являются ли введенные значения числами
((double)$_GET['number2'] || $_GET['number2'] == NULL))  {
    if ($_GET['number1'] == NULL) {
        $_GET['number1'] = 0;
    }
    if ($_GET['number2'] == NULL) {
        $_GET['number2'] = 0;
    }

switch ($_GET['operation'][0]) {
    case '+':
        $res = $_GET['number1'] + $_GET['number2'];
        $operation = '+';
    break;
    case '-':
        $res = $_GET['number1'] - $_GET['number2'];
        $operation = '-';
    break;
    case '*':
        $res = $_GET['number1'] * $_GET['number2'];
        $operation = '*';
    break;
    case '/':
        $res = $_GET['number1'] / $_GET['number2'];
        $operation = '/';
    break;
}
} else {
    die ("Введены некорректные данные");
}
?>
