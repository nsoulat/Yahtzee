<template>
    <div class="tableau">
        <table>
            <tr v-for="figure in game.Figures" :key="figure.Id" :class="figure.Type">
                <td :class='colonneInfo'> {{ figure.Text }} </td>
                <td v-for="(point, playerId) in figure.Point" :key="playerId" :class="[figure.isClickable(playerId, game.CurrentPlayer.Id) ? 'clickable' : '', 'colonneJoueur']" @click="handler(figure, playerId)">
                    <span v-if="figure.Id === 0">
                        {{ game.Joueurs[playerId].Name }}
                    </span>
                    <span v-else-if="figure.Type === 'espace'"></span>
                    <span v-else>
                        {{ getValue(figure, playerId) }}
                    </span>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        props: ['game','diceArray'],
        created() {
            console.log(this.diceArray)
        },
        methods: {
            handler: function (figure, playerId) {
                if (figure.isClickable(playerId, this.game.CurrentPlayer.Id)) {
                    console.log(`${playerId} clicked on the row ${figure.Id}`);
                    this.game.play(figure.Id, playerId, this.diceArray);
                    this.game.endTurn();
                }
            },
            getValue: function (figure, playerId) {
                if (figure.isValueFixed(playerId)) {
                    return figure.getValue(playerId);
                }
                else if (figure.isClickable(playerId, this.game.CurrentPlayer.Id)) {
                    return figure.getComputedValue(this.game.CurrentPlayer.Id, this.diceArray);
                }
                else {
                    return "";
                }
            }
        }
    }

</script>

<style scoped>

    table {
        text-align: center;
        border-collapse: collapse;
        border: solid 4px #000;
        background-color: rgba(255,255,255,0.45);
        float: right;
        text-decoration: none;
        cursor: default;
    }

    table td {
        border: 1px solid black;
    }

    .nomJoueur {
        height: 33px;
    }

    .figure {
        width: 230px;
        height: 33px;
        vertical-align: middle;
    }

    .colonneJoueur {
        width: 250px;
        vertical-align: middle;
    }

    .colonneInfo {
        width: 250px;
        vertical-align: middle;
    }

    .clickable {
        background-color: rgb(40,40,40,0.1);
        color: rgb(72,0,255);
        cursor: pointer;
    }

    .sousTotal {
        height: 33px;
        background-color: rgba(40,40,40,0.4);
    }

    .total {
        height: 33px;
        background-color: rgba(40,40,40,0.6);
    }

    .espace {
        border: 0px;
        height: 20px;
    }
</style>