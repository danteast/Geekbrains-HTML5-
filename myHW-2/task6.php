<?php       
    function power ($val, $pow) {        
        static $powCurr = 1;
        static $res = 1;
        if ($powCurr == $pow) {
            $res *= $val;
            echo $res;
            return;
        }        
        $res *=  $val;
        $powCurr++;
        power ($val, $pow);       
    }
    power (5, 5);
?>