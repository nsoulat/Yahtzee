<template>
  <div class="home">
    <h1>Yahtzee</h1>
    <router-link class="rectangle" :to="{ name : 'Jeu' }">
            2 joueurs
    </router-link>
  <div id = "espacement"></div>
    <router-link :to="{ name : 'Regles' }">
      <div class = "rectangle">
        Règles
      </div>
    </router-link>
  </div>
</template>

<script>
export default {

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
  width: 383px;
  height: 164px;
  background-color: white;
  border: solid;
  border-color:black;
  border-width: 11px;
  /* display: block; */
  margin-left: auto;
  margin-right: auto;
  display : flex;
  align-items : center;
  justify-content: center;
}

a {
  font-size: 50px;
  color: #000000;
  text-decoration: none;
}

a.router-link-exact-active {
  color: #42b983;
}

#espacement {
  height: 20px
}

</style>