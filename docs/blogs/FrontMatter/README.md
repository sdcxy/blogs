---
  title: Front Matter
  date: 2020-08-15
  categories:
    - 工具
  tags:
    - Front Matter
---

## 目录:
[[toc]]

## 1、介绍
  Front Matter 必须是 markdown 文件中的第一部分，并且必须采用在三点划线之间书写的有效的 YAML.  
  例如:  
  ```
    ---
      title: Blog Title
      date: 2020-08-15
    ---
  ```
  这些三条虚线之间，可以设置预定义变量,甚至可以创建自己的自定义变量。 然后，您可以使用<code>[$frontmatter](https://www.vuepress.cn/guide/global-computed.html#frontmatter)</code>在页面的其余部分、以及所有的自定义和主题组件访问这些变量。<br>

## 2、预定义变量

### title
- 类型: `string`  
- 默认值: `h1_title || siteConfig.title`  

当前页面的标题

### lang  
- 类型: `string`  
- 默认值: `en-US`  

当前页面的语言

### description  
- 类型: `string`  
- 默认值: `siteConfig.description`  

当前页面的描述

### layout  
- 类型: `string`  
- 默认值: `Layout`  

设置当前页面的布局组件

### permalink  
- 类型: `string`  
- 默认值: `siteConfig.permalink`  

参考[Permalinks](https://www.vuepress.cn/guide/permalinks.html)

### metaTitle  
- 类型: `string`  
- 默认值: `${page.title} | ${siteConfig.title}`  

重写默认的 meta title

### meta  
- 类型: `array`  
- 默认值: `undefined`  

指定额外的要注入的 meta 标签：
```markdown
  ---
  meta:
    - name: description
      content: hello
    - name: keywords
      content: super duper SEO
  ---
```

## 3、默认主题的预定义变量

### navbar  
- 类型: `boolean`  
- 默认值: `undefined`  

参考:[默认主题配置>禁用导航栏](https://www.vuepress.cn/theme/default-theme-config.html)

### sidebar  
- 类型: `boolean|'auto'`  
- 默认值: `undefined`  

参考:[默认主题配置>侧边栏](https://www.vuepress.cn/theme/default-theme-config.html)

### prev  
- 类型: `boolean|string`  
- 默认值: `undefined`  

参考:[默认主题配置>上 / 下一篇链接](https://www.vuepress.cn/theme/default-theme-config.html)

### next  
- 类型: `boolean|string`  
- 默认值: `undefined`  

参考:[默认主题配置>上 / 下一篇链接](https://www.vuepress.cn/theme/default-theme-config.html)

### search  
- 类型: `boolean`  
- 默认值: `undefined`  

参考:[默认主题配置>内置搜索](https://www.vuepress.cn/theme/default-theme-config.html)

### tags  
- 类型: `array`  
- 默认值: `undefined`  

参考:[默认主题配置>内置搜索](https://www.vuepress.cn/theme/default-theme-config.html)