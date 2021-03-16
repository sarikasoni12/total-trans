<?php

interface Pizza{
    public function price():int;
}

class CheesePizza implements Pizza {
    public function price():int
    {
        return 10;
    }
}

abstract class Topping implements Pizza{
    private $p;

    public function __construct(Pizza $p)
    {
        $this->p = $p;
    }
    public function price(): int
    {
        return $this->p->price();
    }
}
class Jalapeno extends Topping {
    public function price(): int
    {
        return parent::price()+2;
    }
}
class Onion extends Topping{

    public function price(): int
    {
        return parent::price()+2;
    }
}

$p = new CheesePizza();
$p = new Jalapeno($p);
$p = new Onion($p);
echo $p->price();
