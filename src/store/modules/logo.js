const state = {
  _logo: {

  }
}

const getters = {
  getLogo: state => state._logo
}

export default {
  namespaced: true,
  state,
  getters
}
