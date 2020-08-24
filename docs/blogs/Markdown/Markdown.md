---
title: Markdown拓展
date: 2020-08-14
categories:
  - 工具
tags: 
  - Markdown
---

[vuepress关于Markdown拓展的描述](https://vuepress.vuejs.org/zh/guide/markdown.html)

## **1、GitHub 风格的表格**
  * 代码:
  ```
    | Tables        | Are           | Cool  |
    | ------------- |:-------------:| -----:|
    | col 3 is      | right-aligned | $1600 |
    | col 2 is      | centered      |   $12 |
    | zebra stripes | are neat      |    $1 |

  ```
  * 效果:<br>

  | Tables        | Are           | Cool  |
  | ------------- |:-------------:| -----:|
  | col 3 is      | right-aligned | $1600 |
  | col 2 is      | centered      |   $12 |
  | zebra stripes | are neat      |    $1 |


## **2、Emoji图标**
  * 代码:
  ```
    :crossed_fingers: 
    :fist_right:
    :female_detective:
  ```
  * 效果:<br>
  :crossed_fingers:<br>
  :fist_right:<br>
  :female_detective:<br>

  更多的Emoji,可以这[查看](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)

## **3、目录**
  * 代码:
  ```
    [[toc]]
  ```
  * 效果:
    [[toc]]

## **4、自定义容器**
  * 代码:
  ```
    ::: tip
    这是一个提示
    :::

    ::: warning
    这是一个警告
    :::

    ::: danger
    这是一个危险警告
    :::

    ::: details
    这是一个详情块,在 IE / Edge 中不生效
    :::
  ```
  * 效果:<br>
    ::: tip
    这是一个提示
    :::

    ::: warning
    这是一个警告
    :::

    ::: danger
    这是一个危险警告
    :::

    ::: details
    这是一个详情块,在 IE / Edge 中不生效
    :::

    自定义块中的标题
    ```
      ::: danger 危险警告
      危险区域，禁止通行
      :::

      ::: details 详情信息,点击查看代码
      这是一个详情信息框
      :::

    ```
    ::: danger 危险警告
    危险区域，禁止通行
    :::

    ::: details 详情信息,点击查看代码
    这是一个详情信息框
    :::
    更多功能查看[这里](https://vuepress.github.io/zh/plugins/container/)

## **5、代码块语法高亮**

### 5.1、代码高亮
  * 代码:
    ```html
      <span>
        ```js
          export default {
              name: 'DefaultComponent',
              data(){
                return {}
              }
          }
        ```
      </span>
    ```
  * 效果:
    ```js
      export default {
        name: 'DefaultComponent',
        data(){
          return {}
        }
      }
    ```
### 5.2、代码行高亮
  第三行高亮显示<br>
  * 代码:
    ```html
      <span>
        ```js{3}
          export default {
              name: 'DefaultComponent',
              data(){
                return {}
              }
          }
        ```
      </span>
    ```
  * 效果:
    ```js{3}
      export default {
        name: 'DefaultComponent',
        data(){
          return {}
        }
      }
    ```