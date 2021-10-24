<template>
    <div class="tourDeJeu">
        <div class="rectangle" @click="lancerLesDes(diceArray)" v-if="game.Compteur > 0 && !allDiceBloque(diceArray)">
            Lancer les dés ({{ game.Compteur }}/3)
        </div>
        {{ compteur }}
    </div>
</template>

<script>
    export default {
        props: ["diceArray", "game"],
        methods: {
            lancerLesDes(diceArray) {
                for (var i = 0; i < diceArray.length; i++) {
                    if (diceArray[i].Etat === "Libre") {
                        diceArray[i].rollDice()
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

    .rectangle {
        height: 64px;
        cursor: pointer;
    }
</style>