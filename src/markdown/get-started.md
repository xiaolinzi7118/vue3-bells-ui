# 开始使用

请先安装本组件库。

然后在你的代码中写入下面的代码:

`import {Switch, Button, Input, Dialog, Tab, Tabs,Toast} from "linzi-bells-ui"`

（注意：详细组件里的代码引用路径为相对路径）

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

下一节：[Switch 开关](#/doc/switch)