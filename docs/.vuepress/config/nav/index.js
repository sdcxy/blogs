
module.exports = [
  { text: '首页', link: '/', icon: 'reco-home' },
  { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
  { 
    text: '工具',  
    icon: 'reco-coding',
    items: [
      {
        text: 'MarkDown语法',
        link: '/blogs/Markdown/',
      },
      {
        text: 'MarkDown拓展',
        link: '/blogs/Markdown/Markdown',
      },
      {
        text: 'Front Matter',
        link: '/blogs/FrontMatter/',
      }
    ]
  },
  { 
    text: '关于', 
    link: '/about/',
    icon: 'reco-account',
    items: [
      {
        text: '博客',
        link: 'https://www.sdcxy.cn/',
        icon: 'reco-blog'
      },
      {
        text: 'GitHub',
        link: 'https://www.sdcxy.cn/blogs/',
        icon: 'reco-github'
      }
    ]
  },
]