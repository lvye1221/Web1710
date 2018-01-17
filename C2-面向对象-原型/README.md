### 创建对象

1. new 构造函数名()
2. {}

###  构造函数

对于变量名，普通函数名，首字母建议小写

function Dog() {}

#### 增加属性

function Dog() {  this.name = "XXX" }

Dog.prototype.name = "XXX"
Dog.prototype = {name: "XXX"}


#### 理论知识

##### 判断属性x是否存在于对象 obj
x in obj
obj.hasOwnProperty(x)

##### 判断 obj 是否是 Dog 的实例
obj instanceof Dog
obj.__proto__.constructor === Dog
