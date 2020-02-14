<?php

class Pokemon
{
	private $_name;
	private $_hpMax;
	private $_type;
	private $_img;
	private $_abilities;

	public function __construct($name, $hpMax, $type, $img, $abilities)
	{
		$this->_name = $name;
		$this->_hpMax = $hpMax;
		$this->_type = $type;
		$this->_img = $img;
		$this->_abilities = $abilities;
	}

	public function displayPkmnInfos()
	{
		switch($this->_type)
		{
			case 'water':
				$this->_type = 'Eau';
			break;
			case 'fire':
				$this->_type = 'Feu';
			break;
			case 'plant':
				$this->_type = 'Plante';
			break;
			case 'electrik':
				$this->_type = 'Électrik';
			break;
			case 'psy':
				$this->_type = 'Psy';
			break;
			case 'ghost':
				$this->_type = 'Spectre';
			break;
		}

		echo '<div class="col-3 row pokeBox" id="' . $this->_name . '">
				<div class="col-4 avatar"><img src="' . $this->_img . '"></img></div>
				<p class="col-5 hp">' . $this->_hpMax . ' pv</p>
				<p class="col-4">' . $this->_name . ' :</p>
				<p class="col-5 type' . $this->_type . '">Type : ' . $this->_type . '</p>
				<p class="col-12">Attaques :</p>
				<p id="atak1" class="col-6">' . $this->_abilities[0] . '</p>
				<p id="atak2" class="col-6">' . $this->_abilities[1] . '</p>
				<p id="atak3" class="col-6">' . $this->_abilities[2] . '</p>
				<p id="atak4" class="col-6">' . $this->_abilities[3] . '</p>
				<div class="info"
				data-name="' . $this->_name . 
				'" data-type="' . $this->_type .
				'" data-hpMax="' . $this->_hpMax .
				'" data-ability0="' . $this->_abilities[0] . 
				'" data-ability1="' . $this->_abilities[1] . 
				'" data-ability2="' . $this->_abilities[2] . 
				'" data-ability3="' . $this->_abilities[3] . 
				'"></div>
			</div>';	//I can add atk, def and speed too, but I'll do it when I'll
						//be sure that it works
	}

}