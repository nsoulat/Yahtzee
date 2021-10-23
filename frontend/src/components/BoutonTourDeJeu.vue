<template>
  <div class="tourDeJeu">
      <div class="rectangle" @click="lancerLesDes(diceArray)">
          Lancer les dés             <!-- Il faudra regarder si le joueur peut relancer et afficher autre chose selon le cas (ie le nombre de lancers restants) -->
      </div>
  </div>
</template>

<script>
export default {
    props:["diceArray"],
    methods: {
        lancerLesDes(diceArray) {
            for (var i= 0; i < diceArray.length; i++) {
                if (diceArray[i].Etat === "Libre") {
                    diceArray[i].rollDice()
                }
            }
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