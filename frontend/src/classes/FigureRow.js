import Calcul from "./Calcul";

export default class FigureRow {

	constructor(id, text, type, defaultValue, calcul, detailledCalcul, zone, joueurs) {
		this.Id = id;
		this.Text = text;
		this.Type = type;
		this.Calcul = calcul;
		this.DetailledCalcul = detailledCalcul;
		this.Zone = zone;
		this.Point = {};
		joueurs.forEach(joueur => {
			var playerId = joueur.Id;

			var value = defaultValue ?? 0;
			var isFixed = (type != FigureRow.Figure)
				? true : false;
			this.addPoint(playerId, value, isFixed);
		});
		//console.log(this.Point);
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

	isClickable(playerId, currentPlayerId) {
		return (playerId == currentPlayerId
			&& !this.isValueFixed(playerId)
			&& [Calcul.Fixed, Calcul.Sum, Calcul.SumOf].includes(this.Calcul));
	}

	isValueFixed(playerId) {
		return this.Point[playerId].isFixed;
	}

	hasPlay(playerId, value) {
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
				this.hasPlay(playerId, value);
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