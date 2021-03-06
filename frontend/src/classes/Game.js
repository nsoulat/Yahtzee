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

        this.Totals = {}; // the key is the zone
        this.Figures = [];
        let id = 0;
        this.Zones = [];

        this.Compteur = 2;

        figurelist.forEach(item => {
            var figure = new FigureRow(
                id++,
                item.text,
                item.type,
                item.defaultValue,
                item.calcul,
                item.detailledCalcul,
                item.zone,
                this.Joueurs);
            this.Figures.push(figure);
            let zoneInt = parseInt(item.zone, 10);
            if (item.type === FigureRow.SousTotal || item.type === FigureRow.Total) {
                this.Totals[parseInt(item.detailledCalcul, 10)] = figure;
            }
            if (!this.Zones.includes(zoneInt) && zoneInt > -1) {
                this.Zones.push(zoneInt);
            }
        });

        this.Zones.sort(function (a, b) {
            return a - b;
        }); // sort integer array

        this.CurrentPlayer = this.Joueurs[0]; // initial player
        this.TurnCounter = 0;
    }

    addPlayer(id, name) {
        this.Joueurs.push(new Joueur(id, name));
    }

    play(figureId, playerId, des) {
        this.Figures[figureId].hasPlayed(playerId, des);
    }

    updateTotal(playerId) {
        // in the figureList.json, the zone must be well order
        this.Zones.forEach(zone => {
            this.updateAutomaticInZone(playerId, zone);
            let count = this.getTotalForZone(playerId, zone);
            this.Totals[zone].setValue(playerId, count);
        });
    }

    updateAutomaticInZone(playerId, zone) {
        this.Figures.forEach(figure => {
            if (figure.isAutomatic() && figure.Zone === zone) {
                let count = this.getTotalForZone(playerId, zone);
                figure.setAutomaticValue(playerId, count);
            }
        });
    }

    endTurn() {
        this.updateTotal(this.CurrentPlayer.Id);
        this.CurrentPlayer = this.Joueurs[(++this.TurnCounter) % this.Joueurs.length];
        if (this.isTheEnd()) {
            this.IsProgress = false;
            this.Compteur = 0;
        }
        else {
            this.resetCompteur();
        }
    }

    isTheEnd() {
        let isThereMove = false;
        this.Figures.forEach(figure => {
            if (figure.isClickable(this.CurrentPlayer.Id, this.CurrentPlayer.Id)) {
                isThereMove = true;
            }
        });
        return !isThereMove;
    }

    getWinners() {
        let winners = [];
        let maxPoints = 0;
        this.Joueurs.forEach(joueur => {
            let total = this.Totals[this.Zones.at(-1)].getValue(joueur.Id);
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

    getTotalForZone(playerId, zone) {
        let count = 0;
        this.Figures.forEach(figure => {
            if (figure.Zone === zone) {
                count += figure.getValue(playerId);
            }
        });
        return count;
    }

    decreaseCompteur() {
        this.Compteur--;
    }

    resetCompteur() {
        this.Compteur = 2;
    }

}