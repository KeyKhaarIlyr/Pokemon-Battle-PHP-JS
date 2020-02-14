class Nav
{
	constructor()
	{
		this.title = document.getElementById("title");
		this.messages = document.getElementById("messages");
		this.p1 = document.getElementById("welcome");
		this.p2 = document.getElementById("indication");
		this.main = document.getElementById("main");
		this.selectMenu = document.getElementsByClassName("pokeBox");
		this.fightMenu = document.getElementById("fightArea");
		this.scores = document.getElementById("scores");//to define
		this.quit = document.getElementById("quit");
		this.nextStep = document.getElementById("nextStep");

		this.setHome = function()
		{
			this.title.style.fontSize = "9rem";
			this.title.innerHTML = "Pokemon Battle !";
			this.title.style.paddingTop = "2%";
			this.messages.style.display = "flex";
			this.p1.style.display = "flex";
			this.p2.style.display = "none";
			this.main.style.display = "none";
			for(let i = 0; i < this.selectMenu.length ; i++)
			{
				this.selectMenu[i].style.display = "none";
			}
			this.fightMenu.style.display = "none";
			this.scores.style.display = "none";
			this.nextStep.style.display = "flex";
			this.nextStep.innerHTML = "Passer";
		}
		this.setPage2 = function()
		{
			this.title.style.fontSize = "9rem";
			this.title.innerHTML = "Pokemon Battle !";
			this.title.style.paddingTop = "2%";
			this.messages.style.display = "flex";
			this.p1.style.display = "none";
			this.p2.style.display = "flex";
			this.main.style.display = "none";
			for(let i = 0; i < this.selectMenu.length ; i++)
			{
				this.selectMenu[i].style.display = "none";
			}
			this.fightMenu.style.display = "none";
			this.scores.style.display = "none";
			this.nextStep.innerHTML = "Passer";
		}
		this.setPage3 = function()
		{
			this.title.style.fontSize = "3rem";
			this.title.innerHTML = "Sélectionnez votre Pokémon !";
			this.title.style.paddingTop = "1%";
			this.messages.style.display = "none";
			this.p1.style.display = "none";
			this.p2.style.display = "none";
			this.main.style.display = "flex";
			for(let i = 0; i < this.selectMenu.length ; i++)
			{
				this.selectMenu[i].style.display = "flex";
			}
			this.fightMenu.style.display = "none";
			this.scores.style.display = "none";
			this.nextStep.style.display = "none";
			this.nextStep.innerHTML = "Sélectionner";
		}
		this.setPage4 = function()
		{
			this.title.style.fontSize = "3rem";
			this.title.innerHTML = "Combattez !";
			this.title.style.paddingTop = "1%";
			this.messages.style.display = "none";
			this.p1.style.display = "none";
			this.p2.style.display = "none";
			this.main.style.display = "flex";
			for(let i = 0; i < this.selectMenu.length ; i++)
			{
				this.selectMenu[i].style.display = "flex";
			}
			this.fightMenu.style.display = "flex";
			this.scores.style.display = "none";
			this.nextStep.innerHTML = "Jouer mon tour !";
		}
		this.setPage5 = function()
		{
			this.title.style.fontSize = "9rem";
			this.title.innerHTML = "Rejouer ?";
			this.title.style.paddingTop = "1%";
			this.messages.style.display = "none";
			this.p1.style.display = "none";
			this.p2.style.display = "none";
			this.main.style.display = "none";
			for(let i = 0; i < this.selectMenu.length ; i++)
			{
				this.selectMenu[i].style.display = "none";
			}
			this.fightMenu.style.display = "none";
			this.scores.style.display = "flex";
			this.nextStep.innerHTML = "Rejouer";
		}
	}

	getHome()
	{
		return this.setHome();
	}
	getPage2()
	{
		return this.setPage2();
	}
	getPage3()
	{
		return this.setPage3();
	}
	getPage4()
	{
		return this.setPage4();
	}
	getPage5()
	{
		return this.setPage5();
	}
}