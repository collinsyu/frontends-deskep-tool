# Pomegranate 石榴

使用electron做一个桌面工具app。

第一波先内置几个功能，例如：代码生成工具、自动化测试工具。。。


目前第一个目标是为了提高自己的开发效率（前端），之后我觉得如果高通了第三方工具的介入的话，破出api，
完全可以形成一个社区，大家都来开发miniprogram，用户使用这个app框架， 可以直接下载第三方小程序。
嗯嗯，可以的，要了解下这个东西

## 目录结构
```
.
├── README.md
├── config
│   ├── base.config.js
│   └── nodemon.dev.json
├── package.json
├── plugins
├── server
│   └── index.js
├── static
│   └── viewer
│       ├── index.html
│       └── online-status.html
└── view
```



## todo
* [x] 为项目起个名字
* [x] 静态文件配置
* [x] mini-logger
* [x] electron文件变化，项目自动重启（注意不是热更新）
* [ ] ~~ui使用react 【[参考1](https://www.jianshu.com/p/91a4214b913b)】【[参考2](https://segmentfault.com/a/1190000017210172)】~~
* [x] ui使用umi
* [ ] 本地数据库【[nedb](https://github.com/louischatriot/nedb)】【[参考](https://www.cnblogs.com/buzhiqianduan/p/7620099.html)】【[参考2](https://www.cnblogs.com/buzhiqianduan/p/7620099.html)】
* [ ] 打包
* [x] electron热更新
* [ ] 代码生成工具
* [ ] 自动化测试工具
* [ ] 第三方工具接口
* [ ] 用户系统
* [ ] 社区
* [ ] 社区小程序：分析英文小说词汇，分类等
* [ ] 首页modal
* [ ] 图标