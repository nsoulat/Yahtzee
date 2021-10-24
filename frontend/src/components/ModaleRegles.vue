<template>
    <transition name="modal-fade">
        <div class="bloc-modale" v-if="revele">
            <div class="overlay" v-on:click="toggleModale"></div>

            <div class="modale">
                <div v-on:click="toggleModale" class="btn-modale">X</div>
                <reglesEcrites />
            </div>
        </div>
    </transition>
</template>


<script>
    import reglesEcrites from "../components/ReglesEcrites.vue"
    export default {
        components: {
            reglesEcrites
        },
        name: "modaleRegles",
        props: ["revele", "toggleModale"],

    };
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

    .modale {
        background: #f2ceb1;
        color: #333;
        position: fixed;
        top: 10%;
        left: 2%;
        right: 2%;
        max-height: 600px;
        overflow-y: auto;
        border: 2px solid black;
        box-shadow: 10px 5px 5px rgba(0,0,0,0.2);
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