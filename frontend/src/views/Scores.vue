<template>
	<div class="container-fluid mt-4">
		<h1>Meilleurs scores</h1>
		<ul class="list-group">
			<li class="list-group-item"
				v-for="(score, index) in scores"
				:key="index"
			>
				{{ score.name }} : {{ score.points }}
			</li>
		</ul>
	</div>
</template>

<script>
import ScoreDataService from "../services/ScoreDataService.js";

export default {
	name: 'Scores',

	data() {
		return {
			scores: [],
			currentScore: null,
			currentIndex: -1,
			title: ""
		};
	},
	methods: {
		retrieveScores() {
			ScoreDataService.getAll()
			.then(response => {
				this.scores = response.data;
				console.log(response.data);
			})
			.catch(e => {
				console.log(e);
			});
		},

		removeAllScores() {
			ScoreDataService.deleteAll()
			.then(response => {
				console.log(response.data);
				this.refreshList();
			})
			.catch(e => {
				console.log(e);
			});
		},
	},
		mounted() {
			this.retrieveScores();
		}
};
</script>

<style scoped>

h1 {
    font-size:88px;
}

</style>
