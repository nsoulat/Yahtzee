<template>
    <div id="Regles">
        <reglesEcrites/>
        <router-link class = "rectangle" :to="{ name : 'Home' }" >
                Menu
        </router-link>
    </div>
</template>

<script>
import reglesEcrites from "../components/ReglesEcrites.vue"

export default {
    components : {
    reglesEcrites
    }
}
</script>

<style>

</style>
