<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Menu :items="items" orientation="horizontal"/>
    <Menu :items="items" orientation="vertical"/>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue"

export default {
  name: 'App',
  data: function(){
    return {
      items: ['test','test1','test2']
    }
  },
  components: {
    Menu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
