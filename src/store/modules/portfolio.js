const state = {
  _projects: [
    {
      name: 'My Portfolio Site',
      description: 'Made with Vue.js, Webpack, Vuex, Vue-Router, and Bootstrap v4',
      src: require('../../assets/images/portfolio/vue.png'),
      href: 'https://github.com/BenRGarcia/BenRGarcia.github.io/tree/source-code'
    },
    {
      name: 'Multiplayer Trivia',
      description: 'A realtime group trivia game',
      src: require('../../assets/images/portfolio/vue.png'),
      href: 'https://github.com/BenRGarcia/Multiplayer-Trivia-v2'
    },
    {
      name: 'Tune Up',
      description: 'A car maintenance utility app',
      src: require('../../assets/images/portfolio/vue.png'),
      href: 'https://github.com/BenRGarcia/Tune-Up'
    },
    {
      name: 'Bamazon',
      description: 'A Node.js command line app made for Customers, Managers, and Supervisors',
      src: require('../../assets/images/portfolio/bamazon.png'),
      href: 'https://github.com/BenRGarcia/Bamazon'
    },
    {
      name: 'Liri',
      description: 'A Node.js command line app that mimics Siri.',
      src: require('../../assets/images/portfolio/vue.png'),
      href: 'https://github.com/BenRGarcia/liri-node-app'
    }
  ]
}

const getters = {
  getProjects: state => state._projects
}

export default {
  namespaced: true,
  state,
  getters
}
