<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a class="navbar-brand" href="/">Home</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link class="nav-item nav-link" :to="{ name: 'galleries'}">All galleries</router-link>
            </li>
            <li class="nav-item">
             <router-link class="nav-item nav-link" :to="{ name: 'login'}">Login</router-link>
            </li>
          <li class="nav-item">
              <router-link class="nav-item nav-link" :to="{ name: 'register'}">Register</router-link>            </li>
          </ul>
          
        </div>
      </nav>

</template>

<script>
export default {
  name: 'NavBar',

}
</script>

<style scoped>

</style>
