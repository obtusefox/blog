module.exports = {
  title: "obtuseCave",
  description: 'A Blog',
  base: '/blog/',
  dest: 'docs',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: '',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/', icon: 'component-home' },
      { text: 'TimeLine', link: '/timeLine/', icon: 'component-date' },
      { text: 'GitHub', link: 'https://github.com/han-minhee', icon: 'component-github' }
    ],

    blogConfig: {
      category: {
        location: 2,
        text: 'Category'
      },
      tag: {
        location: 3,
        text: 'Tag'
      }
    },

    logo: '/head.png',
    search: true,
    searchMaxSuggestions: 7,
    sidebar: 'auto',
    lastUpdated: 'Last Updated',
    author: 'Han, Minhee',
    startYear: '2018'
  },
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/medium-zoom', 'flowchart']
}  