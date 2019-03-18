
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
              'pl/sf/4-poly'
          ]
      }
    ]
  },
  markdow: {
      config: md => {
          md.use(require('markdown-it-footnote')),
          md.use(require("markdown-it-katex"));
      }
  }
}