<template>
    <div id="Regles">
        <reglesEcrites/>
        <router-link :to="{ name : 'Home' }">
            <div class = "rectangle">
                Retour au menu
            </div>
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