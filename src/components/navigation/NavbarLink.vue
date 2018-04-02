<template>
  <div>
    <!-- Only renders if an internal navigation link -->
    <li
      v-if="link.routerLink"
      class="nav-item pl-2"
    >
      <router-link
        :to="{ name: link.routerLink }"
        class="nav-link d-inline-block"
        v-html="link.name"
      >
      </router-link>
    </li>
  </div>
</template>

<script>
export default {
  props: [
    'link'
  ]
}
</script>

<style lang="scss" scoped>
.router-link-active {
  color: #fff !important;
}
</style>
