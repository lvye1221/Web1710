

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







