<template>
  <nav
    :class="css.class.sidebar"
  >
    <!-- Logo -->
    <Logo/>
    <!-- Sidebar link list -->
    <ul
      :class="css.class.links"
    >
      <!-- Sidebar links -->
      <SidebarLinks
        v-for="(link, id) in sidebarLinks"
        :key="id"
        :link="link"
      />
    </ul>
  </nav>
</template>

<script>
import Logo from '../logo/Logo'
import SidebarLinks from './SidebarLinks'

export default {
  data () {
    return {
      css: {
        class: {
          sidebar: [
            'bg-light',
            'pl-0',
            'pr-0',
            'd-none',
            'd-md-flex',
            'flex-column'
          ],
          links: [
            'nav',
            'nav-pills',
            'flex-column',
            'flex-nowrap'
          ]
        }
      }
    }
  },
  components: {
    Logo,
    SidebarLinks
  },
  computed: {
    sidebarLinks () {
      return this.$store.getters['navigation/getNavigationLinks']
    }
  }
}
</script>

<style lang="scss" scoped>
/* Make sidebar fixed */
nav {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  overflow-y: scroll;
  box-shadow: 1px 0  5px 0 rgba(0,0,0,0.16),
              1px 0 10px 0 rgba(0,0,0,0.12);
}
/* Give nav link list a top border */
ul:first-of-type {
  border-top: 1px solid #dee2e6;
}
</style>
