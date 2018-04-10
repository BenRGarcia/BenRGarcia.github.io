const state = {
  _projects: [
    {
      name: 'My Portfolio Site',
      description: 'Made with Vue.js, Webpack, Vuex, Vue-Router, and Bootstrap v4',
      src: require('../../assets/images/portfolio/portfolio.png'),
      href: 'https://github.com/BenRGarcia/BenRGarcia.github.io/tree/source-code'
    },
    {
      name: 'Multiplayer Trivia',
      description: '*My Personal Favorite* A realtime group trivia game with in-game chat',
      src: require('../../assets/images/portfolio/multiplayer-trivia.png'),
      href: 'https://github.com/BenRGarcia/Multiplayer-Trivia-v2'
    },
    {
      name: 'Tune Up',
      description: 'A car maintenance utility app that tracks and projects service intervals',
      src: require('../../assets/images/portfolio/tune-up.png'),
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
      description: 'A Node.js command line app that mimics Siri. Search OMDB, Spotify, and Twitter!',
      src: require('../../assets/images/portfolio/liri.png'),
      href: 'https://github.com/BenRGarcia/liri-node-app'
    },
    {
      name: 'Gif-Tastic',
      description: 'A superhero-themed gif search web app',
      src: require('../../assets/images/portfolio/gif-tastic.png'),
      href: 'https://github.com/BenRGarcia/Gif-Tastic-v2'
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
