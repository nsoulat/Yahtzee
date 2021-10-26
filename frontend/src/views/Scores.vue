<template>
    <div>
        <h1>Meilleurs scores</h1>
        <table>
            <tr>
                <td class="title"> Classement </td>
                <td class="title"> Nom </td>
                <td class="title"> Score </td>
                <td class="title"> Date </td>
            </tr>
            <tr v-for="(score, index) in scores" :key="index">
                <td class="score"> {{ index + 1 }} </td>
                <td class="score"> {{ score.name }} </td>
                <td class="score"> {{ score.points }} </td>
                <td class="score"> {{ toDate(score.createdAt) }} </td>
            </tr>
        </table>
    </div>
</template>

<script>
    import ScoreDataService from "../services/ScoreDataService.js";
    import moment from 'moment';

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
            },
            toDate: function (createdAt) {
                return moment(createdAt).format('DD/MM/YYYY [à] HH:mm');
            }
        },
        computed: {

        }
    }
</script>

<style scoped>

    h1 {
        font-size: 88px;
    }

    table {
        text-align: center;
        border-collapse: collapse;
        border: solid 4px #000;
        background-color: rgba(255,255,255,0.45);
        float: right;
        text-decoration: none;
        cursor: default;
        width: 100%;
    }

    tr {
        height: 33px;
    }

    td {
        border: 1px solid black;
        vertical-align: middle;
        width: 25%;
    }

    .title {
        background-color: rgba(40,40,40,0.4);
    }
</style>
