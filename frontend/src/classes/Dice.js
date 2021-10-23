export default class Dice {
    constructor() {
        this.Value = null;
        this.Etat = "Libre";   //Etat pour savoir si le dé est à relancer ou non
        this.rollDice();
    }

    changeEtat() {
        this.Etat = this.Etat === "Bloque" ? "Libre" : "Bloque";
    }

	setRandomDiceData() {
		this.Value = Math.floor(Math.random() * 6) + 1;
	}

    rollDice() {
		let count = 0;
		const timer = setInterval(() => {
		this.setRandomDiceData();
		if (count >= 6) {
			clearInterval(timer);
		}
		count += 1;
		}, 80);
    }
}