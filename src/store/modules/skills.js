const state = {
  _skills: [
    {
      name: 'JavaScript',
      src: require('../../assets/images/skills/javascript.png')
    }, {
      name: 'Vue.js',
      src: require('../../assets/images/skills/vue.svg')
    }, {
      name: 'React.js',
      src: require('../../assets/images/skills/react.svg')
    }, {
      name: 'Node.js',
      src: require('../../assets/images/skills/node.svg')
    }, {
      name: 'Express.js',
      src: require('../../assets/images/skills/express.png')
    }, {
      name: 'MongoDB',
      src: require('../../assets/images/skills/mongo.svg')
    }, {
      name: 'Git',
      src: require('../../assets/images/skills/git.svg')
    }, {
      name: 'HTML5',
      src: require('../../assets/images/skills/html5.svg')
    }, {
      name: 'CSS3',
      src: require('../../assets/images/skills/css3.svg')
    }
  ]
}

const getters = {
  getSkills: state => state._skills
}

export default {
  namespaced: true,
  state,
  getters
}
