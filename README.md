演示地址：https://nailuox.github.io/vue_demo

## 技术栈：

@vue/cli + vue4.0 + vue router + vuex + less

## 运行项目（nodejs 6.0+）

```
 git clone https://github.com/nailuox/vue_demo.git

 cd vue_demo

 yarn install 安装依赖

 yarn run serve 运行

 yarn run build （发布）
```

## 说明

> 本项目主要用于理解 vue 技术栈中技术要点

## @vue/cli

Vue CLI 是一个基于 Vue.js 进行快速开发的完整系统，提供：
  > 通过 @vue/cli 搭建交互式的项目脚手架。
  > 通过 @vue/cli + @vue/cli-service-global 快速开始零配置原型开发。
  > 一个运行时依赖 (@vue/cli-service)，该依赖：**
  >   可升级；
    > 基于 webpack 构建，并带有合理的默认配置；
    > 可以通过项目内的配置文件进行配置；
    > 可以通过插件进行扩展。
  **4.一个丰富的官方插件集合，集成了前端生态中最好的工具。**
  **5.一套完全图形化的创建和管理 Vue.js 项目的用户界面。**

Vue CLI 致力于将 Vue 生态中的工具基础标准化。它确保了各种构建工具能够基于智能的默认配置即可平稳衔接，这样你可以专注在撰写应用上，而不必花好几天去纠结配置的问题。与此同时，它也为每个工具提供了调整配置的灵活性，无需 eject。

## Vue

Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。
>   Vue是一套用于构建用户界面的渐进式框架 “前端框架”
>   让程序员脱离自己操作DOM 专注于写逻辑和操作数据
>   Vue的核心库只关注视图层 易上手 便于与第三方库或既有的项目整合
>   当与现代化的工具链以及各种支持的库结合使用时 Vue也完全能够为复杂的单页应用提供驱动

## 组件的生命周期

![](https://raw.githubusercontent.com/nailuox/vue_demo/master/screenshot/lifecycle.png)

## Vue-Router 路由

Vue Router 是 Vue.js 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。包含的功能有：
> 嵌套的路由/视图表
> 模块化的、基于组件的路由配置
> 路由参数、查询、通配符
> 基于 Vue.js 过渡系统的视图过渡效果
> 细粒度的导航控制
> 带有自动激活的 CSS class 的链接
> HTML5 历史模式或 hash 模式，在 IE9 中自动降级
> 自定义的滚动条行为

## Vuex

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex 也集成到 Vue 的官方调试工具 devtools extension，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。

这个状态自管理应用包含以下几个部分：

> state，驱动应用的数据源；
> view，以声明方式将 state 映射到视图；
> actions，响应在 view 上的用户输入导致的状态变化。

![](https://raw.githubusercontent.com/nailuox/vue_demo/master/screenshot/vuex.png)
