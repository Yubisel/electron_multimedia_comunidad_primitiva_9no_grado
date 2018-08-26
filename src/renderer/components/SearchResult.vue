<template>
    <div class="inner-page">
        <div v-html="searchAndHighlight(searchText, content)"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                content: `<p>Comunidades</p>

        Comunidades de recolectores-cazadores-pescadores reportados en la provincia de Granma
 
En la provincia se encuentran reportados 127 sitios arqueológicos pertenecientes a estas comunidades, situados en diferentes puntos de la geografía, generalmente próximos a zonas cenagosas, ríos, 
arroyos y las costas. Se encuentran distribuidos de la siguiente manera por municipios:`
            }
        },
        props: ['searchText'],
        methods: {
            /*highlight() {
                if(!this.searchText) {
                    return this.content;
                }
                return this.content.replace(new RegExp(this.searchText, "gi"), match => {
                    return '<span class="highlightText">' + match + '</span>';
                });
            }*/
        }
    }
</script>

<style>
</style>