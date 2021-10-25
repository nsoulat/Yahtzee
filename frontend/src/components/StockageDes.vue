<template>
    <table class="stockageDes">
        <tr>
            <td v-for="(dice, i) in diceArray" :key="i" class="container">
                <img :src="require('../assets/Face' + dice.ValueTemporary + '.png')" alt="" class="de"
                     @click="changeEtat(dice)"
                     v-if="dice.Etat === 'Bloque'">
            </td>
        </tr>
    </table>
</template>

<script>
    export default {
        props: ["diceArray"],
        methods: {
            changeEtat(dice) {
                dice.setRandomPosition(this.diceArray);
                dice.changeEtat();
            }
        }
    }
</script>

<style scoped>

    .stockageDes {
        width: 100%;
        height: 100%;
        background: rgb(0, 83, 44);
        border: solid;
        border-color: rgb(0, 31, 10);
        border-radius: 4px;
        border-width: 3px;
        text-align: center;
    }

    .container {
        width: 20%;
    }

        .de {
            width: 50px;
            height: 50px;
            margin: auto;
            cursor: pointer;
        }

        .de:hover {
            border: 2px solid blue;
            border-radius: 20%;
        }
</style>