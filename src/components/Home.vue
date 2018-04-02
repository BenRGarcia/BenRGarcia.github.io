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
    <!-- Container for 'Dedication' -->
    <div
      class="container"
    >
      <!-- <DedicationCard/> -->
    </div>
    <!--========================-->
    <!-- Test area for carousel -->
    <!--========================-->
    <div
      class="container"
    >
      <div class="card">
        <div class="card-header pl-4">
          <h2 class="mb-0">
            Dedication
          </h2>
        </div>
        <div class="card-body">
          <!-- Bootstrap Carousel -->
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <!-- Hard Coded Carousel Images :-( -->
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" :src="months.January" alt="First slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" :src="months.February" alt="Second slide">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--========================-->
    <!-- Test area for carousel -->
    <!--========================-->
  </div>
</template>

<script>
import Jumbotron from './jumbotron/Jumbotron'
import SkillsCard from './skills/SkillsCard'
// import DedicationCard from './dedication/DedicationCard'
import Carousel from './carousel/Carousel'

export default {
  props: [
    'cssChildBanner',
    'hideOnSmall'
  ],
  data () {
    return {
      dataTarget: '#carousel-img',
      months: {
        January: require('../assets/toggl/2018-01_1134x533.png'),
        February: require('../assets/toggl/2018-02_1134x533.png')
      }
    }
  },
  components: {
    Jumbotron,
    SkillsCard,
    // DedicationCard,
    Carousel
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
#carouselExampleIndicators {
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.07),
              3px 4px 9px 0 rgba(0, 0, 0, 0.25);
}
</style>
