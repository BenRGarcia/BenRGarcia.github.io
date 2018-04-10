<template>
  <div class="row">
    <div id="jumbotron-wrapper" class="col-12 px-0">
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-2" v-html="displayTitle"></h1>
            <h3 class="pt-1" v-html="displayText"></h3>
            <hr>
            <h3>Let's build something <em>incredible</em> together</h3>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      displayTitle: 'Hi,<br>I\'m Ben',
      displayText: 'Full-Stack JavaScript Engineer',
      imgSrc: require('../../assets/images/biking.jpg'),
      imgAlt: 'Biking on the Virginia Creeper Trail'
    }
  }
}
</script>

<style lang="scss" scoped>
#jumbotron-wrapper {
  background: url('../../assets/images/background/dark_fish_skin.png');
}
.jumbotron {
  background: none;
  color: #eee;
}
hr {
  border-top: 3px solid #eee;
}
</style>
