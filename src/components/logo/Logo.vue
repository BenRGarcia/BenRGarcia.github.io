<template>
  <!-- Logo wrapper -->
  <div
    class="p-3"
  >
    <!-- Link wrapper for image -->
    <router-link
      :to="routerLink"
    >
      <!-- Profile picture -->
      <img
        :src="logo.imgSrc"
        :alt="logo.imgAlt"
        class="img-fluid rounded-circle profile-img"
      >
    </router-link>
    <!-- Name -->
    <h2
      class="h1 mb-2 mt-3"
      v-html="logo.name"
    >
    </h2>
    <!-- Sub-title -->
    <span
      class="h5 border-bottom"
    >
      {{ logo.title }}
    </span>
    <!-- Email address -->
    <small>
      <a
        id="email-link"
        :href="logo.mailto"
      >
        {{ logo.emailAddr }}
      </a>
    </small>
  </div>
</template>

<script>
export default {
  data () {
    return {
      routerLink: {
        name: 'Home'
      }
    }
  },
  computed: {
    logo () {
      return this.$store.getters['logo/getLogo']
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-img {
  border: 20px solid #f00;
}
small {
  font-size: 90%;
}
a {
  text-decoration: none;
  color: initial;
}
#email-link:hover {
  opacity: 0.7;
}
</style>
