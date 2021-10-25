<template>
    <div class="tapisJeu">
        <div class="ExterieurRectangle">
            <div class="InterieurRectangle">
                <div v-for="(dice, i) in diceArray" class="gridDice" :style="getStyle(dice)" :key="i" :id="'dice'+i">
                    <img :src="require('../assets/Face' + dice.ValueTemporary + '.png')"
                         alt="" :id="'imgDice'+i"
                         v-if="dice.Etat === 'Libre'"
                         class="dice"
                         @click="diceArray[i].changeEtat()">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["diceArray"],
        methods: {
            getStyle(dice) {
                return {
                    'display': 'grid',
                    'grid-column': dice.PositionCol + '/ span 1',
                    'grid-row': dice.PositionRow + '/ span 1'
                }
            }
        },
        created() {
            this.diceArray.forEach(dice => {
                dice.setRandomPosition(this.diceArray);
            });
        }
    }
</script>

<style scoped>

    .ExterieurRectangle {
        width: 100%;
        height: 500px;
        background: rgb(0, 83, 44);
        border: solid;
        border-color: rgb(0, 31, 10);
        border-radius: 4px;
        border-width: 3px;
    }

    .InterieurRectangle {
        width: 90%;
        height: 400px;
        background: rgb(0, 168, 90);
        margin-left: 5%;
        margin-top: 5%;
        border: solid;
        border-color: rgb(0, 31, 10);
        border-width: 3px;
        display: grid;
        grid-template-columns: repeat(4, 1fr); /* dividing in 4 fraction */
        grid-template-rows: repeat(4, 1fr);
    }

    .gridDice {
        display: grid;
    }

    .dice {
        height: 50px;
        margin: auto;
        cursor: pointer;
    }

        .dice:hover {
            border: 2px solid blue;
            border-radius: 20%;
        }
</style>