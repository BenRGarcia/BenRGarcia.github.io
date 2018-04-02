const state = {
  _resume: {
    imgSrc: require('../../assets/resume/Resume.png'),
    imgAlt: 'Image of Resume Text Document',
    pdfFile: require('../../assets/resume/Resume.pdf'),
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
