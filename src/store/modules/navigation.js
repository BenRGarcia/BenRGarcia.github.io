
const state = {
  _navigationLinks: [
    /* Internal navigation links */
    {
      name: 'Home',
      routerLink: 'Home',
      icon: 'home'
    },
    {
      name: 'Portfolio',
      routerLink: 'Portfolio',
      icon: 'photo_library'
    },
    {
      name: 'R&eacute;sum&eacute;',
      routerLink: 'R&eacute;sum&eacute;',
      icon: 'picture_as_pdf'
    },
    /* External navigation links */
    {
      name: 'GitHub',
      href: 'https://github.com/BenRGarcia',
      imgSrc: require('../../assets/social/GitHub.png'),
      imgAlt: 'GitHub logo',
      target: '_blank'
    }
  ]
}

const getters = {
  getNavigationLinks: state => state._navigationLinks
}

export default {
  namespaced: true,
  state,
  getters
}
