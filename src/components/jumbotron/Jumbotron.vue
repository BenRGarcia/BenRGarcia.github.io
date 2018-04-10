<template>
  <div class="row">
    <div id="jumbotron-wrapper" class="col-12 px-0">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-1" v-html="displayTitle"></h1>
          <h2 class="pt-1" v-html="displayText"></h2>
          <hr>
          <h2 v-html="quote"></h2>
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
      displayText: 'Full-Stack JavaScript&nbsp;Engineer',
      quote: 'Let\'s&nbsp;build&nbsp;something <em>incredible</em>&nbsp;together',
      imgSrc: require('../../assets/images/biking.jpg'),
      imgAlt: 'Biking on the Virginia Creeper Trail',
      jumbotron: require('../../assets/images/background/dark_fish_skin.png')
    }
  }
}
</script>

<style lang="scss" scoped>
#jumbotron-wrapper {
  background: url('../../assets/images/background/dark_fish_skin.png');
  min-height: 94vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.jumbotron {
  background: none;
  color: #eee;
}
hr {
  border-top: 3px solid #eee;
}
</style>
