<template>
  <!-- Responsive wrapper -->
  <div
    :class="css.class.grid"
  >
    <!-- Bootstrap Card -->
    <div
      class="card m-2"
    >
      <!-- Card Header -->
      <div
        class="card-header text-center"
      >
        <h5
          class="mb-0"
        >
          {{ skill.name }}
        </h5>
      </div>
      <!-- Card Body -->
      <div
        class="card-body pb-1 px-2"
      >
        <div
          id="imgWrapper"
          class="text-center"
        >
          <img
            :src="skill.src"
            :alt="skill.name"
            class="img-fluid mb-2"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'skill'
  ],
  data () {
    return {
      css: {
        class: {
          grid: [
            'col-12',
            'col-sm-6',
            'col-md-4'
          ]
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  height: 70px;
}
.card {
  box-shadow: 0 2px  5px 0 rgba(0, 0, 0, 0.1),
              0 4px 10px 0 rgba(0, 0, 0, 0.08);
}
</style>
