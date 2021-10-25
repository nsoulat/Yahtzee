<template>
    <div class="tourDeJeu">
        <div class="rectangle" title="Relance les dés qui sont restés sur le tapis de jeu"
             @click="lancerLesDes(diceArray)"
             v-if="game.Compteur > 0 && !allDiceBloque(diceArray)">
            Relancer les dés ({{ game.Compteur }}/2)
        </div>
    </div>
</template>

<script>
    export default {
        props: ["diceArray", "game"],
        methods: {
            lancerLesDes(diceArray) {
                for (var i = 0; i < diceArray.length; i++) {
                    if (diceArray[i].Etat === "Libre") {
                        diceArray[i].rollDice();
                        diceArray[i].setRandomPosition(this.diceArray);
                    }
                }
                this.game.decreaseCompteur();
            },

            getCompteur() {
                return this.game.Compteur;
            },

            allDiceBloque(diceArray) {
                for (var i = 0; i < diceArray.length; i++) {
                    if (diceArray[i].Etat === "Libre") {
                        return false;
                    }
                }
                return true;
            }
        }
    }
</script>

<style scoped>

    .tourDeJeu {
        width: 100%;
        height: 100%;
    }

    .rectangle {
        width: 100%;
        height: 100%;
        text-align: center;
        cursor: pointer;
        border-width: 3px;
        border-radius: 4px;
        box-shadow: inset 0px 0px 0px 6px black;
    }
</style>