<template>
  <div class = "interfaceJeu">
    <div class = "tableau">
      <table>
        <tr v-for="figure in figures" :key="figure.id" :class="figure.type">
          <td class="colonneInfo">{{ figure.text }}</td>  
          <td class="colonneJoueur">{{ valeurJoueur1[figure.id].text }}</td>    
          <td class="colonneJoueur">{{ valeurJoueur2[figure.id].text }}</td> 
        </tr>
      </table>
    </div>

    <div class = "tapisJeu">
      <div class="zoneLancer"></div>
      
    </div>
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

<style>

.interfaceJeu {
    margin-right: 1%;
    margin-top: 1%;
    margin-left: 1%

}

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

.tapisJeu {
  width:500px;
  height:500px;
  background:rgba(0,85,8);
  border:rgba(0,54,5);
  border: solid
}

.zoneLancer {
  width:400px;
  height:400px;
  background:rgba(21,115,12,0.79);
  border:rgba(0,54,5);
  border: solid;
  margin-left: 50px;
  margin-top: 50px  
}

</style>