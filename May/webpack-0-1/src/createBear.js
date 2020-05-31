import bear from './bear.png';
function createBear() {
  let img = new Image();
  img.src = bear;
  img.classList.add('bear');

  let app = document.querySelector('#app');
  app.appendChild(img);
}

export default createBear;