<?php
    $a = rand(0, 15);
    function typeRow ($a) {
        if ($a == 15) {
            echo $a;
            return;
        }        
        echo "$a, ";
        typeRow (++$a);
    }
    typeRow ($a);
?>