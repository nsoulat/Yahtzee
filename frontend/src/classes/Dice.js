export default class Dice {
    constructor() {
        this.Value = null;
        this.Etat = "Libre";   //Etat pour savoir si le dé est à relancer ou non
        this.ValueTemporary = null;
        this.PositionCol = null;
        this.PositionRow = null;
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

    setRandomPosition(diceArray) {
        let colmax = 4;
        let rowmax = 4;
        let col = this.getRandomInt(1, colmax);
        let row = this.getRandomInt(1, rowmax);
        let count = 1;
        while (count < colmax*rowmax && this.isOccupied(diceArray, col, row)) {
            col++
            if (col > colmax) { col = 1; row++ }
            if (row > rowmax) { row = 1 }
            count++;
        }
        this.PositionCol = col;
        this.PositionRow = row;
        console.log(`col ${this.PositionCol}, row ${this.PositionRow}, after ${count} essai`);
    }

    getRandomInt(min, max) { // [min, max]
        return Math.floor(Math.random() * max) + min;
    }

    isOccupied(diceArray, col, row) {
        let result = false;
        for (let i = 0; i < 5; i++) {
            let dice = diceArray[i];
            if (dice.PositionCol === col && dice.PositionRow === row) {
                result = true;
            }
        }
        return result;
    }
}

