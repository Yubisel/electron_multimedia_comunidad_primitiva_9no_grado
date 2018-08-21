<template>
  <div id="app">
    <div id="wrapper">
      <div class="left-side">
        <img id="logo" src="~@/assets/images/titulo.png">
        <system-menu></system-menu>
      </div>
      <div class="right-side">
        <div class="header-right"></div>
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

  export default {
    name: 'Home-Page',
    components: { SystemMenu },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { 
    font-family: 'Source Sans Pro', sans-serif; 
    font-size: 14px;
    background: url("./assets/images/background.png");  
  }

  #wrapper {
    height: calc(100vh - 34px);
    padding: 0;
    width: 100vw;
  }

  #logo {
    height: auto;
    margin-bottom: 40px;
    width: 337px;
  }
  .left-side {
    width: 337px;
    height: 100%;
    float: left;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }
  .right-side{
    float: right;
    height: 100%;
    margin: 0;
    padding: 0;
    width: calc(100vw - 337px);
     display: flex;
    flex-direction: column;
  }
  .header-right{
    height: 96px;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .content{
    background: #ffffff;
    height: calc(100% - 96px);
    width: 100%;
  }
  footer{
    height: 34px;
    background: url("./assets/images/footer.png") no-repeat scroll 0 50%;  
    border-top: 2px solid #E0C529;
    color: #EBCE92;
    text-align: center;
    padding-top: 8px;
  }
</style>