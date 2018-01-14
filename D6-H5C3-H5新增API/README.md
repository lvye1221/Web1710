```
1、视频
    属性：
        paused: 视频的播放暂停状态
        duration:视频的总时长
        currentTime:当前播放时间

    放法：play() 播放
          pause()暂停

    oncanplay： 当视频加载完成之后
    ontimeupdate: 当视频当前时间 改变之后触发

    全屏：
        video.webkitRequsetFullScreen();

 2、拖拽：
    1、需要设置拖拽：draggable="true"
    2、拖拽元素：
        ondragstart: 拖拽开始
        ondragend:拖拽结束
        ondragleave: 当鼠标拖拽离开 被拖拽元素时
        ondrag:　当拖拽时，持续触发
    3、目标元素：
        ondragenter:当被拖拽元素进入目标元素时
        ondragleave:当鼠标进入目标元素时
        ondragover: 当被拖拽元素在目标元素上时，持续触发
            --> e.preventDefault(); 阻止拖拽的默认行为；
        ondrop:当在目标元素上松开鼠标时触发；


```


