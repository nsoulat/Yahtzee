<template>
	<div class="tapisJeu">
		<div class="ExterieurRectangle">
			<div class="InterieurRectangle">
				<span>
					{{ getWinner() }}
					{{ hasMultipleWinners() ? "ont" : "a" }} gagné !
				</span>
			</div>
		</div>
	</div>
</template>

<script>
import ScoreDataService from "../services/ScoreDataService";

export default {
	props: ["game"],
	data() {
		return {
			winners: [{ Name: "Personne" }],
            score: {
				id: null,
				name: "",
				points: null,
			}
		};
	},
	created() {
		this.winners = this.game.getWinners();
        this.saveScore();
	},
	methods: {
		getWinner() {
			if (this.hasMultipleWinners()) {
				return (
					"Egalité ! " +
					this.winners[0].Name +
					" et " +
					this.winners[1].Name
				);
			} else {
				return this.winners[0].Name;
			}
		},
		hasMultipleWinners() {
			return this.winners.length > 1;
		},
		saveScore() {
			this.game.Joueurs.forEach((joueur) => {
				var data = {
					name: joueur.Name,
					points: this.game.Totals[this.game.Zones.at(-1)].getValue(
						joueur.Id
					),
				};

				ScoreDataService.create(data)
					.then((response) => {
						this.score.id = response.data.id;
					})
					.catch((e) => {
						console.log(e);
					});
			});
		},
	},
};
</script>

<style scoped>
    .ExterieurRectangle {
        width: 100%;
        height: 500px;
        background: rgb(0, 83, 44);
        border: solid;
        border-color: rgb(0, 31, 10);
        border-radius: 4px;
        border-width: 3px;
    }

    .InterieurRectangle {
        width: 90%;
        height: 400px;
        background: rgb(0, 168, 90);
        margin-left: 5%;
        margin-top: 5%;
        border: solid;
        border-color: rgb(0, 31, 10);
        border-width: 3px;
        display: grid;
    }

    span {
        color: rgb(219 10 57);
        font-family: "Verdana";
        font-size: large;
        margin: auto;
    }
</style>
