<template>
  <transition name="modal-fade">
    <div class="bloc-modaleNomJoueurs" v-if="afficheNomJoueurs">

      <div class="overlay" v-on:click="toggleModaleNomJoueurs"></div>
      <div class="modaleNomJoueurs">
        <p>Quel sont les noms des Joueurs ?</p>
        <form>
            <label for="Joueur1">Nom du Joueur 1</label>
            <input v-model="nomJoueur1" placeholder="Marc" id="Joueur1">
            <label for="Joueur2">Nom du Joueur 2</label>
            <input v-model="nomJoueur2" placeholder="Paul" id="Joueur2">
        </form>
        <div class="espace"></div>
        <router-link class="rectangle" :to="{ name : 'Jeu' }">
            Jouer
        </router-link>

      </div>
    </div>
  </transition>
</template>

<script>
export default {
    name: "ModaleNomJoueurs",
    props: ["afficheNomJoueurs", "toggleModaleNomJoueurs"],
}
</script>

<style scoped>
.bloc-modale {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.modaleNomJoueurs {
  background: #f2ceb1;
  color: #333;
  position: fixed;
  top : 40%;
  left: 2%;
  right: 2%;
  min-height:200px;
  max-height: 600px;
  overflow-y: auto;
  align-items: center;
  justify-content: center;
  border:2px solid black;
  box-shadow: 10px 5px 5px rgba(0,0,0,0.2);
}

.modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }

.espace {
    height:60px;
}

p {
    text-align: center;
    font-size:30px;
}

label {
    font-size:30px;
    padding-left: 3%;
}

input {
    padding: 12px 20px;
    margin: 10px 30px 10px 10px;
    box-sizing: border-box;
    border: 2px solid black;
    border-radius: 4px;
    font-size:30px;
}
</style>