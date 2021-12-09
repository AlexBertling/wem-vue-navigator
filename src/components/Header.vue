<template>
    <header>
        <h1>{{text}}</h1>
        <slot></slot>
    </header>
    
</template>

<script>
module.exports = {
  name: 'Header',
  props: {
      text: {type: String}
  },
  methods: {
      menuClick: function(item) {
          console.log("Menu-Click: " + item)
      }
  }
}
</script>

<style scoped>
    header {
        position: sticky;
        top: 0px;
        width: 100%;
        background-color: #c04f4f;
    }
    
    header h1 {
        text-align: center;
        color: white;
        margin: 0;
        padding: 5px;
    }
</style>