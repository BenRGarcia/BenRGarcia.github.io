import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'jquery'
import navigation from './modules/navigation'
import portfolio from './modules/portfolio'
import tools from './modules/tools'
import toggl from './modules/toggl'
import resume from './modules/resume'
import logo from './modules/logo'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    navigation,
    portfolio,
    tools,
    toggl,
    resume,
    logo
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {
    // Collapse navbar when view is mounted -- an admittedly 'hackey' workaround
    collapseNavbar: context => $('#navbarNavDropdown').collapse('hide')
  }
})
