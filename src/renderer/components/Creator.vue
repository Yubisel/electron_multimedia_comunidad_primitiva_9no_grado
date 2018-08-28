<template>
    <vue-scrollbar classes="my-scrollbar" ref="Scrollbar">
        <div class="inner-page" id="autor_page">
            <div class="img-container">
                <img class="img" src="~@/assets/images/aut.jpg">
            </div>
            <ul>
                <li>Ing. Yubisel Vega Alvarez</li>
                <li>(+53) 53924552</li>
                <li>yubiselv@gmail.com</li>
                <li>yubisel@nauta.cu</li>
            </ul>
        </div>
    </vue-scrollbar>    
</template>

<script>
//import { setTimeout } from 'timers';
export default {
    data(){
        return{
            timer: null
        }
    },
    mounted: function () {
        this.timer = setTimeout(() => {
        console.log('entro')
        }, 2000)
    },
    methods:{
        sayHi: function () {
            console.log('entro')
            var v = this;
            setTimeout(() => {console.log('sssss')}, 300)
        }
    }
}
</script>

<style>
    #autor_page{
        padding-top: 60px; 
    }
    #autor_page img{
        width: 150px;
        height: 150px;
        border-radius: 75px;
    }
    #autor_page ul{
        margin: 0;
        padding: 0;
        text-align: center;
        list-style: none;
    }
</style>