module.exports = {
  title: 'labee小新',
  description: 'just do a coder',
  head: [
    ['link', { rel: 'icon', href: '/assets/img/favicon.svg' }],
    ['meta', { name: 'author', content: 'labee小新' }],
    ['meta', { name: 'keywords', content: 'vuepress 介绍,vuepress 说明, labee小新, houyaxin' }]
  ],
  themeConfig: {
    lastUpdated: '更新时间',
    logo: '/assets/img/hero.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: '关于', link: '/about/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      '/',
      '/page-a',
      ['/page-b', 'Explicit link text']
    ]
  },
}