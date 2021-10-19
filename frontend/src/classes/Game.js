import figurelist from "../assets/Figureslist.json";
import FigureRow from "./FigureRow";
import Joueur from "./Joueur";

export default class Game {

    constructor(nbJoueur, nameArray) {
        this.IsProgress = true;
        this.Winner = null;
        this.Joueurs = [];
        for (let i = 0; i < nbJoueur; i++) {
            this.addPlayer(i, nameArray[i]);
        }
        this.Figures = [];
        console.log(this.Joueurs);
        figurelist.forEach(item => {
            var figure = new FigureRow(
                item.id,
                item.text,
                item.type,
                item.defaultValue,
                item.calcul,
                item.zone,
                this.Joueurs);
            this.Figures.push(figure);
        });

        console.log(this.Figures);

        this.CurrentTurn = this.Joueurs[0]; // initial player
        this.TurnCounter = 0;
    }

    addPlayer(id, name) {
        this.Joueurs.push(new Joueur(id, name));
        console.log("Joueur ajouté");
    }

}