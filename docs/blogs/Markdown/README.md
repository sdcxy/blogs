---
title: MarkDown语法
date: 2020-08-13
categories:
  - 工具
tags: 
  - Markdown
---

## 目录:
[[toc]]

## **1、概述**<span id="gaishu" ></span>
  Markdown是一种纯文本格式的标记语言。通过简单的标记语法，它可以使普通文本内容具有一定的格式

### **1.1 设计理念**

   * Markdown 易于阅读，方便创作web文档，利于各平台无缝分发。
   * Markdown 语法灵感最大的来源还是纯文本 email 的格式，完全由标点符号标签组成的纯文本。
   * Markdown 文件应该以纯文本形式原样发布，不应该包含标记标签和格式化指令。

### **1.2 内联HTML语法**

   * HTML 是一种**发布格式**，Markdown 是一种**创作格式**。
   * Markdown语法集合比较小，只是HTML标签的一小部分
   * 对于 Markdown 中未包含的标签, 可以直接使用 HTML标签，例如用 HTML &lt;a&gt; 标签替代 Markdown 的链接语法。

### **1.3 特殊字符自动转义**

  在 HTML 中, 有两个字符需要特殊对待: &lt; 和 &amp;，左尖括号用于起始标签。如果你想将它们用作字面量, 你必须将它们转义为字符实体

```Markdown
  例如：
  < --> &lt; 
  & --> &amp;。
```

## **2、行内语法讲解**

### **2.1、注释的表达**

  * 代码法
  ```html
    <div style="display: none">这是注释,不会在浏览器中显示</div>
  ```
  * html注释  
  因为支持html语法，所有同样也支持html注释
  ```Markdown
    <!-- 这是一个html的注释,不会在浏览器中显示 -->

    <!--
      这是一个多段的注释,
      不会在浏览器中显示
    -->
  ```

  * hack方法  
  hack方法时利用Markdown的解析原理来实现注释的,
  一般有的Markdown解析器不支持上面的注释方法，这个时候就可以使用hack方法,
  ```Markdown
    [//]: #  这是一个多段的注释,不会在浏览器中显示
    [^-^]: # 这是一个多段的注释,不会在浏览器中显示
    [//]: <> 这是一个多段的注释,不会在浏览器中显示
    [comment]: <> 这是一个多段的注释,不会在浏览器中显示
  ```

### **2.2、分级标题**

  在文字前面加#来表示标题  
  一个#是一级标题，二个#是二级标题，以此类推。支持六级标题 

  ```
    例如: 
    # 这是一级标题
    ## 这是二级标题
    ### 这是三级标题
    #### 这是四级标题
    ##### 这是五级标题
    ###### 这是六级标题
  ```
### **2.3、任务列表**

  ```
    - [ ] 任务一 未做任务 `- + 空格 + [ ]`
    - [x] 任务二 已做任务 `- + 空格 + [x]`
  ```
  效果如下:  

  * 任务一 未做任务 - + 空格 + [ ]
  * 任务二 已做任务 - + 空格 + [x]


### **2.4、换行、空行、对齐方式**

  * 换行  
  由于markdown编辑器的不同,可能在一行字后面，直接换行回车，也能实现换行，但是在Visual Studio Code上，想要换行必须得在一行字后面**空两个格子**才行。

  * 空行  
  在编辑的时候有多少个空行(只要这一行只有回车或者space没有其他的字符就算空行)，**在渲染之后，只隔着一行**。

  * 对齐方式  
  代码如下:
  ```html
    <center style="backgroundColor: red">行中心对齐</center>
    <p align="left" style="backgroundColor: yellow">行左对齐</p>
    <p align="right" style="backgroundColor: green">行右对齐</p>
  ```

  显示效果：

  <center style="backgroundColor: red">行中心对齐</center>
  <p align="left" style="backgroundColor: yellow">行左对齐</p>
  <p align="right" style="backgroundColor: green">行右对齐</p>
  

### **2.5、斜体、粗体、删除线、下划线**

  * 代码：
  ```Markdown
    *斜体* 或者 _斜体_
    **粗体** 或者 __粗体__
    ***加粗斜体***
    ~~删除线~~
    <u>下划线</u>
    <span style="border-bottom: 1px solid red">带颜色的下划线</span>
  ```
  * 显示:  
  *斜体*<br>
  **粗体**<br>
  ***加粗斜体***<br>
  ~~删除线~~<br>
  <u>下划线</u><br>
  <span style="border-bottom: 1px solid red">带颜色的下划线</span><br>

### **2.6、超链接、页内链接、自动链接、注脚**
  * 行内式<br>
    * 语法:  
    [] 填写链接文字, ()填写链接地址, ()中的""可以指定链接的title属性,title非必须的,
    title属性的效果是鼠标悬停在链接上会出现指定的 title文字，链接地址与title前有一个空格。M<br>
    * 代码:  
    ```Markdown
      [百度一下](https://www.baidu.com/ "百度一下")
    ```
    * 效果:   
    [百度一下](https://www.baidu.com/ "百度一下")

  * 参考式<br>
  参考式超链接一般用在学术论文上面，或者另一种情况，如果某一个链接在文章中多处使用，那么使用引用 的方式创建链接将非常好，它可以让你对链接进行统一的管理。
    * 语法:<br>
    参考式链接分为两部分，文中的写法 **[链接文字][链接标记]**，在文本的任意位置添加**[链接标记]:链接地址**。
    * 代码
    ```Markdown
      常用的搜索引擎: [百度一下][1] 、[Google][2]
      [1]:https://www.baidu.com/
      [2]:http://www.google.com/
    ```
  * 注脚<br>
    * 语法:<br>
    在需要添加注脚的文字后加上脚注名字[^注脚名字],称为加注。 然后在文本的任意位置(一般在最后)添加脚注，脚注前必须有对应的脚注名字。<br>
    注意：即使你没有把注脚写在文末，经Markdown转换后，也会自动归类到文章的最后。
    * 代码:
    ```Markdown
      使用 Markdown[^1]可以效率的书写文档, 直接转换成 HTML[^2], 你可以使用 Typora[^T] 编辑器进行书写。
      [^1]:Markdown是一种纯文本标记语言
      [^2]:超文本标记语言
    ```
    * 效果:<br>
      使用 Markdown[^1]可以效率的书写文档, 直接转换成 HTML[^2]<br>

      [^1]:Markdown是一种纯文本标记语言

      [^2]:超文本标记语言 

  * 描点(页内超链接)<br>
    网页中，锚点其实就是页内超链接，也就是链接本文档内部的某些元素，实现当前页面中的跳转。比如我这里写下一个锚点，点击回到目录，就能跳转到目录。 在目录中点击这一节，就能跳过来。还有下一节的注脚。这些根本上都是用锚点来实现的，只支持在标题后插入锚点，其它地方无效。
    * 代码:<br>
    ```html
      ## <span id="gaishu">1、概述</span>

      跳转到[概述](#gaishu)
    ```
    * 效果:<br>
    跳转到[概述](#gaishu)

  * 自动链接<br>
    * 语法:<br>
    Markdown 支持以比较简短的自动链接形式来处理网址和电子邮件信箱，只要是用&lt;&gt;包起来, Markdown 就会自动把它转成链接。一般网址的链接文字就和链接地址一样。
    * 代码
    ```Markdown
      &lt;https://baidu.com&gt;<br>
      &lt;address@example.com&gt;
    ```
    * 效果:<br>
    <a href="https://baidu.com">https://baidu.com</a><br>
    <a href="address@example.com">address@example.com</a>
  
### **2.7、无序列表、有序列表、定义型列表**
  * **无序列表**<br>
  使用 *，+，- 表示无序列表。
    * 代码:
    ```Markdown
      * 无序列表一
      + 无序列表二
      - 无序列表三
    ```
    * 效果:<br>
      * 无序列表一
      + 无序列表二
      - 无序列表三

  * **有序列表**<br>
  有序列表则使用数字接着一个英文句点。
    * 代码:
    ```Markdown
      1. 有序列表一
      2. 有序列表二
      3. 有序列表三
    ```
    * 效果:<br>
      1. 有序列表一
      2. 有序列表二
      3. 有序列表三

  * **定义型列表**<br>
    定义型列表由名词和解释组成。一行写上定义，紧跟一行写上解释。解释的写法:紧跟一个缩进(Tab)
    * 代码:
    ```
      :    轻量级文本标记语言（左侧有一个可见的冒号和四个不可见的空格）
    ```
    * 效果:<br>
    Markdown<br>
    : 轻量级文本标记语言，可以转换成html，pdf等格式

### **2.8、插入图像**

  语法中图片Alt的意思是如果图片因为某些原因不能显示，就用定义的图片Alt文字来代替图片。 图片Title则和链接中的Title一样，表示鼠标悬停与图片上时出现的文字。 Alt 和 Title 都不是必须的，可以省略，但建议写上。
  * 代码:
    ```html
      <center>
        <!-- 居中对齐 -->
        ![cloud](http://weichuanginfo.cn/cloud.jpg "云")
        格式: ![图片Alt](图片地址 "图片Title")
      </center>
    ```
  * 效果:<br>
  <center>
    ![cloud](http://weichuanginfo.cn/cloud.jpg "云")
  </center>

### **2.9、多级引用**

  * 语法<br>
  引用需要在被引用的文本前加上&gt;符号和空格，允许多层嵌套，也允许你偷懒只在整个段落的第一行最前面加上 &gt; 。
  * 代码:
    ```Markdown
      >>> 请问 Markdwon 怎么用？ - 小白
      >> 自己看教程！ - 愤青
      > 教程在哪？ - 小白
    ```
  * 效果:<br>
    >>> 请问Markdown 怎么用? - 小白<br>

    >> 自己看教程！ - 愤青<br>

    > 教程在哪？ - 小白<br>
  
### **2.10、转义字符、字体、字号、颜色**
  * **转义字符**
    * 语法<br>
    Markdown中的转义字符为\，转义的有:
    \反斜杠 `反引号 *星号 _下划线 {}大括号 []中括号 ()小括号 #井号 +加号 -减号 .英文句号 !感叹号
  * **字体、字号、颜色**
    * 代码:
    ```html
      <font face="黑体">我是黑体字</font>
      <font face="微软雅黑">我是微软雅黑</font>
      <font face="STCAIYUN">我是华文彩云</font>
      <font color=#0099ff size=12 face="黑体">黑体</font>
      <font color=gray size=5>gray</font>
      <font color=#00ffff size=3>null</font>
    ```
    * 效果:<br>
    <font face="黑体">我是黑体字</font><br>
    <font face="微软雅黑">我是微软雅黑</font><br>
    <font face="STCAIYUN">我是华文彩云</font><br>
    <font color=#0099ff size=12 face="黑体">黑体</font><br>
    <font color=gray size=5>gray</font><br>
    <font color=#00ffff size=3>null</font>

## **3、块语法讲解**

### **3.1、内容目录**

  在段落中填写 [[toc]] 以显示全文内容的目录结构。
  * 代码:
  ```Markdown
    [[toc]]
  ```
### **3.2、代码块**

  对于程序员来说这个功能是必不可少的，插入程序代码的方式有两种，一种是利用缩进(Tab), 另一种是利用”`”符号（一般在ESC键下方）包裹代码。
  * 行内式<br>
    * 代码:
    ```Markdown
      C语言里的函数 `scanf()` 怎么使用？
    ```
    * 效果:<br>
    C语言里的函数 `scanf()` 怎么使用？

  * 用六个`包裹多行代码<br>
    * 语法:<br>
    ```html
      <span>
        ```java -->对应的语言类型
            对应语言的代码
            public class app {
              public void main(String[] args){
                System.out.println("这是一个主函数");
              }
            }
        ```
      </span>
    ```

    * 代码:
    ```java
      public class app {
        public void main(String[] args){
          System.out.println("这是一个主函数");
        }
      }
    ```

### **3.3、表格**

  * 语法:<br>
  不管是哪种方式，第一行为表头，第二行分隔表头和主体部分，第三行开始每一行为一个表格行。<br>
  列于列之间用管道符|隔开。原生方式的表格每一行的两边也要有管道符。
  第二行还可以为不同的列指定对齐方向。默认为左对齐，在-右边加上:就右对齐。
  `-` 左对齐， `:-:` 中心对齐，`-:` 右对齐
  * 代码:
  ```Markdown
    |序号|学号|姓名|
    |:-:|-|-:|
    |1|10086|小明|
    |2|10087|小红|
    |3|10088|小白|

  ```
  * 效果:
      |序号|学号|姓名|
      |:-:|-|-:|
      |1|10086|小明|
      |2|10087|小红|
      |3|10088|小白|

### **3.4、分割线**

  你可以在一行中用三个以上的星号、减号、底线来建立一个分隔线，行内不能有其他东西。你也可以在星号或是减号中间插入空格。下面每种写法都可以建立分隔线：

  * 代码:
  ```
    * * *
    ***
    *******
    - - -
    ---
    -----------
  ```
  * 效果:<br>

    * * *
    ***
    *******
    - - -
    ---
    -----------

### **3.5、HTML原始码**
  在代码区块里面， & 、 < 和 > 会自动转成 HTML 实体，这样的方式让你非常容易使用 Markdown 插入范例用的 HTML 原始码，只需要复制贴上，剩下的 Markdown 都会帮你处理，例如：
  * 代码:
  ```html
    第一个例子：
    <div class="footer">
    © 2004 Foo Corporation
    </div>
    第二个例子：
    <center>
      <table>
      <tr>
      <th rowspan="2">值班人员</th>
      <th>星期一</th>
      <th>星期二</th>
      <th>星期三</th>
      </tr>
      <tr>
      <td>李强</td>
      <td>张明</td>
      <td>王平</td>
      </tr>
      </table>
    </center>
  ```
  * 效果:<br>
  <div class="footer">© 2004 Foo Corporation</div> <br>
  <center>
    <table>
      <tr>
      <th rowspan="2">值班人员</th>
      <th>星期一</th>
      <th>星期二</th>
      <th>星期三</th>
      </tr>
      <tr>
      <td>李强</td>
      <td>张明</td>
      <td>王平</td>
      </tr>
    </table>
  </center>

### **3.6、特殊符号**

  * 效果:<br>
  <center>
    <table>
      <tr>
      <th>特殊符号</th>
      <th>描述</th>
      <th>字符的代码</th>
      </tr>
      <tr>
      <td>&nbsp;</td>
      <td>空格符</td>
      <td>`&nbsp;`</td>
      </tr>
      <tr>
      <td>&lt;</td>
      <td>小于号</td>
      <td>`&lt;`</td>
      </tr>
      <tr>
      <td>&gt;</td>
      <td>大于号</td>
      <td>`&gt;`</td>
      </tr>
      <tr>
      <td>&amp;</td>
      <td>和号</td>
      <td>`&amp;`</td>
      </tr>
      <tr>
      <td>&yen;</td>
      <td>币</td>
      <td>`&yen;`</td>
      </tr>
      <tr>
      <td>&copy;</td>
      <td>版权</td>
      <td>`&copy;`</td>
      </tr>
      <tr>
      <td>&reg;</td>
      <td>注册商标</td>
      <td>`&reg;`</td>
      </tr>
      <tr>
      <td>&deg;C</td>
      <td>摄氏度</td>
      <td>`&deg;C`</td>
      </tr>
      <tr>
      <td>&plusmn;</td>
      <td>正负号</td>
      <td>`&plusmn;`</td>
      </tr>
      <tr>
      <td>&times;</td>
      <td>乘号</td>
      <td>`&times;`</td>
      </tr>
      <tr>
      <td>&divide;</td>
      <td>除号</td>
      <td>`&divide;`</td>
      </tr>
      <tr>
      <td>&sup2;</td>
      <td>平方</td>
      <td>`&sup2;`</td>
      </tr>
      <tr>
      <td>&sup3;</td>
      <td>立方</td>
      <td>`&sup3;`</td>
      </tr>
    </table>
  </center>