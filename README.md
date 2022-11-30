# Vue 3 + Vite

> 我们再社区看到的大量的vite+vue的项目基本都是使用typescript来进行代码组织的,这里有个小小的问题,那就是使用ts的人水平参差不齐,会逐渐的让项目变得非常难以维护,或者变成anyscript项目,为了避免这个问题,我还是希望继续使用javascript来组织代码逻辑;

> 对于我来说,我更倾向于使用ES新特性来规避js带来的一些编码上的误区,同时我也希望能通过规范代码写法来让代码保持可维护性和可扩展性,因此这个项目产生了.

> 推荐两本书 "JavaScript语言精粹" "编写可维护的JavaScript"

## 规范目录结构
``` 
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
```
## 集成 Vue Router 路由工具

使用vue Router 4.x 作为路由管理工具

## 集成 Pinia 全局状态管理工具

使用pinia作为全局状态管理工具,更小更易用
## 集成 ElementPlus 组件库

> https://element-plus.gitee.io/zh-CN/guide/installation.html



## 按需引入

1. 使用 unplugin-vue-components 和 unplugin-auto-import 来实现自动导入：
2. 这样做的好处是我们不用再import特别多的重复的语法
3. 但是也有一个弊端就是不利于我么理解代码逻辑,所以我们订立一个约定: 公共组件和vue按需引入, 业务相关组件还是要手动引入.

```js
# vite.config.js
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';


plugins: [
  AutoImport({
    imports:['vue'], // 自动引入vue3
  }),
  Components({
    dirs: ['src/components'], // 配置需要默认导入的自定义组件文件夹，该文件夹下的所有组件都会自动 import
    resolvers: [ElementPlusResolver()],
  }),
],
```
