<template>
    <div class="stockageDes">
        <div v-for="(dice, i) in diceArray" :key="i">
            <span v-if="dice.Etat === 'Bloque'">
                <img :src="require('../assets/Face' + dice.ValueTemporary + '.png')" alt="" class="de" @click="diceArray[i].changeEtat()">
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["diceArray"]
    }
</script>

<style scoped>

    .stockageDes {
        width: 400px;
        height: 80px;
        background: rgb(0, 83, 44);
        border: solid;
        border-color: rgb(0, 31, 10);
        border-radius: 4px;
        border-width: 3px;
    }

    .de {
        width: 50px;
        height: 50px;
        float: left;
        margin-top: 3%;
        margin-left: 5.5%;
        cursor: pointer;
    }

    .de:hover {
        border: 2px solid blue;
        border-radius: 20%;
        margin-bottom: -4px; /* to compensate the 2px border */
    }
</style>