<template>
  <div id="Test">
    <div class="dice-wrapper">
      <img :src="require('../assets/Face' + getDice + '.png')" alt="">
      <button @click="setDice">Roll the dice!</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "Face",
  data() {
    return {
      diceNum: 1
    };
  },
  methods: {
    setRandomDiceData() {
      const randomDiceNum = Math.floor(Math.random() * 6) + 1;
      this.diceNum = randomDiceNum;
    },
    setDice() {
      let count = 0;
      const timer = setInterval(() => {
        this.setRandomDiceData();
        if (count >= 6) {
          clearInterval(timer);
        }
        count += 1;
      }, 150);
    }
  },
  computed: {
    getDice() {
      this.setRandomDiceData();
      return this.diceNum;
    }
  },
  watch: {
    diceNum() {
      console.log("Dice rolled!");
    }
  }
};
</script>

<style>
button {
  margin-top: 1em;
  margin-right: 0;
  margin-bottom: 0;
}
.dice-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.dice {
  font-size: 3em;
}
</style>
