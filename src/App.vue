<template>
    <div id="app">
      <!-- Navbar (for smaller screen sizes)  -->
      <div :class="css.class.navbar">
        <Navbar/>
      </div>
      <!-- Sidebar (for larger screen sizes) -->
      <div :class="css.class.hideOnSmall">
        <Sidebar :class="css.class.sidebar"/>
      </div>
      <!-- Main content wrapper -->
      <main :class="css.class.mainContent">
        <!-- Page banner (for larger screen sizes) -->
        <div :class="css.class.hideOnSmall">
          <h1 id="page-banner" v-html="this.$route.name"><!-- Active Route --></h1>
        </div>
        <!-- Container for all router views -->
        <div class="container-fluid">
          <router-view/>
        </div>
      </main>
    </div>
</template>

<script>
import Navbar from './components/navigation/Navbar'
import Sidebar from './components/navigation/Sidebar'

export default {
  name: 'App',
  data () {
    return {
      css: {
        class: {
          navbar: [
            'd-lg-none',
            'mb-3'
          ],
          hideOnSmall: [
            'd-none',
            'd-lg-block'
          ],
          sidebar: [
            'col-lg-3',
            'col-xl-2'
          ],
          mainContent: [
            'col-12',
            'col-lg-9',
            'col-xl-10',
            'ml-auto',
            'pb-4',
            'px-0'
          ]
        }
      }
    }
  },
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #f00;
}
#page-banner {
  margin-bottom: 15px;
  padding: 30px;
  background-color: #f00;
  color: #fff;
  width: 100%;
}
</style>
