// See more in https://github.com/ktquez/vuepress-theme-ktquez#themeconfig
const en = require('./locales/en/config')
module.exports = {
  locales: {
    '/': en
  },
  serviceWorker: {
    updatePopup: { 
      message: "New content 🎉🎉", 
      buttonText: "Update" 
    }
  },
  disqus: 'hann',
  url: `https://hann-minhee.github.io`,
  cdn: '',
  blackWhite: true,
  topNavigation: false,
  searchMaxSuggestions: 7,
  responsive: {
    active: false,
    ext: 'png',
    breakpoints: []
  },
  lazyLoad: {},
  elevator: {
    duration: 4000,
    mainAudio: '/music/elevator.mp3',
    endAudio: '/music/ding.mp3'
  }
}
