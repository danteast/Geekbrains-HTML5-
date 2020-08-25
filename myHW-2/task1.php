<?php
    function arifmetics($a, $b) {
    if ($a >= 0 && $b >= 0) {
        echo $a - $b;
    } elseif ($a < 0 && $b < 0) {
        echo $a * $b;
    } else {
        echo $a + $b;
    }
}

    arifmetics(15, -8)

?>