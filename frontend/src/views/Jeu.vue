<template>
    <div class="Jeu">
        <div id="DiceZone" v-if="game.IsProgress">
            <tapisJeu class="TapisJeu" :diceArray="dice" />
            <div class="gauche"><stockageDes :diceArray="dice" /></div>
            <div class="droite"><boutonTourDeJeu :game="game" :diceArray="dice" /></div>
        </div>
        <div id="WinnerZone" v-else>
            <winner class="TapisJeu" :game="game" />
            <router-link class="menu rectangle" :to="{ name : 'Home' }">
                Menu
            </router-link>
            <router-link class="rejouer rectangle" :to="{ name : 'Jeu', query: { name1: game.Joueurs[1].Name, name2: game.Joueurs[0].Name } }">
                Rejouer
            </router-link>
        </div>
        <tableau id="Tableau" :game="game" :diceArray='dice' />
        <modaleRegles :revele="revele" :toggleModale="toggleModale"></modaleRegles>
        <div v-on:click="toggleModale" class="boutonRegles" v-if="!revele">?</div>

        <modaleChangementJoueur :afficheChangement="afficheChangement" :toggleModaleChangement="toggleModaleChangement" :game="game"></modaleChangementJoueur>

    </div>
</template>

<script>
    import tableau from "../components/Tableau.vue"
    import tapisJeu from "../components/TapisJeu.vue"
    import winner from "../components/Winner.vue"
    import stockageDes from "../components/StockageDes.vue"
    import boutonTourDeJeu from "../components/BoutonTourDeJeu.vue"
    import modaleRegles from "../components/ModaleRegles.vue"
    import modaleChangementJoueur from "../components/ModaleChangementJoueur.vue"
    import Game from "../classes/Game";
    import Dice from "../classes/Dice";

    export default {
        name: 'Jeu',
        components: {
            tableau,
            tapisJeu,
            winner,
            modaleRegles,
            stockageDes,
            boutonTourDeJeu,
            modaleChangementJoueur
        },
        data() {
            let name1 = this.$route.query.name1 ?? ""; // if we call /jeu alone
            let name2 = this.$route.query.name2 ?? "";

            let nameArray = [
                name1 === "" ? "Player1" : name1, // if an empty string has been given
                name2 === "" ? "Player2" : name2,
            ];

            let diceArray = new Array(5).fill().map(() => new Dice());

            return {
                revele: false,
                afficheChangement: false,
                game: null,
                nameArray: nameArray,
                dice: diceArray
            };
        },
        created() {
            this.game = new Game(2, this.nameArray);
        },
        methods: {
            toggleModale: function () {
                this.revele = !this.revele;
            },
            toggleModaleChangement: function () {
                this.afficheChangement = !this.afficheChangement;
                let count = 0;
                const timer = setInterval(() => {
                    if (count >= 11) {
                        clearInterval(timer);
                        this.afficheChangement = false;
                    }
                    count += 1;
                }, 80);
            }
        }
    }
</script>

<style scoped>

    .jeu {
        width: 100%;
        height: 100%;
        margin: 10%;
    }

    #DiceZone {
        float: left;
        display: grid;
        grid-template-columns: 2fr min(5%, 10px) 1fr;
        grid-template-rows: 1fr 10px 80px;
        grid-template-areas:
            "tapis tapis tapis"
            " . . ."
            "stock . lancer";
        width: min(max(50%, 400px), 700px);
        height: 600px;
        margin-right: 30px;
    }

    .TapisJeu {
        grid-area: tapis;
        width: 100%;
        height: 100%;
    }

    .gauche {
        grid-area: stock;
        width: 100%;
        height: 100%;
    }

    .droite {
        grid-area: lancer;
        width: 100%;
        height: 100%;
    }

    #Tableau {
        float: right;
        margin-right: 5%;
        width: min(max(40%, 300px), 700px);
        height: 100%;
    }

    #WinnerZone {
        float: left;
        display: grid;
        grid-template-columns: 1fr min(10%, 40px) 1fr;
        grid-template-rows: 1fr 10px 80px;
        grid-template-areas:
            "tapis tapis tapis"
            " . . ."
            "menu . rejouer";
        width: min(max(50%, 400px), 700px);
        height: 600px;
        margin-right: 30px;
    }

    .menu {
        grid-area: menu;
        width: 100%;
        height: 100%;
    }

    .rejouer {
        grid-area: rejouer;
        width: 100%;
        height: 100%;
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

    .rectangle {
        margin-left: 0px;
    }
</style>