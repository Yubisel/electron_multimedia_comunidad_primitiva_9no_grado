<template>
  <div id="app">
    <div v-show="loadcomplete">
      <div id="wrapper">
        <div class="left-side">
          <router-link :to="{ name: 'home' }">
          <img id="logo" src="~@/assets/images/titulo.png">
          </router-link>
          <system-menu></system-menu>
        </div>
        <div class="right-side">
          <div class="header-right">
            <system-search v-model="searchText"></system-search>
          </div>
          <div class="content">
              <router-view v-bind:searchText="searchText"></router-view>
          </div>
        </div>
    </div><!--#wrapper-->
    <footer>
      <p>
        {{this.$appFooter}}
      </p>
    </footer>
    </div>
    <div v-show="!loadcomplete">
      <system-splash v-on:loaded="loadcomplete = !loadcomplete"></system-splash>
    </div>
  </div><!--#app-->
</template>

<script>
  import SystemSplash from './components/SystemSplash'
  import SystemMenu from './components/SystemMenu'
  import SystemSearch from './components/SystemSearch'

  export default {
    name: 'Home-Page',
    data(){
      return{
        searchText: '',
        loadcomplete: false
      }
    },
    components: { SystemSplash, SystemMenu, SystemSearch },
    methods: {}
  }
</script>

<style lang="scss">
  body { 
    background: #000000 url("./assets/images/background.png") no-repeat;
    background-size: 100% auto;  
  }
  footer{
    background: url("assets/images/footer.png") no-repeat scroll 0 50%;  
  }
  .vue-scrollbar__scrollbar-vertical, .vue-scrollbar__scrollbar-vertical:hover{
    background: url("assets/images/scrollbar_background.png") no-repeat scroll 50% 50%;  
    background-size: auto 100%;
  }
  .vue-scrollbar__scrollbar-vertical .scrollbar{
      background: url("assets/images/icons/icon_scroll.png") no-repeat;  
  }
</style>