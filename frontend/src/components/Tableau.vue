<template>
    <div class="tableau">
        <table>
            <tr v-for="figure in game.Figures" :key="figure.Id" :class="figure.Type">
                <td :class='colonneInfo'> {{ figure.Text }} </td>
                <td v-for="(point, playerId) in figure.Point" :key="playerId" :class="[figure.isClickable(playerId, 0) ? 'clickable' : '', 'colonneJoueur']">
                    <span v-if="figure.Id === 0">
                        {{ game.Joueurs[playerId].Name }}
                    </span>
                    <span v-else>
                        {{ figure.hasValue() ? point.value : "" }}
                        {{ figure.hasValue() ? 1 : 0 }}
                        {{ figure.isClickable(playerId, 0) ? 1 : 0 }}
                        {{ figure.Calcul }}
                        {{ figure.isValueFixed(playerId) ? 1 : 0 }}
                    </span>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        props: ["game"],
        data() {
            return {

            };
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