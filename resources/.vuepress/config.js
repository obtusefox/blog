
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
              'pl/sf/1-enumerated-types',
              'pl/sf/2-more-types',
              'pl/sf/3-numbers'
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