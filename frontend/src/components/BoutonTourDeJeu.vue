<template>
  <div class="tourDeJeu">
      <div class="rectangle" @click="lancerLesDes(diceArray)" v-if="game.Compteur > 0">
          Lancer les dés ({{game.Compteur}}/3)            <!-- Il faudra regarder si le joueur peut relancer et afficher autre chose selon le cas (ie le nombre de lancers restants) -->
      </div>
      {{compteur}}
  </div>
</template>

<script>
export default {
    props:["diceArray","game"],
    methods: {
        lancerLesDes(diceArray) {
            for (var i= 0; i < diceArray.length; i++) {
                if (diceArray[i].Etat === "Libre") {
                    diceArray[i].rollDice()
                }
            }
            this.game.decreaseCompteur();
        },

        getCompteur() {
            return this.game.Compteur;
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