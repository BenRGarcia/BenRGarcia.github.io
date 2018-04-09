<template>
  <div><!-- Don't delete this div, CSS grid/col received from parent component-->
    <!-- Bootstrap v4 Card -->
    <div
      class="card mb-4 card-box-shadow"
    >
      <!-- Card image header -->
      <div
        class="img-wrapper"
      >
        <img
          class="card-img-top img-bg-color"
          :src="project.src"
          :alt="imgAlt"
        >
      </div>
      <!-- Card body -->
      <div
        class="card-body pb-1 position-relative border-top"
      >
        <h5
          class="card-title"
        >
          {{ project.name }}
        </h5>
        <p
          class="card-text"
        >
          {{ project.description }}
        </p>
        <!-- Link to Project-Specific GitHub Repo -->
        <div
          class="link-wrapper"
        >
          <a
            :href="project.href"
            target="_blank"
          >
            <i class="material-icons">link</i>
          </a>
        </div>
      </div>
    </div>
  </div><!-- Don't delete this div, CSS grid/col received from parent component-->
</template>

<script>
export default {
  props: [
    'project'
  ],
  data () {
    return {
      imgAlt: 'Portfolio Project Image Header'
    }
  }
}
</script>

<style lang="scss" scoped>
.card-box-shadow {
  box-shadow: 1px 5px 5px 0 rgba(0,0,0,0.08),
              2px 5px 8px 0 rgba(0,0,0,0.10);
}
.img-wrapper {
  height: 200px;
  overflow: hidden;
}
.img-bg-color {
  background-color: rgba(0, 0, 0, 0.1)
}
.link-wrapper {
  position: absolute;
  top: 0;
  right: 6px;
}
</style>
