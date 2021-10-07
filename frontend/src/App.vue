<template>
  <div id="app">
    <tableau/>
  </div>
</template>

<script>
import tableau from './components/Board.vue'

export default {
  name: 'App',
  components: {
    tableau
  }
}
</script>

<style>
body {
 font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif ;

  /* Location of the image */
 background-image: url('./assets/tablebois.jpg');

  /* Background image is centered vertically and horizontally at all times */
  background-position: center center;

  /* Background image doesn’t tile */
  background-repeat: no-repeat;

  /* Background image is fixed in the viewport so that it doesn’t move when
  the content’s height is greater than the image’s height */
  background-attachment: fixed;

  /* This is what makes the background image rescale based
  on the container’s size */
  background-size: cover;

  /* Set a background color that will be displayed
  while the background image is loading */
  background-color: #F0B060;
}

</style>
