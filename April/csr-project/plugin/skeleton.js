function MyPlugin(options) {
  this.options = options;
  if (!this.options.text) {
    throw new Error('必填');
  }
}

MyPlugin.prototype.apply = function (compiler) {
  compiler.plugin('compilation', (compilation) => {
    compilation.assets['./test.txt'] = {
      source: () => {
        return this.options.text
      },
      size: () => {
        return this.options.text.length
      }
    }
    compilation.plugin('html-webpack-plugin-before-html-processing', (htmlData, callback) => {
      const tem = `<div id="app"></div>`
      htmlData.html = htmlData.html.replace(tem, `<div id="app">
        <div style="background: red; height: 300px; display: none" id="home">我是首页的骨架屏</div>
        <div style="background: green; height: 300px; display: none" id="default">我是默认的骨架屏</div>
        </div>
        <script>
          const hash = window.location.hash;
          if (hash === '#/home') {
              document.getElementById('home').style.display = 'block';
          } else {
              document.getElementById('default').style.display = 'block';
          }
        </script>`);
      callback(null, htmlData)
    })
  })
}
module.exports = MyPlugin;