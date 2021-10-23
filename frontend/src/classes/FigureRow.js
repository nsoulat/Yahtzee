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

	isValueFixed(playerId) {
		return this.Point[playerId].isFixed;
	}

	hasPlayed(playerId, value) {
		if (this.isValueFixed(playerId)) {
			console.log(`La valeur est déjà fixée: ${this.Point[playerId].value} (${value})`);
		}
		else {
			this.Point[playerId].value = value;
			this.Point[playerId].isFixed = true;
		}
	}

	setValue(playerId, value) {
		switch (this.Type) {
			case FigureRow.Figure:
				this.hasPlayed(playerId, value);
				break;
			case FigureRow.SousTotal:
			case FigureRow.Total:
				this.Point[playerId].value = value;
				break;
			default:
				break;
		}
	}
}

FigureRow.Figure = 'figure';
FigureRow.SousTotal = 'sousTotal';
FigureRow.Espace = 'espace';
FigureRow.Total = 'total';
FigureRow.NomJoueur = 'nomJoueur';