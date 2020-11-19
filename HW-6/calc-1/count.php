<?php
// print_r($_POST);
if (((double)$_GET['number1'] || $_GET['number1'] == NULL) && ((double)$_GET['number2'] || $_GET['number2'] == NULL))  {
    if ($_GET['number1'] == NULL) {
        $_GET['number1'] = 0;
    }
    if ($_GET['number2'] == NULL) {
        $_GET['number2'] = 0;
    }
switch ($_GET['operation']) {
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

