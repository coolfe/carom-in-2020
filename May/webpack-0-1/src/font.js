import './iconfont.less';
function font() {
  let app = document.querySelector('#app');
  let font = document.createElement('div');
  font.innerHTML = '<span class="icon iconfont">&#xe60d;</span>';
  app.appendChild(font);
}

export default font;