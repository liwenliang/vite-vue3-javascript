# Vue 3 + Vite

## 规范目录结构

├── dist/
└── src/
    ├── api/                       // 接口请求目录
    ├── assets/                    // 静态资源目录
    ├── common/                    // 通用类库目录
    ├── components/                // 公共组件目录
    ├── router/                    // 路由配置目录
    ├── store/                     // 状态管理目录
    ├── style/                     // 通用样式目录
    ├── utils/                     // 工具函数目录
    ├── views/                     // 页面组件目录
    ├── App.vue
    ├── main.js
├── tests/                         // 单元测试目录
├── index.html
├── jsconfig.json                  // JavaScript 配置文件
├── vite.config.js                 // Vite 配置文件
└── package.json

## 集成 Vue Router 路由工具

## 集成 Pinia 全局状态管理工具

## 集成 ElementPlus 组件库

> https://element-plus.gitee.io/zh-CN/guide/installation.html



## 按需引入

1. 使用 unplugin-vue-components 和 unplugin-auto-import 来实现自动导入：
2. 这样做的好处是我们不用再import特别多的重复的语法
3. 但是也有一个弊端就是不利于我么理解代码逻辑,所以我们订立一个约定: 公共组件和vue按需引入, 业务相关组件还是要手动引入.