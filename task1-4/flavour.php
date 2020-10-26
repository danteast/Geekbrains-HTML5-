<?php
class Flavour1 {
    protected $name;
    protected $producer;

    public function getName()
    {
        return $this->name;
    }

    public function getProducer()
    {
        return $this->producer;
    }

    function __construct($name, $producer) {
        $this->name = $name;
        $this->producer = $producer;
    }
    
}

