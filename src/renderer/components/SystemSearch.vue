<template>
    <div class="search-container">
        <a href="#">
            <img src="~@/assets/images/icons/icon_unk.png">
        </a>
        <bp-vuejs-dropdown :class-name="'my-class'" :unscroll="'main'">
            <template slot="body">Lorem...</template>
        </bp-vuejs-dropdown>
        <!--a href="#">
            <img src="~@/assets/images/icons/icon_help.png">
        </a-->
        <input placeholder="Buscar" v-bind:value="searchText"  v-on:input="$emit('input', $event.target.value)">


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
        float: right;
        display: flex;
        margin-top: auto;
        margin-right: 55px;
    }
    a{
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

    .my-class-bp__btn {
    background: lightgray;
    }

    .my-class-bp__btn--active {
    background: #fff;
    }

    .my-class-bp__body {
    width: 20rem; 
    padding: 2rem; 
    font-size: 1.6rem;
    }
</style>