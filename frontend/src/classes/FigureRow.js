import { compute, computeAutomatic } from "./Calcul";
import Calcul from "./Calcul";

export default class FigureRow {

	constructor(id, text, type, defaultValue, calcul, detailledCalcul, zone, joueurs) {
		this.Id = id;
		this.Text = text;
		this.Type = type;
		this.Calcul = calcul;
		this.DetailledCalcul = detailledCalcul;
		this.DefaultValue = defaultValue;
		this.Zone = zone;
		this.Point = {};
		joueurs.forEach(joueur => {
			let playerId = joueur.Id;

			let value = defaultValue ?? 0;
			let isFixed = (type != FigureRow.Figure)
				? true : false;
			this.addPoint(playerId, value, isFixed);
		});
	}

	addPoint(playerId, value, isFixed) {
		if (!this.Point[playerId]) {
			this.Point[playerId] = {
				"value": value,
				"isFixed": isFixed
			};
		}
	}

	hasValue() {
		return [
			FigureRow.Figure,
			FigureRow.SousTotal,
			FigureRow.Total]
			.includes(this.Type);
	}

	getComputedValue(playerId, des) {
		//console.log(des);
		if (this.isValueFixed(playerId)) {
			return this.Point[playerId].value;
		}
		else {
			let value = compute(des, this.Calcul, this.DetailledCalcul, this.DefaultValue);
			//console.log(`${this.Calcul}, ${this.DetailledCalcul}, ${value}`);
			return value;
		}
    }

	getValue(playerId) {
		if (this.isValueFixed(playerId)) {
			return this.Point[playerId].value;
		}
		return 0;
    }

	isClickable(playerId, currentPlayerId) {
		return (playerId == currentPlayerId
			&& !this.isValueFixed(playerId)
			&& [Calcul.Fixed, Calcul.Sum, Calcul.SumOf].includes(this.Calcul));
	}

	isAutomatic() {
		return this.Calcul === Calcul.Automatic;
    }

	isValueFixed(playerId) {
		return this.Point[playerId].isFixed;
	}

	hasPlayed(playerId, des) {
		let value = this.getComputedValue(playerId, des);
		this.setValue(playerId, value);
	}

	setValue(playerId, value) {
		switch (this.Type) {
			case FigureRow.Figure:
				if (this.isValueFixed(playerId) && !this.isAutomatic()) {
					console.log(`La valeur est déjà fixée: ${this.Point[playerId].value} (${value})`);
				}
				else {
					this.Point[playerId].value = value;
					this.Point[playerId].isFixed = true;
				}
				break;
			case FigureRow.SousTotal:
			case FigureRow.Total:
				this.Point[playerId].value = value;
				break;
			default:
				break;
		}
	}

	setAutomaticValue(playerId, total) {
		let value = computeAutomatic(this.DetailledCalcul, this.defaultValue, total);
		this.setValue(playerId, value);
    }
}

FigureRow.Figure = 'figure';
FigureRow.SousTotal = 'sousTotal';
FigureRow.Espace = 'espace';
FigureRow.Total = 'total';
FigureRow.NomJoueur = 'nomJoueur';