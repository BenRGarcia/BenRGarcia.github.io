# Full Stack Developer Portfolio Page

> Click [here](http://seebenprogram.com) to see the deployed site

## Build Tools

Created with **Vue.js** (CLI webpack template), **Vuex**, **Vue-Router**, **Bootstrap v4**

Deploy Script for GitHub Pages:

```js
// ~/package.json
// ...
  "scripts": {
    // ...
    "build": "node build/build.js",
    "deploy": "rm -rf dist && npm run build && cd dist && git init && git add . && git commit -m \"Initial commit\" && git remote add origin git@github.com:BenRGarcia/BenRGarcia.github.io.git && git push --force origin master"
    // (Mandatory file serving on Master branch for User Pages)
  }
// ...
```

## Details

### Organization

![directory](https://user-images.githubusercontent.com/26657982/38512648-c628ca40-3bf9-11e8-83b7-72baaf894daf.png)

### Dynamic Component Rendering

Modularization for Vuex Store:

```js
// src/store/store.js
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

### CSS

Bootstrap Grid:

```js
// src/App.vue
data () {
    return {
      css: {
        class: {
          /* Hide navbar on large screens */
          navbar: [
            'd-lg-none',
            'mb-3'
          ],
          /* Hide sidebar & banner on small screens */
          hideOnSmall: [
            'd-none',
            'd-lg-block'
          ],
          /* Grid layout for sidebar */
          sidebar: [
            'col-lg-3',
            'col-xl-2'
          ],
          /* Grid layout for main content */
          mainContent: [
            'col-12',
            'col-lg-9',
            'col-xl-10',
            // ...
```

SCSS:

```scss
// src/assets/scss/_custom.scss
/* Override Bootstrap v4's built-in custom variables here */
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1350px
);

// src/assets/scss/main.scss
// Import '_custom.scss' overrides of Bootstrap's default variables
@import "custom";
// Import  Bootstrap's scss
@import "~bootstrap/scss/bootstrap";

/* Global scss goes below */
// ...
```

### Misc

Additional webpack config to handle .pdf's:

```js
// ~/build/webpack.base.conf.js
// ...
{
  test: /\.(pdf)(\?.*)?$/,
  loader: 'url-loader',
  options: {
    limit: 10000,
    name: utils.assetsPath('docs/[name].[hash:7].[ext]')
  }
}
// ...
```