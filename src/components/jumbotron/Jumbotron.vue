<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-3" v-html="displayTitle"></h1>
      <hr class="my-4">
      <p class="lead">{{ displayText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      displayTitle: 'Hi,<br>I\'m Ben',
      displayText: 'I\'m a Full-Stack JavaScript Engineer'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
