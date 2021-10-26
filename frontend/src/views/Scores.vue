<template>
    <div>
        <h1>Meilleurs scores</h1>
        <ul>
            <li v-for="(score, index) in scores"
                :key="index">
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
        mounted() {
            this.retrieveScores();
        },
        methods: {
            retrieveScores() {
                ScoreDataService.getAll()
                    .then(response => {
                        this.scores = response.data;
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
        }
    };
</script>

<style scoped>

    h1 {
        font-size: 88px;
    }
</style>
