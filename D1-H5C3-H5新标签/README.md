```

1、HTML5:
    HTML4.1
    网页开发：
        结构: html4.0
        样式：css css2
        行为：js
    HTML5:　是HTML4的升级版本(狭义)
        结构：html5
        样式：css3
        行为：js API 有所增强  地理定位 web存储 拖拽


    HTML5广义的概念: 代表着浏览器技术发展的一阶段，HTML5+CSS3+js API 一套前端技术的组合；

2、新增语义化标签
    header 头部
    nav  导航
    section  区域
    aside  侧边栏
    article 文章
    footer 底部
    progress  进度条

3、表单
   表单类型： type="text"
   email
   tel
   url
   search
   number  step:步长
   color
   range  value   max min
   time
   date
   month
   week

   有兼容性问题

   表单元素：
    <input type="search" list="sex"/>
    数据列表
    <datalist id="sex">
        <option>男</option>
        <option>男</option>
        <option>男</option>
    </datalist>

    <output></output>  输出信息
    <keygen/>   生成密钥的 用于表单安全传输
    <meter></meter> 度量器  max   min  value  low  high
    <progress></progress> 进度条  max   min  value

    表单属性：
    placeholder:提示文字
    autofocus:自动聚焦
    autocomplete：自动完成（填充）  on 开启（默认）   off 取消提示
    required:必填
    multiple: 多选
    novalidate: 关闭表单的默认验证功能 用于form
    pattern:  自定义正则验证 pattern="\D+";

    表单事件：
    oninput:当用户输入时 触发
    oninvalid:当验证不通过是触发-->设置验证不通过时的提示文字


4、多媒体
    之前：
        在网页上播放 多媒体 必须依赖于第三方 插件
        mediaplay:
        快播：
        falsh插件：

        H5里面提供了 视频 和 音频的标签
        audio  video




5、DOM拓展
    document 对象    文档对象

    当在浏览器中 打开一个页面后， 浏览器首先会来解析我们的 网页，把解析出来的数据，存放到一个DOM对象中；
    document.getElmentById();

    在H5中 DOM新增的功能：

    jquery---
    $('.box');
    $('#box');
    $('div.box);
    $('div p');

   获取单个元素：
    document.querySelector('.box‘);

    获取所有符合条件的元素：  返回的数组
    document.querySeletorAll('.box');

    控制类名的API：
    node.classList.add();添加类名
    node.classList.remove()；删除类名
    node.classlist.contains();判断是否包含指定的类名
    node.classList.toggle()；切换指定的类名



```
