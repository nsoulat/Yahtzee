export default class Dice {
    constructor() {
        this.Value = null;
        this.Etat = "Libre";   //Etat pour savoir si le dé est à relancer ou non
        this.rollDice();
    }

    changeEtat() {
        this.Etat = this.Etat == "Bloque" ? "Libre" : "Bloque";
    }

    rollDice() {
        this.Value = Math.floor(Math.random() * 6) + 1;
    }
}