<template>
    <div class="tapisJeu">
        <div class="ExterieurRectangle">
            <div class="InterieurRectangle">
                <span>{{ getWinner() }} {{ hasMultipleWinners() ? "ont" : "a" }} gagné !</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["game"],
        data() {
            return {
                winners: [{ Name: "Personne" }]
            }
        },
        created() {
            this.winners = this.game.getWinners();
        },
        methods: {
            getWinner() {
                if (this.hasMultipleWinners()) {
                    return "Egalité ! " + this.winners[0].Name + " et " + this.winners[1].Name;
                }
                else {
                    return this.winners[0].Name;
                }
            },
            hasMultipleWinners() {
                return this.winners.length > 1;
            }
        }
    }
</script>

<style scoped>

    .ExterieurRectangle {
        width: 700px;
        height: 500px;
        background: rgb(0, 83, 44);
        border: solid;
        border-color: rgb(0, 31, 10);
        border-radius: 4px;
        border-width: 3px;
        display: inline-block;
    }

    .InterieurRectangle {
        width: 600px;
        height: 400px;
        background: rgb(0, 168, 90);
        margin-left: 50px;
        margin-top: 50px;
        border: solid;
        border-color: rgb(0, 31, 10);
        border-width: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    span {
        color: rgb(219 10 57);
        font-family: 'Verdana';
        font-size: large;
    }
</style>