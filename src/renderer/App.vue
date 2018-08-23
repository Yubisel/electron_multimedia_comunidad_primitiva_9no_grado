<template>
  <div id="app">
    <div id="wrapper">
      <div class="left-side">
        <img id="logo" src="~@/assets/images/titulo.png">
        <system-menu></system-menu>
      </div>
      <div class="right-side">
        <div class="header-right">
          <system-search></system-search>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
      </div>
  </div><!--#wrapper-->
  <footer>
    <p>
      Multimedia de Apoyo a la Enseñanza de la Historia de Cuba. Granma. Cuba 2018 
    </p>
  </footer>
  </div><!--#app-->
</template>

<script>
  import SystemMenu from './components/SystemMenu'
  import SystemSearch from './components/SystemSearch'

  export default {
    name: 'Home-Page',
    components: { SystemMenu, SystemSearch },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>
  body { 
    background: url("./assets/images/background.png");  
  }
  footer{
    background: url("assets/images/footer.png") no-repeat scroll 0 50%;  
  }
  .vue-scrollbar__scrollbar-vertical, .vue-scrollbar__scrollbar-vertical:hover{
    background: url("assets/images/scrollbar_background.png") no-repeat scroll 50% 50%;  
    background-size: auto 100%;
}
.vue-scrollbar__scrollbar-vertical .scrollbar{
    background: url("assets/images/icons/icon_scroll.png") no-repeat scroll 50% 50%;  
    width: 30px;
    left: -10px;
    /*height: 41px !important;*/
}
</style>