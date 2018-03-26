import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    _navigationLinks: [
      {
        name: 'Home',
        href: '/#/home',
        icon: 'home'
      },
      {
        name: 'Portfolio',
        href: '/#/portfolio',
        icon: 'photo_library'
      },
      {
        name: 'R&eacute;sum&eacute;',
        href: '/#/resume',
        icon: 'picture_as_pdf'
      },
      {
        name: 'Contact',
        href: '/#/contact',
        icon: 'email'
      }
    ]
  },
  getters: {
    getNavigationLinks (state) {
      return state._navigationLinks
    }
  },
  mutations: {},
  actions: {}
})
