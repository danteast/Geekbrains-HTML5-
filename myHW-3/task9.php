<!-- Объединить две ранее написанные функции в одну, которая получает строку на русском
языке, производит транслитерацию и замену пробелов на подчеркивания (аналогичная задача
решается при конструировании url-адресов на основе названия статьи в блогах)-->
<?php

    function transliteration ($sometext) {
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
        return $newtext;        
    }
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
    function translitUnderline ($sometext) {
        underlining(transliteration ($sometext));       
    }
    translitUnderline ("однажды, в студеную зимнюю пору я из лесу вышел, был сильный мороз...");
?>

