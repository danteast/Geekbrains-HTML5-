<!-- Объявить массив, индексами которого являются буквы русского языка, а значениями –
соответствующие латинские буквосочетания-->

<?php
$array = [
    'а'=>'a', 
    'б'=>'b', 
    'в'=>'v', 
    'г'=>'g', 
    'д'=>'d', 
    'е'=>'e', 
    'ё'=>'yo', 
    'ж'=>'zh', 
    'з'=> 'z',
    'и'=>'i', 
    'й'=>'j', 
    'к'=>'k', 
    'л'=>'l', 
    'м'=>'m', 
    'н'=>'n', 
    'о'=>'o', 
    'п'=>'p', 
    'р'=>'r', 
    'с'=>'s', 
    'т'=>'t',
    'у'=>'u', 
    'ф'=>'f', 
    'х'=>'h', 
    'ц'=>'c', 
    'ч'=>'ch', 
    'ш'=>'sh', 
    'щ'=>'shh', 
    'ъ'=>'"', 
    'ы'=>'y', 
    'ь'=>'\'',
    'э'=>'e\'', 
    'ю'=>'yu', 
    'я'=>'ya'
];
    function transliteration ($array, $sometext) {
        $newtext = '';       
        for ($i=0; $i < strlen($sometext); $i++) {            
            $symb = mb_substr($sometext, $i, 1,"UTF-8");
            $yes = false;           
            foreach ($array as $rus => $lat) {                
                if ($symb == $rus) {
                    $newtext .= $lat;
                    $yes = true;                                     
                }                
            }    
            if (!$yes) {
                    $newtext .= $symb;
            }       
        }       
        echo $newtext;        
    }
    transliteration ($array,"попробуйте, новую кроссплатформенную оболочку");
?>

