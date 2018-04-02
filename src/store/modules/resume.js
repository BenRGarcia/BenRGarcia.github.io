const state = {
  _resume: {
    imgSrc: require('../../../static/documents/Resume.png'),
    imgAlt: 'Image of Resume Text Document',
    pdfFile: require('../../../static/documents/Resume.pdf'),
    fileName: 'Resume_Benjamin_R_Garcia.pdf'
  }
}

const getters = {
  getResume: state => state._resume
}

export default {
  namespaced: true,
  state,
  getters
}
