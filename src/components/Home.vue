<template>
  <div
    class="row"
  >
    <!-- Jumbotron -->
    <div
      class="col-12"
    >
      <Jumbotron/>
    </div>
    <!-- About section -->
    <h1 :style="cssBanner">About</h1>
    <div class="col-12 mt-5">
      <div class="container">
        <h2 class="quote">
          {{ aboutText }}
        </h2>
        <p class="h3 my-5" v-html="aboutParagraph">
        </p>
      </div>
    </div>
    <!-- Skills section -->
    <h1 :style="cssBanner">Skills</h1>
    <!-- Container for 'Skills' -->
    <div
      class="container"
    >
      <SkillsCard/>
    </div>
  </div>
</template>

<script>
import Jumbotron from './jumbotron/Jumbotron'
import SkillsCard from './skills/SkillsCard'

export default {
  props: [
    'cssBanner'
  ],
  components: {
    Jumbotron,
    SkillsCard
  },
  data () {
    return {
      aboutText: 'Full-stack JavaScript engineer ready to grow, adapt, and collaborate to build unsurpassed client solutions.',
      aboutParagraph: '<strong class="display-4">Testing...</strong>'
    }
  },
  mounted: function () {
    return this.$store.dispatch('collapseNavbar')
  }
}
</script>

<style lang="scss" scoped>
.quote {
  color: #383838;
  border-left: 6px solid #383838;
  padding: 12px 0 12px 15px;
}
.card {
  margin-bottom: 15px;
  border: 2px solid #ff0000;
  border-radius: 20px;
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.15),
              6px 8px 18px 0 rgba(0, 0, 0, 0.10);
}
</style>
