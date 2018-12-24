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
          title: 'Pages',
          collapsable: false,
          children: [
              '/Page-1',
              '/Page-2'
          ]
      }
      ]
  }
}