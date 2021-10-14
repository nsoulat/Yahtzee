<template>
  <transition name="modal-fade">
    <div class="bloc-modaleChangement" v-if="afficheChangement">
      <div class="overlay" v-on:click="toggleModaleChangement"></div>
      <div class="modaleChangement">
        <div class="rectangle">
          Au tour de Joueur1
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
    name:"ModaleChangement",
    props: ["afficheChangement", "toggleModaleChangement"],  
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
  color: #333;
  position: fixed;
  top : 35%;
  left: 2%;
  right: 2%;
  max-height: 600px;
  overflow-y: auto;
}

.btn-modale {
  position: absolute;
  top: 10px;
  right: 10px;
  text-decoration: none;
	cursor: pointer;
}

.modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }

</style>