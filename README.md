# Full Stack Developer Portfolio Page

> Click [here](http://seebenprogram.com) to see the deployed site

## Build Tools

* Created with Vue.js (CLI webpack template), Vuex, Vue-Router, Bootstrap v4

## Details

### Organization

![directory](https://user-images.githubusercontent.com/26657982/38512648-c628ca40-3bf9-11e8-83b7-72baaf894daf.png)

### Dynamic Component Rendering

Modularization for Vuex Store:

```js
// /src/store/store.js
export const store = new Vuex.Store({
  modules: {
    navigation,
    portfolio,
    // ...
  },
  // ...
```

Namespaced Vuex Modules:

```js
// src/store/modules/navigation.js
export default {
  namespaced: true,
  state,
  getters
}
```

Dynamic Component Rendering:

```js
// src/components/navigation/Sidebar.vue
// ...
<SidebarLinks
  v-for="(link, id) in sidebarLinks"
  :key="id"
  :link="link"
/>
// ...
computed: {
  sidebarLinks () {
    return this.$store.getters['navigation/getNavigationLinks']
  }
}
```

### Vue-Router

#### Paths Defined

```js
// src/router/index.js
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/resume',
      name: 'R&eacute;sum&eacute;',
      component: Resume
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
```