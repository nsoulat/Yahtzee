<template>
    <div class="Jeu">
        <tableau />
        <tapisJeu />
        <div class="gauche"><stockageDes /></div>
        <div class="droite"><boutonTourDeJeu /></div>

        <modale :revele="revele" :toggleModale="toggleModale"></modale>
        <div v-on:click="toggleModale" class="boutonRegles">?</div>

    </div>
</template>

<script>
    import tableau from "../components/Tableau.vue"
    import tapisJeu from "../components/TapisJeu.vue"
    import stockageDes from "../components/StockageDes.vue"
    import boutonTourDeJeu from "../components/BoutonTourDeJeu.vue"
    import Modale from "../components/ModaleRegles.vue"

    export default {
        name: 'Jeu',
        components: {
            tableau,
            tapisJeu,
            modale: Modale,
            stockageDes,
            boutonTourDeJeu
        },
        data() {
            return {
                revele: false
            };
        },
        methods: {
            toggleModale: function () {
                this.revele = !this.revele;
            }
        }
    }
</script>

<style scoped>
    .jeu {
        margin-right: 1%;
        margin-top: 1%;
        margin-left: 1%
    }

    .boutonRegles {
        position: absolute;
        bottom: 2%;
        height: 18px;
        width: 18px;
        background-color: rgb(255, 255, 255);
        border: 3px solid rgba(0, 0, 0, 1);
        border-radius: 50%;
        text-align: center;
        font-weight: bold;
        text-decoration: none;
        cursor: pointer;
    }

    .gauche {
        float: left;
        margin-top: 1%;
        width: 22%;
    }

    .droite {
        margin-left: 22%;
        margin-top: 1%;
    }

    .rectangle {
        margin-left: none;
    }
</style>