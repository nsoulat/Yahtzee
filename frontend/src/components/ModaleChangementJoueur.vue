<template>
  <transition name="modal-fade">
    <div class="bloc-modaleChangement" v-if="afficheChangement">
      <div class="overlay" v-on:click="toggleModaleChangement">
        <div class="modaleChangement">
          <div class="rectangle">
            Au tour de {{game.CurrentPlayer.Name}}
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
    name:"modaleChangementJoueur",
    props: ["afficheChangement", "toggleModaleChangement","game"],  
}
</script>

<style scoped>

.bloc-modaleChangement {
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

.modaleChangement {
  background-color: rgba(51, 51, 51, 0);
  position: fixed;
  top : 35%;
  left: 2%;
  right: 2%;
  max-height: 600px;
  overflow-y: auto;
}

.modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .3s ease;
  }

</style>