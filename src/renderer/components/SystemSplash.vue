<template>
    <div class="splash-container">
        <img class="splash-logo" src="~@/assets/images/pages/splash/splash_center.png">
        <div class="name-container">
            <img class="name-background" src="~@/assets/images/pages/splash/splash_name_background.png">
            <img class="splash-logo" src="~@/assets/images/pages/splash/splash_center_name.png">
        </div>
        <progress-button fill-color="#E21F00" v-on:click="$emit('loaded')">Entrar</progress-button>
    </div>
</template>
<script>
export default {
    methods:{
        loadApp: function(){
            
        }
    }
}
</script>
<style scoped>
    .splash-container{
        width: 522px;
        margin: 50px auto 0;
        text-align: center;
    }
    .splash-container img{
        margin: 0 auto;
        display: block;
        position: relative;
    }
    .splash-container .name-container{
        position: relative;
        width: 522px;
        height: 218px;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
    }
    .splash-container .name-background{
        position: absolute;
        top: 0;
    }
</style>
