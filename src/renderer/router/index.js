import Vue from 'vue'
import Router from 'vue-router'
import UbicacionGeografica from '@/components/UbicacionGeografica'
import Comunidades from '@/components/Comunidades'
import SitiosArqueologicos from '@/components/SitiosArqueologicos'
import Galeria from '@/components/Galeria'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
