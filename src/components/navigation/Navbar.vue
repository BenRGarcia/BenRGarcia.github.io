<template>
  <!-- Navbar wrapper -->
  <nav
    :class="css.class.nav"
  >
    <!-- Navbar toggle button -->
    <button
      id="toggle-button"
      class="navbar-toggler ml-1"
      type="button"
      data-toggle="collapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
      :aria-controls="id.dropdown"
      :data-target="'#' + id.dropdown"
    >
      <!-- Navbar toggle icon -->
      <span
        id="toggle-icon"
        :class="css.class.toggleIcon"
      >
      </span>
    </button>
    <!-- Navbar Title -->
    <router-link
      to="{ name: 'Home'}"
      id="navbarTitle"
      :class="css.class.navbarTitle"
    >
      {{ name }}
      <br>
      <span>
        {{ title }}
      </span>
    </router-link>
    <!-- Navbar dropdown wrapper -->
    <div
      :class="css.class.dropdown"
      :id="id.dropdown"
    >
      <ul class="navbar-nav">
        <!-- Navbar Items -->
        <NavbarLink
          v-for="(link, index) in navbarItems"
          :key="index"
          :link="link"
        />
      </ul>
    </div>
  </nav>
</template>

<script>
import NavbarLink from './NavbarLink'

export default {
  data () {
    return {
      name: 'Benjamin R Garcia',
      title: 'Full Stack Web Developer',
      id: {
        dropdown: 'navbarNavDropdown'
      },
      css: {
        class: {
          nav: [
            'navbar',
            'navbar-expand-lg',
            'navbar-dark',
            'pl-1'
          ],
          navbarTitle: [
            'mx-auto',
            'py-1',
            'text-center'
          ],
          dropdown: [
            'collapse',
            'navbar-collapse'
          ],
          toggleIcon: [
            'navbar-toggler-icon'
          ]
        }
      }
    }
  },
  components: {
    NavbarLink
  },
  computed: {
    navbarItems () {
      return this.$store.getters['navigation/getNavigationLinks']
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  padding-top: 24px;
  padding-bottom: 24px;
  z-index: 1;
}
#navbarTitle {
  color: #fff;
  font-size: 1.1rem;
}
#navbarTitle:hover {
  text-decoration: none;
}
#toggle-button {
  outline: 2px auto #fff;
}
#toggle-button:hover {
  background-color: rgba(255, 50, 50, 0.9);
}
#toggle-button:focus {
  outline: 5px auto #fff;
}
</style>
