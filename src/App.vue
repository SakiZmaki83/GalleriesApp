<template>
  <div id="app">
    <nav-bar/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'
import GalleriesApp from './pages/GalleriesApp.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    Login,
    Register,
    GalleriesApp
  }
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
