
module.exports = {
  title: 'ObtuseCave',
  description: 'Pseudo Computer Scientist',
  base: '/blog/',
  dest: 'docs',
  
  themeConfig: {
    sidebar: [
      {
          title: 'About',
          collapsable: true,
          children: [
          '/resume'
          ]
      },
      {
          title: 'Kotlin Koans',
          collapsable: true,
          children: [
              'koans/koan0',
              'koans/koan1',
              'koans/koan2'
          ]
      }
      ]
  }
}