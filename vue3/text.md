- vdom 的核心的逻辑 template
  - 解析成抽象语法树 ast
  - 根据 ast， 用 transform 模块转化
    @click.prevent.capture
  - codeGen 生成代码字符串 string
  - new Function 把 string 转换成可执行的函数
  - 执行后，就是 vdom （静态标记等配置）
