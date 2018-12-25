
module.exports = {
  title: 'ObtuseCave',
  description: 'Pseudo Computer Scientist',
  base: '/blog/',
  dest: 'docs',
  
  themeConfig: {
    sidebar: [
      {
          title: 'Main',
          collapsable: false,
          children: [
          '/'
          ]
      },
      {
          title: 'Kotlin Koans',
          collapsable: false,
          children: [
              'koans/koan1',
              'koans/koan2'
          ]
      }
      ]
  }
}