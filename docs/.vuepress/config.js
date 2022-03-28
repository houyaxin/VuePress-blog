// 把最后更改时间更改为 中国地区的样式
const moment = require('moment');
moment.locale("zh-cn") //显示中国的时间格式


module.exports = {
  base:'/vuepress-blog/',
  title: 'labee小新',
  description: 'just do a coder',
  head: [
    ['link', { rel: 'icon', href: '/assets/img/favicon.svg' }],
    ['meta', { name: 'author', content: 'labee小新' }],
    ['meta', { name: 'keywords', content: 'vuepress 介绍,vuepress 说明, labee小新, houyaxin' }]
  ],
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          return moment(timestamp).format('LLLL')
        }
      }
    ]
  ],
  themeConfig: {
    lastUpdated: '更新时间',
    logo: '/assets/img/hero.png',
    nav: [
      { text: "主页", link: "/", icon: "reco-home" },
      { text: 'Guide', link: '/guide/' },
      { text: '关于', link: '/about/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar:'auto'
  },
}