<template>
  <nav>
            <router-link :to="{ name: 'poblamiento' }">
              <img class="item-active" src="~@/assets/images/menu/menu_pobl_abor_activo.png">
              <img class="item-inactive" src="~@/assets/images/menu/menu_pobl_abor_inactivo.png">
            </router-link>
            <router-link :to="{ name: 'ubicacion-geografica' }">
              <img class="item-active" src="~@/assets/images/menu/menu_ubic_geograf_activo.png">
              <img class="item-inactive" src="~@/assets/images/menu/menu_ubic_geograf_inactivo.png">
            </router-link>
            <router-link :to="{ name: 'comunidades' }">
              <img class="item-active" src="~@/assets/images/menu/menu_comunidades_activo.png">
              <img class="item-inactive" src="~@/assets/images/menu/menu_comunidades_inactivo.png">
            </router-link>
            <router-link :to="{ name: 'sitios-arqueologicos' }">
              <img class="item-active" src="~@/assets/images/menu/menu_sitios_arq_activo.png">
              <img class="item-inactive" src="~@/assets/images/menu/menu_sitios_arq_inactivo.png">
            </router-link>
            <router-link :to="{ name: 'galeria' }">
              <img class="item-active" src="~@/assets/images/menu/menu_galeria_activo.png">
              <img class="item-inactive" src="~@/assets/images/menu/menu_galeria_inactivo.png">
            </router-link>
    </nav>
</template>

<script>
export default {
};
</script>

<style scoped>
a {
  display: block;
  padding: 10px 0;
}

a .item-active,
a:hover .item-inactive,
a.router-link-exact-active .item-inactive{
  display: none;
}

a:hover .item-active,
a.router-link-exact-active .item-active{
  display: unset;
}
</style>
