module.exports = {
  base: '/blog/',
  dest: 'docs',
  title: 'obtuseCave',
  locales: {
    '/': {
      lang: 'en',
      title: 'obtuseCave',
      description: ''
    }
  },
  themeConfig: {
    nav: [
      {type: 'link', text: 'about', link: '/about/'},
      {type: 'link', text: 'github', link: 'https://github.com/han-minhee/'}
    ],
    lastUpdated: true
  }
}
