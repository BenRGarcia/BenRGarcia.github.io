const state = {
  _social: {
    github: {},
    linkedin: {}
  }
}

const getters = {
  getSocial: state => state._social
}

export default {
  namespaced: true,
  state,
  getters
}
