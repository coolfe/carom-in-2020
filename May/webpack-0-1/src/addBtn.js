import './addBtn.less';
const btn = document.createElement('button');
btn.innerHTML = '新增';
document.body.appendChild(btn);

btn.onclick = function () {
  const div = document.createElement('div');
  div.innerHTML = '111';
  document.body.appendChild(div);
}


const arr = [
  new Promise(() => { }),
  new Promise(() => { }),
]

arr.map(item => {
  console.log(item);
})