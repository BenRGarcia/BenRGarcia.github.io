const state = {
  _social: {
    github: {
      href: 'https://github.com/BenRGarcia',
      imgSrc: require('../../assets/social/GitHub.png'),
      imgAlt: 'GitHub logo'
    },
    linkedin: {
      href: 'https://www.linkedin.com/in/seebenprogram',
      imgSrc: require('../../assets/social/LinkedIn.png'),
      imgAlt: 'LinkedIn logo'
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
