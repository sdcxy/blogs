---
title: vuepress pwa 使用
date: 2020-08-24
categories:
 - 工具
sidebar: auto
---

# PWA使用

[pwa](https://vuepress.vuejs.org/zh/plugin/official/plugin-pwa.html)

[@vuepress/plugin-pwa](https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-pwa)

::: tip
  pwa插件
:::

## 1 安装pwa

```js
  npm i @vuepress/plugin-pwa -D
```

## 2 启用pwa插件

```js
  module.exports = {
    plugins: [
      '@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
    ],
  }
```

## 3  添加 Manifest和icons

