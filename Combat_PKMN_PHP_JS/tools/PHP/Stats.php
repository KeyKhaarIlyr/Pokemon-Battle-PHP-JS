<?php

class Stats
{
	private $_hpMax;
    private $_atkStat;
    private $_defStat;
    private $_speed;

    public function __construct($hpMax, $atkStat, $defStat, $speed)
    {
        $this->_hpMax = $hpMax;
        $this->_atkStat = $atkStat;
        $this->_defStat = $defStat;
        $this->_speed = $speed;
    }

    public function getHpMax()
    {
        return $this->_hpMax;
    }
    public function getAtkStat()
    {
        return $this->_atkStat;
    }
    public function getDefStat()
    {
        return $this->_defStat;
    }
    public function getSpeed()
    {
        return $this->_speed;
    }
}