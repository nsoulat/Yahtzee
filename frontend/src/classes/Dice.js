export default class Dice {
    constructor() {
        this.Value = null;
        this.Etat = "Libre";   //Etat pour savoir si le dé est à relancer ou non
		this.ValueTemporary = null;
        this.rollDice();
    }

    changeEtat() {
        this.Etat = this.Etat === "Bloque" ? "Libre" : "Bloque";
    }

    devientLibre() {
        this.Etat = "Libre";
    }

    getRandomDiceData() {
        return Math.floor(Math.random() * 6) + 1;
    }

    rollDice() {
        let count = 0;
		this.Value = this.getRandomDiceData();
        const timer = setInterval(() => {
            this.ValueTemporary = this.getRandomDiceData();
            if (count >= 6) {
                clearInterval(timer);
				this.ValueTemporary = this.Value;
            }
            count += 1;
        }, 80);
    }
}