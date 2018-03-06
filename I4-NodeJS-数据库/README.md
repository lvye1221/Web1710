

# 保存到服务器

1. 将用户名和密码保存到 txt 文件中
        fs.writefile()

    username: "zhangsan"
    password: "123456"

    JSON 格式
    {
    username: "zhangsan"
    password: "123456"
    }

    读文件
        匹配 文件中的用户名密码  和   客户端传递过来的用户名密码是否匹配

2. 数据库

    关系型数据库      MS SQL Server, Oracle, MySQL, Access

                username      password
                zhangsan      123456
                lisi          123456
                ...           ...

    非关系型数据库    MongoDB,  Redis

            MongoDB  存储格式采用的是 JSON格式
                {
                    username: "zhangsan"
                    password: "123456"
                }

## 命令

1. 启动数据库
```
mongod --dbpath c:\mongo
```

c:\mongo 路径可以修改的


## NodeJS 读取 MongoDB 中的数据

1. 数据库是存放在服务器中的，所以，我们必须通过服务器去获取数据

不能通过 浏览器 直接获取服务器数据库中的数据

如果提示的是：

```
Error: Cannot find module 'mongodb'
```

代表 找不到模块 mongodb

【解决方法】 安装此模块    cnpm install mongodb --save





## express 生成器

express myapp             // 创建应用 myapp, 名字可以改
cnpm install              // 在 myapp 目录，安装对应依赖模块
node bin\www              // 启动服务器 (npm start)


### 增加1个接口
/routes/index.js

```
// 新增1个接口
router.get("/list", function(req, res) {
  res.json({})
})
```

### 连接数据库

1. 新建 db.js 文件(加入连接数据库的代码)

2. 新建 models 文件夹，用于存储数据库中所有集合
        user.js    用户模型
3. 在 routes/user.js 文件中，添加接口 /list
        通过用户模型的 user.js 文件，
        利用查询数据库的方式，获取到数据库中所有信息



### MVC
M： Model 数据模型
V： View  视图（显示的页面）
C： Controller 控制器（在这里对应的是路由）