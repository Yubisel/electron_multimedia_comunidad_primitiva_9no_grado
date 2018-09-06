<template>
    <vue-scrollbar classes="my-scrollbar" ref="Scrollbar">
        <div class="inner-page">
            <div v-html="searchAndHighlight(searchText, content_1)"></div>
            <div class="img-container">
            <img class="img" src="~@/assets/images/pages/ubicacion/mapa_4.jpg">
            </div>
            <div v-html="searchAndHighlight(searchText, content_2)"></div>
        </div>
    </vue-scrollbar>
</template>

<script>
    export default {
    props: ['searchText'],
        data(){
            return{
                content_1: `<h2>Ubicación geográfica de la provincia de Granma </h2>
<p>La provincia de Granma se encuentra ubicada en el extremo suroccidental del oriente de Cuba. Limita al norte con las provincias de las Tunas y Holguín; al este, con Holguín y Santiago de Cuba; al sur, con Santiago de Cuba y el Mar Caribe y al oeste con el Golfo de Guacanayabo. </p>`,
                content_2: `<p class="cp9g">Ubicación de la provincia de Granma en el país. </p>`,
            }
        }
    }
</script>

<style scoped>

</style>