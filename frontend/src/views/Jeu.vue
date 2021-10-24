<template>
    <div class="Jeu">
        <div id="DiceZone" v-if="game.IsProgress">
            <tapisJeu class="TapisJeu" :diceArray="dice" />
            <div class="gauche"><stockageDes :diceArray="dice" /></div>
            <div class="droite"><boutonTourDeJeu :game="game" :diceArray="dice" /></div>
        </div>
        <div id="WinnerZone" v-else>
            <winner :game="game" />
        </div>
        <tableau :game="game" :diceArray='dice' />
        <modaleRegles :revele="revele" :toggleModale="toggleModale"></modaleRegles>
        <div v-on:click="toggleModale" class="boutonRegles">?</div>

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
                game: new Game(2, nameArray),
                dice: diceArray
            };
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
        margin-right: 1%;
        margin-top: 1%;
        margin-left: 1%
    }

    #DiceZone {
        float: left;
        display: inline-grid;
        grid-template-columns: [col1] auto [col2] auto [col3];
        grid-template-rows: [row1] auto [row2] auto [row3];
        width: 50%;
    }

    .TapisJeu {
        grid-column-start: col1;
        grid-column-end: col3;
        grid-row-start: row1;
        grid-row-end: row2;
    }

    .gauche {
        grid-column-start: col1;
        grid-column-end: col2;
        grid-row-start: row2;
        grid-row-end: row3;
        margin-top: 1%;
        width: 100%;
    }

    .droite {
        grid-column-start: col2;
        grid-column-end: col3;
        grid-row-start: row2;
        grid-row-end: row3;
        margin-left: min(1%, 10px);
        float: left;
        margin-top: 1%;
    }

    #WinnerZone {
        float: left;
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
        margin-left: none;
    }
</style>