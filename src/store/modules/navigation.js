
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
      name: 'Contact',
      href: 'mailto:ben@SeeBenProgram.com?Subject=I%20want%20to%20hire%20you%21',
      icon: 'email'
    },
    {
      name: 'GitHub: /BenRGarcia',
      href: 'https://github.com/BenRGarcia',
      icon: 'code',
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
