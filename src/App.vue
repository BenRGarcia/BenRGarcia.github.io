<template>
  <div>
    <!-- Navbar (for smaller screen sizes)  -->
    <div :class="navbarClasses">
      <Navbar/>
    </div>
    <div id="app">
      <!-- Sidebar (for larger screen sizes) -->
      <div :class="hideOnSmall">
        <Sidebar :class="sidebarLayout"/>
      </div>
      <!-- Main Content -->
      <main :class="mainLayout">
        <!-- Page banner (for larger screen sizes) -->
        <div :class="hideOnSmall">
          <h1 id="page-banner" v-html="this.$route.name"><!-- Active Route --></h1>
        </div>
        <!-- Container for all router views -->
        <div class="container-fluid">
          <router-view/>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Navbar from './components/navigation/Navbar'
import Sidebar from './components/navigation/Sidebar'

export default {
  name: 'App',
  data () {
    return {
      routeName: this.$route.name,
      navbarClasses: [
        'd-lg-none',
        'bg-secondary',
        'mb-3'
      ],
      hideOnSmall: [
        'd-none',
        'd-lg-block'
      ],
      sidebarLayout: [
        'col-lg-3',
        'col-xl-2'
      ],
      mainLayout: [
        'col-12',
        'col-lg-9',
        'col-xl-10',
        'ml-auto',
        'pb-4',
        'px-0'
      ]
    }
  },
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style lang="scss" scoped>
#page-banner {
  margin-bottom: 15px;
  padding: 30px;
  background-color: #f00;
  color: #fff;
  width: 100%;
}
</style>
