<template>
    <div>
      <div><label for="type">Please type: </label><input id="type" type="text" v-model="text"></div>
      <div># Letters: {{text.split(" ").join("").length}}</div>
      <div># Spaces: {{text.split(" ").length -1}}</div>
      <div># Words: {{text.trim().split(/\s+/).length}}</div>
    </div>
    
</template>

<script>
module.exports = {
  name: 'TypeWatch',
  data: function() {
    return {
      text: "test"
    }
  }
}
</script>

<style scoped>

</style>