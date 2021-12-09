<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">
    <Header text="Header">
      <Menu :items="items" orientation="horizontal"/>
    </Header>
    <Main styleMode="grid" />
    <Footer :items="items" />-->
    <Navigator dataUrl="navigator.json"/>
  </div>
</template>

<script>
import Navigator from "./components/Navigator.vue"

export default {
  name: 'App',
  data: function(){
    return {
      items: ['test','test1','test2']
    }
  },
  components: {
    Navigator
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
