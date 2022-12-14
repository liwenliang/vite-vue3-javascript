# Vue 3 + Vite

> 我们在社区看到的大量的vite+vue的项目基本都是使用typescript来进行代码组织的,这里有个小小的问题,那就是使用ts的人水平参差不齐,会逐渐的让项目变得非常难以维护,或者变成anyscript项目,为了避免这个问题,我还是希望继续使用javascript来组织代码逻辑;

> 对于我来说,我更倾向于使用ES新特性来规避js带来的一些编码上的误区,同时我也希望能通过规范代码写法来让代码保持可维护性和可扩展性,因此这个项目产生了.

> 推荐两本书 "JavaScript语言精粹" "编写可维护的JavaScript",他们可以让我们更规范的写代码.

> 项目中使用到了eslint和stylelint,来帮助我们写出更规范的代码,相信在新技术的加持下,我们开发项目会变得越来越得心应手

> 项目中集成了windicss,可以让我们更方便的写样式,当然windicss只是一个工具,它能够帮助我们更快的写出样式,如果你不熟悉,你还是可以继续使用原来的方式,这种自由度让我们可以更安心的写代码.

> 集成了unplugin-vue-components 和 unplugin-auto-import两个插件,让我们不用写大量的重复import,不过为了项目的可读性和维护性,我们原则上只有vue和elementplus以及项目组件才会自动引入.

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
├── index.html
├── .editorconfig                  // 编辑器配置文件
├── .eslintrc-auto-import.json     // 自动导入插件生成的eslint忽略规则
└── .eslintrc.js                   // eslint规则文件
├── .gitignore                     // 项目忽略的文件
├── index.html                     // index模板文件
├── stylelint.config.js            // stylelint规则文件
├── vite.config.js                 // Vite 配置文件
└── package.json
```
## 集成 vite 

### 下一代的前端工具链
> https://cn.vitejs.dev/

## 集成 Vue Router 路由工具

### Vue.js 的官方路由
> 使用vue Router 4.x 作为路由管理工具
> https://router.vuejs.org/zh/index.html

## 集成 Pinia 全局状态管理工具

> 使用pinia作为全局状态管理工具,更小更易用
> https://pinia.vuejs.org/zh/index.html
## 集成 ElementPlus 组件库

> https://element-plus.gitee.io/zh-CN/guide/installation.html

## 集成eslint
> https://zh-hans.eslint.org/

## 集成stylelint
> stylelint这里有点需要注意的地方,自动格式化css代码,用到了stylelint-plus这个插件,如果你的样式无法自动格式化,可以试试这个插件

> https://stylelint.io/



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
