<template>
    <div class="inner-page">
        <p>Comunidades</p>

        Comunidades de recolectores-cazadores-pescadores reportados en la provincia de Granma
 
En la provincia se encuentran reportados 127 sitios arqueológicos pertenecientes a estas comunidades, 
situados en diferentes puntos de la geografía, generalmente próximos a zonas cenagosas, ríos, 
arroyos y las costas. Se encuentran distribuidos de la siguiente manera por municipios:

        <div>
            Search: <input type="text" v-model="query2" placeholder="Search" />
        </div>
        <br />
        <div v-html="highlight()"></div>
        <div>{{to_find}}</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                nc: 15,
                query2: '',
                content: 'este es un dato de prueba'
            }
        },
        computed:{
            to_find (){
                    return this.$store.state.query
            }
        },
        methods: {
            highlight() {
                if(!this.query2) {
                    return this.content;
                }
                return this.content.replace(new RegExp(this.query2, "gi"), match => {
                    return '<span class="highlightText">' + match + '</span>';
                });
            },
            globalS(){
                console.log(this.$store);
                return this.$store.state.query
            }
        }
    }
</script>

<style>
</style>