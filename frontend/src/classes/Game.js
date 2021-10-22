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
        figurelist.forEach(item => {
            var figure = new FigureRow(
                item.id,
                item.text,
                item.type,
                item.defaultValue,
                item.calcul,
                item.detailledCalcul,
                item.zone,
                this.Joueurs);
            this.Figures.push(figure);
        });

        this.CurrentPlayer = this.Joueurs[0]; // initial player
        this.TurnCounter = 0;
        console.log("Création d'un nouveau Jeu");
    }

    addPlayer(id, name) {
        this.Joueurs.push(new Joueur(id, name));
    }

    updateTotal() {
        // TODO
    }

    endTurn() {
        this.updateTotal();
        this.CurrentPlayer = this.CurrentPlayer[++this.TurnCounter]
        if (isTheEnd()) {
            this.IsProgress = false;
        }
    }

    isTheEnd() {
        this.Figures.forEach(figure => {
            if (figure.isClickable(this.CurrentPlayer, this.CurrentPlayer)) {
                return false;
            }
        });
        return true;
    }

    getWinners() {
        let winners = [];
        let maxPoints = 0;
        this.Joueurs.forEach(joueur => {
            let total = this.Figures.at(-1); // A améliorer ?
            if (total > maxPoints) {
                maxPoints = total;
                winners = [joueur];
            }
            else if (total == maxPoints) {
                winners.push(joueur);
            }
        });
        return winners;
    }

}