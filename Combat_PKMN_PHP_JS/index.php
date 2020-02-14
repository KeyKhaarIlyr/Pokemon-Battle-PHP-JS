<?php

require 'rooter.php';

?>

<!DOCTYPE html>
<html>
	<head>
		<title>Homemade Pokemon Fight</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fir=no">
		<link rel="icon" href="tools/IMG/icons/crown.png">
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
		<link rel="stylesheet" href="tools/CSS/style.css">
	</head>
	<body>
		<header class="container-fluid">
			<h1 class="col-12" id="title">Pokemon Battle !</h1>
			<div id="messages" class="col-12">
				<p class="col-8" id="welcome">Bienvenu.e dans ce jeu Pokemon expérimental !<br>Les règles sont simples, vous n'avez qu'à choisir deux pokémons pour les faire combattre. Vous aurez une sélection d'attaques à disposition.<br>Amusez-vous bien !</p>
				<p class="col-8" id="indication">Attention cela dit, les attaques n'auront pas forcément le même effet que dans un jeu Pokemon classique !</p>
			</div>
		</header>
		<main id="main" class="container-fluid row">
			<section class='col-12 row'>
				<?php
					$Azurill->displayPkmnInfos();
					$Germignon->displayPkmnInfos();
					$Goupix->displayPkmnInfos();
					$Pichu->displayPkmnInfos();
					$Tarsal->displayPkmnInfos();
					$Feuforeve->displayPkmnInfos();
				?>
			</section>
		</main>

		<section id="fightArea" class="container">
			<div class="col-6" id="fightPanel">
				<p class="col-12" id="subTitle">Historique du Combat</p>
				<p class="col-12" id="history"></p>
			</div>
		</section>
		<section id="scores">
		
		</section>

		<nav class="container-fluid row">
			<button id="nextStep">Passer</button>
			<button id="quit" type="submit" action="index.php">Quitter</button>
		</nav>

		<script src="tools/JS/Nav.js"></script>
		<script src="tools/JS/Selection.js"></script>
		<script src="tools/JS/Pokemon.js"></script>
		<script src="tools/JS/Fight.js"></script>
		<script src="tools/JS/rooter.js"></script>
	</body>
</html>