<template>
    <div class="home">
        <h1>Yahtzee</h1>
        <modale :afficheNomJoueurs="afficheNomJoueurs" :toggleModaleNomJoueurs="toggleModaleNomJoueurs"></modale>
        <div v-on:click="toggleModaleNomJoueurs" class="rectangle" id="bouton2Joueurs">
            2 Joueurs
        </div>

        <div class="espacement"></div>
        <router-link class="rectangle" :to="{ name : 'Regles' }">
            Règles
        </router-link>

        <div class="espacement"></div>
        <router-link class="rectangle" :to="{ name : 'Scores' }">
            Meilleurs scores
        </router-link>

    </div>
</template>

<script>
    import modaleNomJoueurs from "../components/ModaleNomJoueurs.vue"

    export default {
        components: {
            modale: modaleNomJoueurs
        },
        data() {
            return {
                afficheNomJoueurs: false
            };
        },
        methods: {
            toggleModaleNomJoueurs: function () {
                this.afficheNomJoueurs = !this.afficheNomJoueurs;
            }
        }
    }
</script>

<style>

    h1 {
        font-size: 157px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 73px;
        margin-top: 73px;
    }

    .rectangle {
        width: 230px;
        height: 80px;
        background-color: white;
        border: solid;
        border-color: black;
        border-width: 10px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        cursor: pointer;
    }

    a {
        font-size: 20px;
        color: #000000;
        text-decoration: none;
    }

        a.router-link-exact-active {
            color: #42b983;
        }

    .espacement {
        height: 20px
    }
</style>