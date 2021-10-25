<template>
    <div class="tapisJeu">
        <div class="ExterieurRectangle">
            <div class="InterieurRectangle">
                <div v-for="(dice, i) in diceArray" :key="i">
                    <span v-if="dice.Etat === 'Libre'">
                        <img :src="require('../assets/Face' + dice.ValueTemporary + '.png')"
                             alt="" :id="'dice'+i" class="dice"
                             @click="diceArray[i].changeEtat()">
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["diceArray"],
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
    }

    .dice {
        width: 50px;
        height: 50px;
        margin-top: 3%;
        cursor: pointer;
    }

    .dice:hover {
        border: 2px solid blue;
        border-radius: 20%;
        margin-bottom: -4px; /* to compensate the 2px border */
    }

    #dice0 {
        margin-left: 10%;
    }

    #dice1 {
        margin-left: 40%;
    }

    #dice2 {
        margin-left: 27%;
        margin-top: 5%
    }

    #dice3 {
        margin-left: 69%;
    }

    #dice4 {
        margin-left: 53%;
    }
</style>