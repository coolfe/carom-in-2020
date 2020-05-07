## 解析下面的代码
```javascript
const element = (<div id='foo'><a>bar</a><b></b></div>);
const container = document.getElementById('root');
ReactDOM.render(element, container);
```

## 步骤
- `ReactDOM.render(element, container);`
```javascript
function render(element, container) {
  // 判断文本元素还是常规结点
  const dom = element.type == 'TEXT_ELEMENT'
    ? document.createTextNode('')
    : document.createElement(element.type);

  const isProperty = key => key !== 'children';
  Object.keys(element.props).filter(isProperty).forEach(name => {
    dom[name] = element.props[name];
  })

  element.props.children.forEach(child => {
    render(child, dom);
  })

  container.appendChild(dom);
}
```