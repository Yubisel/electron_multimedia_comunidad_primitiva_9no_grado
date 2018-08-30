import Vue from 'vue'
import Router from 'vue-router'
import vGallery from 'v-gallery'

//componentes de las paginas
import Poblamiento from '@/components/Poblamiento'
import UbicacionGeografica from '@/components/UbicacionGeografica'
import Comunidades from '@/components/Comunidades'
import SitiosArqueologicos from '@/components/SitiosArqueologicos'
import Galeria from '@/components/Galeria/Galeria'
import GaleriaIdolos from '@/components/Galeria/GaleriaIdolos'
import GaleriaMartinez from '@/components/Galeria/GaleriaMartinez'
import GaleriaOtton from '@/components/Galeria/GaleriaOtton'
import GaleriaSitios from '@/components/Galeria/GaleriaSitios'
import Glosario from '@/components/Glosario'
import BibliografiaNotas from '@/components/BibliografiaNotas'
import CreditosAgradecimientos from '@/components/CreditosAgradecimientos'
import Recomendaciones from '@/components/Recomendaciones'
import Creator from '@/components/Creator'

// global
Vue.use(vGallery)

//tomados y personalizados
import VueScrollbar from "@/components/vue-scrollbar/vue-scrollbar"
import ProgressButton from '@/components/vue-progress-button/ProgressButton'
import Dropdown from '@/components/bp-vuejs-dropdown/Dropdown';

require("@/assets/css/app.css")

Vue.component('vue-scrollbar', VueScrollbar);
Vue.component('progress-button', ProgressButton);
Vue.component('bp-vuejs-dropdown', Dropdown)
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
      component: Galeria,
    },
    {
      path: '/galeria-idolos',
      name: 'galeria-idolos',
      component: GaleriaIdolos
    },
    {
      path: '/galeria-martinez',
      name: 'galeria-martinez',
      component: GaleriaMartinez
    },
    {
      path: '/galeria-otton',
      name: 'galeria-otton',
      component: GaleriaOtton
    },
    {
      path: '/galeria-sitios',
      name: 'galeria-sitios',
      component: GaleriaSitios
    },
    {
      path: '/glosario',
      name: 'glosario',
      component: Glosario
    },
    {
      path: '/bibliografia-notas',
      name: 'bibliografia-notas',
      component: BibliografiaNotas
    },
    {
      path: '/creditos-agradecimientos',
      name: 'creditos-agradecimientos',
      component: CreditosAgradecimientos
    },
    {
      path: '/recomendaciones',
      name: 'recomendaciones',
      component: Recomendaciones
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
      if (this.filterSearchText(str)){
        return cont;
      }
      return cont.replace(new RegExp(str, "gi"), match => {
          return '<span class="highlightText">' + match + '</span>';
      });
    },
    filterSearchText: function(str){
      let unsercheableWords = ['<', '>', '/', '<p>', '<li>', '<h2>', '<ul>', '_', 'cp9g']
      let s = false
      unsercheableWords.forEach(function(element){
        if ((str.indexOf(element) != -1) || (element.indexOf(str) != -1)){
          s = true;
        }
      })
      return s;
    }
  }
})
