const state = {
  _projects: [
    {
      name: 'My Portfolio Site',
      description: 'Made with Vue.js, Webpack, Vuex, Vue-Router, and Bootstrap v4',
      src: require('../../assets/images/portfolio/portfolio.png'),
      href: 'https://github.com/BenRGarcia/BenRGarcia.github.io/tree/source-code'
    },
    {
      name: 'GitHubFolio',
      description: 'Generate a developer portfolio site in less than 30 seconds!',
      src: require('../../assets/images/portfolio/githubfolio.png'),
      href: 'https://github.com/BenRGarcia/GitHubFolio'
    },
    {
      name: 'POMO',
      description: 'A classroom tool for teachers! Assign tasks with times, students accumulate coins for swag!',
      src: require('../../assets/images/portfolio/POMO.png'),
      href: 'https://github.com/BenRGarcia/Pomo'
    }, {
      name: 'Clickey Game',
      description: 'Test your memory with this Pokemon themed React App! Click a picture -- but don\'t click the same picture twice!',
      src: require('../../assets/images/portfolio/pokeball.png'),
      href: 'https://github.com/BenRGarcia/clicky-game'
    },
    {
      name: 'News Scraper',
      description: 'Scrape news articles and store in MongoDB',
      src: require('../../assets/images/portfolio/news-scraper.png'),
      href: 'https://github.com/BenRGarcia/news-scraper'
    },
    {
      name: 'Multiplayer Trivia',
      description: '*My Personal Favorite* A realtime group trivia game with in-game chat',
      src: require('../../assets/images/portfolio/multiplayer-trivia.png'),
      href: 'https://github.com/BenRGarcia/Multiplayer-Trivia-v2'
    },
    {
      name: 'Burgers2',
      description: 'Full stack Node, Express, Handlebars and Sequelize app where you can eat burgers!',
      src: require('../../assets/images/portfolio/burgers2.png'),
      href: 'https://github.com/BenRGarcia/burger2'
    },
    {
      name: 'Burgers',
      description: 'Full stack Node, Express, Handlebars app where you can eat burgers!',
      src: require('../../assets/images/portfolio/burgers.png'),
      href: 'https://github.com/BenRGarcia/burger'
    },
    {
      name: 'Foe Finder',
      description: 'Complete the survey to discover the identity of your Arch Enemy!',
      src: require('../../assets/images/portfolio/arch-enemy.jpg'),
      href: 'https://github.com/BenRGarcia/Foe-Finder'
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
