<?php
include "FlavQuality.php";
$arr = ["Chanel", "LaCoste", "Savauge"];
$producerArr = ["european", "chineese", "arabian"];
$flavour = [];
function checkProducer($producer) {    
    $price = ($producer == "european") ? rand(300,500) : rand(100,200);
    return $price;
}
checkProducer($producer);
for ($i = 0; $i<count($arr); $i++) {    
    $producer = $producerArr[rand(0,2)];   
    $price = checkProducer($producer);
    $flavour[$i] = new FlavQuality($arr[$i], $producer, $price);     
    echo $flavour[$i]->getName()." производства ".$flavour[$i]->getProducer()." стоит $price <br> <br>";
}