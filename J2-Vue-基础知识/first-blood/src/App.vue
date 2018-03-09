<template>
  <div id="app">
    
    <header> 网站头部 

      <a href="#/xiaoming"> 小明 </a>
      <a href="#/zhoupeng"> 周鹏 </a>

    </header>

    <router-view/>

    <footer> 网站底部 </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
