class Selection
{
	constructor()
	{
		this.azurill = document.getElementById("Azurill");
		this.germignon = document.getElementById("Germignon");
		this.goupix = document.getElementById("Goupix");
		this.pichu = document.getElementById("Pichu");
		this.tarsal = document.getElementById("Tarsal");
		this.feuforeve = document.getElementById("Feuforeve");

		this.pok1 = 7;
		this.pok2 = 9;
		this.pokSelection = [this.azurill, this.germignon, this.goupix, this.pichu, this.tarsal, this.feuforeve];

	}
	getPok1()
	{
		switch(this.pok1)
		{
			case 0:
				this.pokSelection[this.pok1].style.backgroundColor = "rgba(255, 255, 255, 0.8)";
				//find other instructions to set up the fight
			break;
			case 1:
				this.pokSelection[this.pok1].style.backgroundColor = "rgba(255, 255, 255, 0.8)";
				//find other instructions to set up the fight
			break;
			case 2:
				this.pokSelection[this.pok1].style.backgroundColor = "rgba(255, 255, 255, 0.8)";
				//find other instructions to set up the fight
			break;
			case 3:
				this.pokSelection[this.pok1].style.backgroundColor = "rgba(255, 255, 255, 0.8)";
				//find other instructions to set up the fight
			break;
			case 4:
				this.pokSelection[this.pok1].style.backgroundColor = "rgba(255, 255, 255, 0.8)";
				//find other instructions to set up the fight
			break;
			case 5:
				this.pokSelection[this.pok1].style.backgroundColor = "rgba(255, 255, 255, 0.8)";
				//find other instructions to set up the fight
			break;
		}
	}
	getPok2()
	{
		switch(this.pok2)
		{
			case 0:
				this.pokSelection[this.pok2].style.backgroundColor = "rgba(255, 255, 255, 0.8)";
				//find other instructions to set up the fight
			break;
			case 1:
				this.pokSelection[this.pok2].style.backgroundColor = "rgba(255, 255, 255, 0.8)";
				//find other instructions to set up the fight
			break;
			case 2:
				this.pokSelection[this.pok2].style.backgroundColor = "rgba(255, 255, 255, 0.8)";
				//find other instructions to set up the fight
			break;
			case 3:
				this.pokSelection[this.pok2].style.backgroundColor = "rgba(255, 255, 255, 0.8)";
				//find other instructions to set up the fight
			break;
			case 4:
				this.pokSelection[this.pok2].style.backgroundColor = "rgba(255, 255, 255, 0.8)";
				//find other instructions to set up the fight
			break;
			case 5:
				this.pokSelection[this.pok2].style.backgroundColor = "rgba(255, 255, 255, 0.8)";
				//find other instructions to set up the fight
			break;
		}
	}
	getSame()
	{
		for(let i = 0; i < this.pokSelection[i]; i++)
		{
			if(i != this.pok1)
			{
				this.pokSelection[i].style.backgroundColor = "rgba(255, 255, 255, 0.4)";
			}
		}
		alert("Vous ne pouvez pas sélectionner deux fois le même pokemon !");
	}
	getReset()
	{
		document.location.reload(true);
		//I found a simple line to refresh, if I get the time, I'll delete
		//all useless instructions
	}

}