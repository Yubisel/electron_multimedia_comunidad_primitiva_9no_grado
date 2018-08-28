import Vue from 'vue'
import Router from 'vue-router'
import ProgressButton from 'vue-progress-button'

//componentes de las paginas
import Poblamiento from '@/components/Poblamiento'
import UbicacionGeografica from '@/components/UbicacionGeografica'
import Comunidades from '@/components/Comunidades'
import SitiosArqueologicos from '@/components/SitiosArqueologicos'
import Galeria from '@/components/Galeria'
import Creator from '@/components/Creator'
import VueScrollbar from "@/components/vue-scrollbar/vue-scrollbar"

require("@/assets/css/app.css")

Vue.component('vue-scrollbar', VueScrollbar);
Vue.component('progress-button', ProgressButton);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/components/Home').default
    },
    {
      path: '/poblamiento',
      name: 'poblamiento',
      component: Poblamiento
    },
    {
      path: '/ubicacion-geografica',
      name: 'ubicacion-geografica',
      component: UbicacionGeografica
    },
    {
      path: '/comunidades',
      name: 'comunidades',
      component: Comunidades
    },
    {
      path: '/sitios-arqueologicos',
      name: 'sitios-arqueologicos',
      component: SitiosArqueologicos
    },
    {
      path: '/galeria',
      name: 'galeria',
      component: Galeria
    },
    {
      path: '/creator',
      name: 'creator',
      component: Creator
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

require('@/config/config')

Vue.mixin({
  data(){
    return {

    }
    //notSearcheable: ['<p>', '</p', '</p>', '<h1>', '</h1>']
  },
  created: function () {
  },
  methods:{
    searchAndHighlight:function(str, cont){
        if((!str) || (str.length < 3)) {
          return cont;
      }
      if (str === '@utor'){
        this.$router.push('creator')
      }
      return cont.replace(new RegExp(str, "gi"), match => {
          return '<span class="highlightText">' + match + '</span>';
      });
    },
    filterSearchText: function(str){

    }
  }
})
