<template>
  <div
    class="align-items-center"
  >
    <!-- Render if 'RouterLink' property is present (Internal link) -->
    <router-link
      v-if="link.routerLink"
      tag="li"
      :class="css.class.li"
      :to="{ name: link.routerLink }"
    >
      <a
        :class="css.class.link"
      >
        <i
          :class="css.class.icon"
        >
          {{ link.icon }}
        </i>
        <span
          :class="css.class.linkName"
          :href="link.href"
          v-html="link.name"
        >
        </span>
      </a>
    </router-link>
    <!-- Render if 'RouterLink' property is *not* present (External link) -->
    <li
      v-else
      :class="css.class.li"
    >
      <a
        :class="css.class.link"
        :href="link.href"
        :target="link.target"
      >
        <!-- If icon is used -->
        <i
          v-if="link.icon"
          :class="css.class.icon"
        >
          {{ link.icon }}
        </i>
        <!-- If img is used -->
        <img
          v-else
          :src="link.imgSrc"
          :alt="link.imgAlt"
          class="img-fluid"
        >
        <span
          :class="css.class.linkName"
          :href="link.href"
          v-html="link.name"
        >
        </span>
      </a>
    </li>
  </div>
</template>

<script>
export default {
  props: [
    'link'
  ],
  data () {
    return {
      /* Bootstrap CSS Classes for both 'v-if' & 'v-else' component */
      css: {
        class: {
          li: [
            'nav-item',
            'd-flex',
            'w-100',
            'border-bottom',
            'pl-1'
          ],
          link: [
            'w-100',
            'sidebar-link'
          ],
          icon: [
            'material-icons',
            'align-middle'
          ],
          linkName: [
            'nav-link',
            'd-inline-block',
            'py-3',
            'pl-1',
            'pr-0'
          ]
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  color: initial;
  text-decoration: none;
}
a:hover {
  color: initial;
  text-decoration: none;
}
li:hover {
  background-color: #ddd;
}
/* When route is active */
.router-link-active {
  border-left: 3px solid red;
  background-color: #eee;
}
img {
  height: 32px;
}
</style>
