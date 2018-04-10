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
  components: {
    Jumbotron,
    SkillsCard
  },
  mounted: function () {
    return this.$store.dispatch('collapseNavbar')
  }
}
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 15px;
  border: 2px solid #ff0000;
  border-radius: 20px;
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.15),
              6px 8px 18px 0 rgba(0, 0, 0, 0.10);
}
</style>
