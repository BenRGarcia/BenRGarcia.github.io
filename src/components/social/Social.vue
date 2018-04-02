<template>
  <div class="card">
    <div class="card-body">
      <div>
        <a
          v-for="(link, index) in socialLinks"
          :key="index"
          :href="link.href"
        >
          <img
            :src="link.imgSrc"
            :alt="link.imgAlt"
          >
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    socialLinks () {
      return this.$store.getters['social/getSocial']
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: initial;
}
a:hover {
  text-decoration: none;
  color: initial;
  opacity: 0.9;
}
.card {
  margin-bottom: 15px;
  border: 2px solid #ff0000;
  border-radius: 20px;
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.15),
              6px 8px 18px 0 rgba(0, 0, 0, 0.10);
}
</style>
