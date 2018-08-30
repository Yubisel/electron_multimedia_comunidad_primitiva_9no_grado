<template>
    <div class="search-container">
        <ul class="top_icons">
            <!--li>
        <a href="#">
            <img src="~@/assets/images/icons/icon_unk.png">
        </a>
            </li-->
            <li>
        <bp-vuejs-dropdown :class-name="'my-dropdown'" :unscroll="'main'">
            <template slot="body">
                <ul>
                <li><router-link :to="{ name: 'glosario' }">Glosario</router-link></li>
                <li><router-link :to="{ name: 'bibliografia-notas' }">Bibliografía y Notas</router-link></li>
                <li><router-link :to="{ name: 'creditos-agradecimientos' }">Créditos y Agradecimientos</router-link></li>
                <li><router-link :to="{ name: 'recomendaciones' }">Recomendaciones Protección Residuarios</router-link></li>
                </ul>
            </template>
        </bp-vuejs-dropdown>
            </li>
        <!--a href="#">
            <img src="~@/assets/images/icons/icon_help.png">
        </a-->
        <li>
        <input placeholder="Buscar" v-bind:value="searchText"  v-on:input="$emit('input', $event.target.value)">
        </li>
        </ul>

    </div>
</template>
<script>
    export default {
        data(){
            return {
            }
        },
        methods: {
        },
        props: ['searchText']
    }
</script>

<style scoped>
    .search-container{
        display: flex;
    }
    .search-container ul.top_icons{
        float: right;
        display: flex;
        margin-top: auto;
        margin-right: 55px;
    }
    ul.top_icons > li{
        display: inline-block;
        margin: 0 5px;
    }
    input{
        margin: 0 5px;
        height: 30px;
        background: transparent url('../assets/images/icons/icon_search.png') no-repeat scroll 100% 50%;
        border-radius: 15px;
        padding: 0 10px;
        padding-right: 32px;
        color: #ffffff;
    }
</style>
<style>
.my-dropdown-bp__btn, .my-dropdown-bp__btn--active {
  background: transparent url('../assets/images/icons/icon_dropdown.png') no-repeat scroll 100% 50% !important;
}
</style>