<template>
<div class="Jeu">
  <tableau/>
  <tapisJeu/>
</div>
</template>

<script>
import tableau from "../components/Tableau.vue"
import tapisJeu from "../components/TapisJeu.vue"

export default {
    name: 'Jeu',
  components: {
    tableau,
    tapisJeu
  }
}
</script>

<style>


</style>