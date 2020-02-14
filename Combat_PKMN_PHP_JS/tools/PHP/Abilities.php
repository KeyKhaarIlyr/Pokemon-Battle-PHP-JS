<?php

class Abilities
{
	private $_pokemonAbilities;

	private $_abilities;

	private $_normalAbilities;
	private $_waterAbilities;
	private $_plantlAbilities;
	private $_fireAbilities;
	private $_electrikAbilities;
	private $_psyAbilities;
	private $_ghostAbilities;
	
	public function __construct($abilities)
	{
		$this->_abilities = $abilities;
	}


	private function createAbilities()
	{
		$this->_normalAbilities = array(
			0 => "Rugissement",
			1 => "Mimi-Queue",
			2 => "Groz'Yeux",
			3 => "Abri",
			4 => "Vive-Attaque"
		);
		$this->_waterAbilities = array(
			0 => "Pistolet à O",
			1 => "Tourniquet",
			2 => "Bulles d'O",
			);
		$this->_plantAbilities = array(
			0 => "Tranch'Herbe",
			1 => "Synthèse",
			2 => "Fouet Lianes"
			);
		$this->_fireAbilities = array(
			0 => "Flammèche",
			1 => "Danse Flame",
			2 => "Lance Flammes"
			);
		$this->_electrikAbilities = array(
			0 => "Étincelle",
			1 => "Cage-Éclair"
			);
		$this->_psyAbilities = array(
			0 => "Choc Mental",
			1 => "Plénitude"
			);
		$this->_ghostAbilities = array(
			0 => "Châtiment",
			1 => "VampiBaiser",
			2 => "Hypnose"
			);
	}
	private function setPkmnAbilities()
	{
		$this->createAbilities();
		for($i = 0; $i < 4; $i++)
		{
			switch($this->_abilities[$i])
			{
				case 'normal':
					$this->_pokemonAbilities[$i] = $this->_normalAbilities[$this->_abilities[($i + 4)]];
				break;
				case 'water':
					$this->_pokemonAbilities[$i] = $this->_waterAbilities[$this->_abilities[($i + 4)]];
				break;
				case 'plant':
					$this->_pokemonAbilities[$i] = $this->_plantAbilities[$this->_abilities[($i + 4)]];
				break;
				case 'fire':
					$this->_pokemonAbilities[$i] = $this->_fireAbilities[$this->_abilities[($i + 4)]];
				break;
				case 'electrik':
					$this->_pokemonAbilities[$i] = $this->_electrikAbilities[$this->_abilities[($i + 4)]];
				break;
				case 'psy':
					$this->_pokemonAbilities[$i] = $this->_psyAbilities[$this->_abilities[($i + 4)]];
				break;
				case 'ghost':
					$this->_pokemonAbilities[$i] = $this->_ghostAbilities[$this->_abilities[($i + 4)]];
				break;
			}
		}
	}

	public function getAbilities()
	{
		$this->setPkmnAbilities();
		return $this->_pokemonAbilities;
	}
}