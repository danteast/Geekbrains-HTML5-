<?php
include "flavour.php";

class FlavQuality extends Flavour1 {
    private $price;
        
    function __construct($name, $producer, $price) {
        parent::__construct($name, $producer);
        $this->price = $price;
    }
        
}