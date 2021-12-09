<template>
    <nav :class="orientation">
        <a href="" v-for="item in items" :key="item" @click.prevent="$emit('menuClick', item)">{{item}}</a>
    </nav>
    
</template>

<script>
module.exports = {
  name: 'Menu',
  props: {
      orientation: { type: String, default: "horizontal"},
      items: { type: Array, default: () => [] }
  },
  methods: {
      menuClick: function(item) {
          console.log("Menu-Click: " + item)
      }
  }
}
</script>

<style scoped>
    nav {
        display: flex;
        padding-top: 5px;
        padding-bottom: 15px;
    }

    nav a {
        padding: 5px 20px;
        background-color: #6a709f;
        color: black;
        text-decoration: none;
        font-weight: bold;
        border-radius: 13px;
        border: 3px solid #ece9e9;
        font-size: 16px;
    }

    nav.vertical {
        flex-direction: column;
    }

    nav.vertical a {
        margin: 3px;
    }
</style>