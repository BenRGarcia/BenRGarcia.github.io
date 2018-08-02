const state = {
  _social: {
    github: {
      href: 'https://github.com/BenRGarcia',
      imgSrc: require('../../assets/social/GitHub.png'),
      imgAlt: 'GitHub logo'
    }
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
