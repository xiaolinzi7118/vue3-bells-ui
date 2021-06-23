# 铃铛 UI

* 官网预览：[铃铛 UI](https://xiaolinzi7118.github.io/vue3-bells-ui-website/)
* 源代码库：[铃铛 UI](https://github.com/xiaolinzi7118/vue3-bells-ui)

铃铛 UI 是一款基于 Vue 3 和 TypeScript 的小型 UI 组件库。

这款组件库是我作为学习 Vue3.0 和 Tyepscript 的学习成果，自己写 UI 、测试 Demo 和 官方网页

因为是个人学习的 UI 组件，并没有经过广泛的用户测试，因此强烈不建议你讲此 UI 库用于生产环境。

但如果你是抱着看源代码的目的来的，那么这个库还是值得一看的。

## 当前支持的组件

- [x] Switch 开关
- [x] Button 按钮
- [x] Input 输入框
- [x] Dialog 弹出框
- [x] Tabs 标签页
- [x] Toast 轻提示
- [ ] 更多 ...

## 安装

打开终端运行下列命令：

`npm install linzi-bells-ui`

或

`yarn add linzi-bells-ui`

## 开始使用

`import {Switch, Button, Input, Dialog, Tab, Tabs,Toast} from "linzi-bells-ui"`


引入样式:

`import 'linzi-bells-ui/dist/lib/linzi-bells-ui.css'`

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button, Tabs, Switch, Dialog} from "linzi-bells-ui"
import 'linzi-bells-ui/dist/lib/linzi-bells-ui.css'
export default {
  components: {Button}
}
</script>
```