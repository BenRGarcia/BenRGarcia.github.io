
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
      icon: 'insert_drive_file'
    },
    /* External navigation links */
    {
      name: 'GitHub',
      href: 'https://github.com/BenRGarcia',
      icon: 'code',
      target: '_blank'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/seebenprogram',
      icon: 'person_outline',
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
