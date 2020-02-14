class Fight
{
    constructor(selection)
    {
        this.history = document.getElementById("history");
		this.name = document.getElementsByClassName("info");

        this.selection = selection;
        this.fighters = [];

        this.getFightPok = function()
        {
            for(let i = 0; i < this.selection.pokSelection.length; i++)
            {
                if((this.selection.pokSelection[i] != this.selection.pokSelection[this.selection.pok1]) && (this.selection.pokSelection[i] != this.selection.pokSelection[this.selection.pok2]))
                {
                    this.selection.pokSelection[i].style.display = "none";
                }
                else
                {
                    this.selection.pokSelection[i].style.display = "flex";
                    for(let i = 0; i < this.selection.pokSelection.length; i++)
                    {
                        if(this.selection.pokSelection[i].style.display == "flex")
                        {
                            this.fighters.push(this.name[i].dataset.name);
                            console.log(this.fighters);
                        }
                    }
                }
            }
        }
    }
    getFight()
    {
        this.history.textContent +="C'est à " + this.fighters[0] + " de jouer !";
        //fail to get the good name, I don't have time to do more

        //here is to get all the order of actions in the fight
    }
}