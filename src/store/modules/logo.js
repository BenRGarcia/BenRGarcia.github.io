const state = {
  _logo: {
    imgSrc: require('../../assets/images/profile.jpeg'),
    imgAlt: 'Profile picture of Benjamin Garcia, Full Stack Web Developer',
    name: 'Benjamin<br>Garcia',
    title: 'Full Stack Developer',
    emailAddr: 'ben@SeeBenProgram.com',
    mailto: 'mailto:ben@SeeBenProgram.com?Subject=I%20want%20to%20hire%20you%21'
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
