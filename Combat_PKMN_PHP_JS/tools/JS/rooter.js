const pokemonInfos = document.getElementsByClassName("info");
//console.log(pokemonInfos[0].dataset.name);
//now I got to input all datasets into Pokemon.js to add all the stats

let nav = new Nav();
let selection = new Selection();
let fight = new Fight(selection);

function selectPok1()//Manipulate the nav object to set the 1st pokemon and call the "selectPok2()" function
{
	selection.pok1 = 7;
	selection.pok2 = 9;
	for(let i = 0; i < selection.pokSelection.length; i++)
	{
		selection.pokSelection[i].addEventListener('click', function()
		{
			if(selection.pok1 == 7 && selection.pok2 == 9)
			{
				nav.nextStep.style.display = "none";
				selection.pok1 = i;
				selection.getPok1();
				selection.pok1 != 7 ? selectPok2() : console.log('pok1 = 7');
			}
			
			selection.pokSelection[i].removeEventListener('click', function()
			{
				if(selection.pok1 == 7 && selection.pok2 == 9)
				{
					nav.nextStep.style.display = "none";
					selection.pok1 = i;
					selection.getPok1();
				}
			});
		});
	}
}


function selectPok2()//Select the second pokemon then
{
	selection.pok2 = 9;
	for(let j = 0; j < selection.pokSelection.length; j++)
	{
		selection.pokSelection[j].addEventListener('click', function()
		{
			if(selection.pok1 < 7 && selection.pok2 == 9)
			{
				selection.pok2 = j;

				if((selection.pok2 < 9) && (selection.pok2 != selection.pok1))
				{
					nav.nextStep.style.display = "flex";
					selection.getPok2();
				}
				else
				{
					selection.pok2 = 9;
					selection.getSame();
					//I'll make it better if I have the time, I know that alertboxes are not that smooth
					//Got to fix that, BE CAREFUL DIRTY CODING HERE
				}
			}

			selection.pokSelection[j].removeEventListener('click', function()
			{
				if(selection.pok1 < 7 && selection.pok2 == 9)
				{
					if(selection.pok1 != selection.pok2)
					{
						nav.nextStep.style.display = "flex";
						selection.pok2 = j;
						selection.getPok2();
					}
					else
					{
						selection.pok2 = 9;
						selection.getSame();
						//I'll make it better if I have the time, I know that alertboxes are not that smooth
						//Got to fix that, BE CAREFUL DIRTY CODING HERE
					}
				}
			});
		});
	}
	//selection.pok2 == 9 ? selectPok2() : console.log("From selectPok2 : Function okay ! pok1 = " + selection.pok1 + " & pok2 = " + selection.pok2);
}


let countPage = 0;

//making navigation from 1st page to the last one
nav.quit.addEventListener('click', function()
{
	nav.getHome();
	countPage = 0;
	document.getElementById("messages").style.display = "flex";

	if(countPage == 0)
	{
		selection.getReset();
		nav.nextStep.removeEventListener('click', function(){
			selectPok1();
		});
	}

});

nav.nextStep.addEventListener('click', function(){
		switch(countPage)
		{
			case 0:
				nav.getPage2();
				countPage = 1;
			break;
			case 1:
				nav.getPage3();
				countPage = 2;

				if(countPage == 2)
				{
					selectPok1();
				}
				else if(countPage != 2)
				{
					nav.nextStep.removeEventListener('click', function(){
						selectPok1();
					});
				}
			break;
			case 2:
				nav.getPage4();
				countPage = 3;
				fight.getFightPok();
			break;
			case 3:
				nav.getPage5();
				countPage = 4;

			break;
			case 4:
				selection.getReset();
				countPage = 0;
				document.getElementById("messages").style.display = "flex";
			break;
		}
});


fight.getFight();