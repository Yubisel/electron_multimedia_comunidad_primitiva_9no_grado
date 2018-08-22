<template>
    <div class="inner-page">
        <p>Comunidades</p>

        Comunidades de recolectores-cazadores-pescadores reportados en la provincia de Granma
 
En la provincia se encuentran reportados 127 sitios arqueológicos pertenecientes a estas comunidades, 
situados en diferentes puntos de la geografía, generalmente próximos a zonas cenagosas, ríos, 
arroyos y las costas. Se encuentran distribuidos de la siguiente manera por municipios:

        <div>
            Search: <input type="text" v-model="query" placeholder="Search" />
        </div>
        <br />
        <div v-html="highlight()"></div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                query: '',
                content: 'este es un datos de prueba'
            }
        },
        methods: {
            highlight() {
                if(!this.query) {
                    return this.content;
                }
                return this.content.replace(new RegExp(this.query, "gi"), match => {
                    return '<span class="highlightText">' + match + '</span>';
                });
            }
        }
    }
</script>

<style>
</style>