
module.exports = {
  title: 'ObtuseCave',
  description: 'Pseudo Computer Scientist',
  base: '/blog/',
  dest: 'docs',
  theme: 'yuu',
  
  themeConfig: {
      yuu: {
          colorThemes: ['red', 'blue']
      },
    sidebar: [
      {
          title: 'About',
          collapsable: true,
          children: [
          '/resume'
          ]
      },
      {
        title: 'Devs',
        collapsable: true,
        children: [
        '/devs/crouton',
        '/devs/emacs-basics'
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
      },
      
      {
        title: 'Rust 속성',
        collapsable: true,
        children: [
            'rust-begin/rust0',
            'rust-begin/rust1'
        ]
      },
      {
          title: 'Software Foundations',
          collapsable: true,
          children: [
              'pl/sf/0-settings',
              'pl/sf/1-basics',
              'pl/sf/2-induction',
              'pl/sf/3-lists',
              'pl/sf/4-poly',
              'pl/sf/5-tactics',
              'pl/sf/6-logic',
              'pl/sf/7-indProp',
              'pl/sf/8-maps',
              'pl/sf/9-imp',
              'pl/sf/10-auto'
          ]
      }
    ]
  },
  markdow: {
      config: md => {
          md.use(require('markdown-it-footnote'))
      }
  }
}