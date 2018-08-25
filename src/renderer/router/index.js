import Vue from 'vue'
import Router from 'vue-router'
import UbicacionGeografica from '@/components/UbicacionGeografica'
import Comunidades from '@/components/Comunidades'
import SitiosArqueologicos from '@/components/SitiosArqueologicos'
import Galeria from '@/components/Galeria'
import VueScrollbar from "@/components/vue-scrollbar/vue-scrollbar"

/*require("vue2-scrollbar/dist/style/vue2-scrollbar.css")*/
require("@/assets/css/app.css")

Vue.component('vue-scrollbar', VueScrollbar);
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
      component: require('@/components/Poblamiento').default
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
      path: '*',
      redirect: '/'
    }
  ]
})

Vue.mixin({
  data: function() {
    return {
      get query() {
        return 'weq';
      }
    }
  }
})
