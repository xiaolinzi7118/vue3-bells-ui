# 开始使用

请先安装本组件库。

然后在你的代码中写入下面的代码

`import {Switch, Button, Input, Dialog, Tabs,Toast} from "linzi-bells-ui"`

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
export default {
  components: {Button}
}
</script>
```

下一节：[Switch开关](#/doc/switch)