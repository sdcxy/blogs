---
title: 使用vuepress搭建个人博客网站
date: 2020-08-13
categories:
 - 工具
sidebar: auto
---

::: tip 提示
Node.js的版本>=8
:::

# 安装vuepress  

查看官网文档,全局安装vuepress
```js
  # 安装
  npm install vuepress -g

  # 创建项目目录
  mkdir my-vuepress

  # 创建一个docs文件夹
  cd my-vuepress 
  mkdir docs

  cd docs
  # 新建一个 markdown 文件 作为入口文件 必须以README.md命名
  echo '# Hello Vuepress' > README.md

  # 创建package.json
  npm init -y

  # 修改package.json 内容
  # package.json 文件
  {
    "scripts": {
      "dev": "vuepress dev .",
      "build": "vuepress build ."
    },
  }

  # 启动项目
  npm run dev

  # 构建静态文件
  npm run build

```

## 配置项目
```js
  # 在README.md 设置默认的主题
  ---
    home: true
    heroText: Hero 标题
    tagline: Hero 副标题
    actionText: 快速上手 →
    actionLink: /zh/guide/
    features:
    - title: 简洁至上
      details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
    - title: Vue驱动
      details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
    - title: 高性能
      details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
    footer: MIT Licensed | Copyright © 2018-present Evan You
  ---
```

参考:[默认主题配置](https://www.vuepress.cn/theme/default-theme-config.html)

![](/imgs/vuepress/vuepress博客网站首页.png)

```js
  # 创建一个.vuepress文件夹
  cd docs
  mkdir .vuepress

  # 创建配置config.js文件
  cd .vuepress
  mkdir config.js

  # config.js

  module.exports = {
    title: "vuepress's blog",
    description: "使用vuepress搭建个人博客",
    dest: 'public'
  }

```
参考:[配置](https://www.vuepress.cn/config/)


## 导航栏
```js{7}
  目录结构如下
    my-vuepress
  ├─ docs
  │  ├─ .vuepress
  │  │  ├─ config
  │  │  │  ├─ nav
  │  │  │  │  └─ index.js
  │  │  │  ├─ plugins
  │  │  │  │  └─ index.js
  │  │  │  └─ sidebar
  │  │  │     └─ index.js
  │  │  └─ config.js
  │  ├─ package.json
  │  └─ README.md
  └─ README.md

  # nav/index.js
  module.exports = [
    { text: "指南", link: '/views/' }
  ]

  然后再配置文件config.js中引入
  # config.js
  const nav = require('./config/nav/index')

  module.exports = {
    title: "vuepress's blog",
    description: "使用vuepress搭建个人博客",
    dest: 'public',
    themeConfig: {
      nav,
    }
  }
```

## 侧边栏
```js{11}
  目录结构
   my-vuepress
  ├─ docs
  │  ├─ .vuepress
  │  │  ├─ config
  │  │  │  ├─ nav
  │  │  │  │  └─ index.js
  │  │  │  ├─ plugins
  │  │  │  │  └─ index.js
  │  │  │  └─ sidebar
  │  │  │     └─ index.js
  │  │  └─ config.js
  │  ├─ package.json
  │  └─ README.md
  └─ README.md

  # sidebar/index.js
  module.exports = {
    '/views/': [
      ''
    ]
  }

然后再配置文件config.js中引入
const sidebar  = require('./config/sidebar/index')
module.exports = {
  title: 'Eladmin-template',
  description: 'SpringBoot Vue TypeScript 后台管理模板',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
    themeConfig: {
      nav,
      sidebar,
    }
}
```

## 部署

[vuepress部署说明](https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages)

- 在Github Pages上进行部署
  - 配置base
  ```js
    设置`docs/.vuepress/config.js`配置文件的 base 属性
    module.exports = {
      base: '/blogs/',
    }

  ```
  - 添加deploy.sh文件

  ```js
    #!/usr/bin/env sh

    # 确保脚本抛出遇到的错误
    set -e

    # 生成静态文件
    npm run build

    # 进入生成的文件夹
    cd dist

    # 如果是发布到自定义域名
    # echo 'www.example.com' > CNAME

    git init
    git add -A
    git commit -m 'deploy'

    # 如果发布到 https://<USERNAME>.github.io
    # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

    # 如果发布到 https://<USERNAME>.github.io/<REPO>
    # git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

    cd -

  ```
  - 执行
  ```js
    npm run deploy
    
  ```