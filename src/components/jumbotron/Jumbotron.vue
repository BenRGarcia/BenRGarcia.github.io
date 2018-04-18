<template>
  <div class="row bg-texture vh relative">
      <div class="col-12 bg-img px-0">
        <div class="container-fluid ctr-children text-white pb-2">
          <h1 class="display-1 mb-0" v-html="displayTitle"></h1>
          <h2 v-html="displayText" class="z"></h2>
          <span class="divider z"></span>
          <h2 v-html="quote" class="z d-inline"></h2>
        </div>
      </div>
    <img :src="logo" class="absolute-img">
  </div>
</template>

<script>
export default {
  data () {
    return {
      displayTitle: 'Hi,<br>I\'m&nbsp;Ben',
      displayText: 'Full-Stack JavaScript&nbsp;Engineer',
      quote: 'Let\'s&nbsp;build&nbsp;something <em>incredible</em>&nbsp;together',
      logo: require('../../assets/images/collage.png'),
      bg: require('../../assets/images/background/dark_fish_skin.png')
    }
  }
}
</script>

<style lang="scss" scoped>
.relative {
  position: relative;
}
.absolute-img {
  width: 75%;
  position: absolute;
  bottom: 0;
  right: 0;
  opacity: 0.25;
}
.z {
  z-index: 1;
}
.divider {
  border-top: 3px solid #fff;
  max-width: 610px;
  margin-bottom: 3px;
}
.bg-texture {
  background-image: url('../../assets/images/background/dark_fish_skin.png');
}
.vh {
  min-height: calc(100vh - 108px);
}
.ctr-children {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
