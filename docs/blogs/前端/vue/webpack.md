---
title: 使用webpack构建vue
date: 2020-08-13
tags: 
  - vue
categories: 
  - 前端
---

## 1、初始化并安装webpack

### 1.1 初始化

```js
  npm init -y
```

### 1.2 安装webpack

```js
  npm i webpack webpack-cli webpack-dev-server html-webpack-plugin --save
```

## 2、配置webpack

### 2.1 配置webpack.config.js

    在目录下创建webpack.config.js文件,并配置webpack的入口/出口以及插件等参数.  
  创建响应目录的文件夹及文件,例如:

  - 创建src目录及index.js文件
  - 创建解析目录source
  - 创建public目录及index.html文件

  ```js
    #webpack.confog.js
    const path = require('path')
    const HtmlWebpackPlugin = require('html-webpack-plugin')
    module.exports = {
      entry: './src/index.js', // 入口文件
      output: {
        filename: 'bundle.js', // 出口文件
        path: path.resolve(__dirname, 'dist') // 出口文件路径
      },
      resolve: {
        // 解析模块包的方式,默认查找source 再找node_modules
        modules: [ path.resolve(__dirname, 'source'), path.resolve('node_modules') ]
      },
      devtool: 'source-map', // 调试时可以快速查找源码
      plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'public/index.html')
        })
      ]
    }
  ```

  ```html
    #public/index.html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <div id="app"></div>
    </body>
    </html>

  ```

### 3、创建vue实例
  目录结构
  ```
    vue
    └─ demo
      ├─ package-lock.json
      ├─ package.json
      ├─ public
      │  └─ index.html
      ├─ source
      │  └─ vue
      │     ├─ index.js // vue
      │     ├─ init.js // 初始化
      │     ├─ observe.js // 数据监听
      │     └─ proxy.js // 代理vm
      ├─ src
      │  └─ index.js // 入口文件
      └─ webpack.config.js
  ```
  在src/index.js 创建一个常用的vue实例
  ```js
    # src/index.js

    import Vue from 'vue'

    let vm  = new Vue({
      el: '#app',
      data(){
        return {
          msg: 'hello vue',
          data: { a: "111" }
        }
      },
      computed: {},
      watch: {}
    })
  ```
  初始化vue实例传递的参数
  ```js
    # source/vue/index.js

    function Vue(options){
      // 初始化参数
      this._init(options);
    }

    // 初始化
    Vue.prototype._init = function(options) {
      // 将参数存入vue
      let vm = this;
      vm.$options = options;
      // 初始化状态
      initStatus(vm);
    }


    export default Vue;
    
  ```
  ```js
    # init.js

    export function initStatus(vm){
      let opts = vm.$options
      // 初始化 data
      if (opts.data) {
        initData(vm)
      }
      ...
    }

    // 初始化 data
    function initData(vm){
      // 获取传入参数
      let data = vm.$options.data;
      // 判断data是否为function, 把数据赋值给vm._data
      data = vm._data = typeof data === "function" ? data.call(vm) : data || {}
      // 将vm._data 代理为 vm的操作
      for(let key in data) {
        proxy(vm, "_data", key)
      }
      // 监测数据
      observe(data)
    }
  ```

