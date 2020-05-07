## 解析下面的代码
```javascript
const element = (<div id='foo'><a>bar</a><b></b></div>);
const container = document.getElementById('root');
ReactDOM.render(element, container);
```

## 步骤：JSX 通过 babel 转换成 js
- `const element = (<div id='foo'><a>bar</a><b></b></div>)`
```javascript
const Didact = {
  createElement,
}
const element = Didact.createElement(
  'div',
  {id: 'foo'},
  Didact.createElement('a', null, 'bar'),
  Didact.createElement('b')
)

// 确保 children 是个数组
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      // 当 child 是纯文本的时候，给它分配一个 TEXT_ELEMENT 类型
      children: children.map(child => 
        typeof child == 'object' ? child: createTextElement(child)
      ),
    },
  }
}

function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    }
  }
}
```