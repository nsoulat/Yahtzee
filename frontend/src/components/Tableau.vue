<template>
    <div class = "tableau">
      <table>
        <tr v-for="figure in figures" :key="figure.id" :class="figure.type">
          <td class="colonneInfo">{{ figure.text }}</td>  
          <td class="colonneJoueur">{{ valeurJoueur1[figure.id].text }}</td>    
          <td class="colonneJoueur">{{ valeurJoueur2[figure.id].text }}</td> 
        </tr>
      </table>
  </div>
</template>

<script>

import figuresList from "@/assets/Figureslist.json"
import infoJoueur1 from "@/assets/Joueur1.json"   /* Il faudra changer ça pour correspondre à la future architecture */
import infoJoueur2 from "@/assets/Joueur2.json"

export default {
  data() {
    return {
figures : figuresList,
valeurJoueur1 : infoJoueur1,
valeurJoueur2 : infoJoueur2
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
    float:right;
}

table td {
    border: 1px solid black;
}

.nomJoueur {
  height:33px;
}

.figure {
  width:230px;
  height:33px;
  vertical-align: middle;
}

.colonneJoueur {
  width: 250px;
  vertical-align: middle;
}

.sousTotal {
  height:33px;
  background-color: rgba(40,40,40,0.4);
}

.total {
  height:33px;
  background-color: rgba(40,40,40,0.6);
}

.espace {
  border: 0px;
  height: 20px;
}

</style>