<!-- Написать функцию, которая заменяет в строке пробелы на подчеркивания и возвращает
видоизмененную строчку-->

<?php
    function underlining ($sometext) {
        $newtext = '';       
        for ($i=0; $i < strlen($sometext); $i++) {            
            $symb = mb_substr($sometext, $i, 1,"UTF-8");              
            if ($symb == ' ') {
                $symb = '_';
            }
            $newtext.=$symb;        
        }       
        echo $newtext;        
    }
    underlining ("попробуйте, новую кроссплатформенную оболочку");
?>

