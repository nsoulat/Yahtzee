<template>
  <div class="tapisJeu">
      <div class="ExterieurRectangle">
        <div class="InterieurRectangle"></div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.ExterieurRectangle {
    width:700px;
	height:500px;
	background:rgb(0, 83, 44);
    border: solid;
    border-color: rgb(0, 31, 10);
    border-radius: 4px;
    border-width: 3px;
}

.InterieurRectangle {
    width:600px;
	height:400px;
	background:rgb(0, 168, 90);
    margin-left: 50px;
    margin-top: 50px;
    border: solid;
    border-color: rgb(0, 31, 10);
    border-width: 3px;
}

</style>