<template>
  <div
    id="img-wrapper"
    class="mx-auto"
  >
    <img
      :src="resume.imgSrc"
      :alt="resume.imgAlt"
      class="img-fluid"
    >
    <a
      :href="resume.pdfFile"
      :download="resume.fileName"
    >
      <i
        class="material-icons"
      >
        file_download
      </i>
    </a>
  </div>
</template>

<script>
export default {
  computed: {
    resume () {
      return this.$store.getters['resume/getResume']
    }
  },
  mounted: function () {
    return this.$store.dispatch('collapseNavbar')
  }
}
</script>

<style lang="scss" scoped>
a {
  color: #000;
}
i {
  position: fixed;
  bottom: 25px;
  right: 25px;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 10px;
  border-radius: 50%;
}
i:hover {
  background-color: rgba(0, 0, 0, 0.35);
}
#img-wrapper {
  max-width: 1100px;
}
img {
  box-shadow: 0 4px  8px 0 rgba(0, 0, 0, 0.2),
              0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
