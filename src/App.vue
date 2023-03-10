<template>
  <div id="app">
    <div id="nav">
      <router-link to="/counter">Counter</router-link>
      <router-link to="/indecision">Indecision</router-link>
    </div>
    <router-view></router-view>
  </div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav {
padding: 30px;
}
</style>
