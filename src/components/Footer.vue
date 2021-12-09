<template>
    <footer>
        Footer
        <a href="" v-for="item in items" :key="item" @click.prevent="menuClick(item)">{{item}}</a>
    </footer>
    
</template>

<script>
module.exports = {
  name: 'Footer',
  props: {
      orientation: { type: String, default: "horizontal"},
      items: { type: Array }
  },
  methods: {
      menuClick: function(item) {
          console.log("Menu-Click: " + item)
      }
  }
}
</script>

<style scoped>
    footer {
        position: sticky;
        background-color: black;
        bottom: 0;
        width: 100%;
        padding-bottom: 10px;
        color: white;
        text-align: center;
        font-size: 24px;
    }
    
    footer a {
        color: white;
        font-size: 14px;
        margin: 0 5px;
    }
</style>