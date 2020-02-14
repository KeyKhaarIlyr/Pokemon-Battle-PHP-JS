<?php

require "tools/PHP/Pokemon.php";
require "tools/PHP/Stats.php";
require "tools/PHP/Abilities.php";

$AzurillStats = new Stats(50, 1.2, 0.9, 70);//here, $atkStat and $defStat are ratios that'll be applied on ability's basic damages
$GermignonStats = new Stats(60, 1, 0.7, 50);
$GoupixStats = new Stats(40, 1.6, 0.8, 60);
$PichuStats = new Stats(30, 1.6, 0.9, 100);
$TarsalStats = new Stats(50, 1.4, 0.9, 100);
$FeuforeveStats = new Stats(30, 2, 0.5, 70);

//I don't know yet how to send not integer numbers, so stats that arn't hpMax won't be used finally

$AzurillAbilities = new Abilities(array("water", "normal", "water", "water", 0, 1, 1, 2));
$GermignonAbilities = new Abilities(array("plant", "normal", "plant", "plant", 0, 0, 1, 2));
$GoupixAbilities = new Abilities(array("fire", "normal", "fire", "fire", 0, 0, 1, 2));
$PichuAbilities = new Abilities(array("electrik", "normal", "electrik", "normal", 0, 1, 1, 4));
$TarsalAbilities = new Abilities(array("psy", "normal", "psy", "ghost", 0, 0, 1, 1));
$FeuforeveAbilities = new Abilities(array("ghost", "normal", "normal", "ghost", 0, 2, 3, 2));

$Azurill = new Pokemon(
	"Azurill",
	$AzurillStats->getHpMax(),
	"water",
	"tools/IMG/pokemons/Azurill.png",
	$AzurillAbilities->getAbilities()
);

$Germignon = new Pokemon(
	"Germignon",
	$GermignonStats->getHpMax(),
	"plant",
	"tools/IMG/pokemons/Germignon.png",
	$GermignonAbilities->getAbilities(),
);

$Goupix = new Pokemon(
	"Goupix",
	$GoupixStats->getHpMax(),
	"fire",
	"tools/IMG/pokemons/Goupix.png",
	$GoupixAbilities->getAbilities()
);

$Pichu = new Pokemon(
	"Pichu",
	$PichuStats->getHpMax(),
	"electrik",
	"tools/IMG/pokemons/Pichu.png",
	$PichuAbilities->getAbilities()
);

$Tarsal = new Pokemon(
	"Tarsal",
	$TarsalStats->getHpMax(),
	"psy",
	"tools/IMG/pokemons/Tarsal.png",
	$TarsalAbilities->getAbilities()
);

$Feuforeve = new Pokemon(
	"Feuforeve",
	$FeuforeveStats->getHpMax(),
	"ghost",
	"tools/IMG/pokemons/Feuforêve.png",
	$FeuforeveAbilities->getAbilities()
);

//var_dump($FeuforeveAbilities->getAbilities());