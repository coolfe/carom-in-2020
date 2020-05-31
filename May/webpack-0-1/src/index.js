import Header from './header.js';
import { Content } from './content.js';
import bear from './bear.png';
import style from './index.less'; // css-loader module 为 true 才能启用

import createBear from './createBear.js';
import font from './font.js';
import addBtn from './addBtn.js';

import '@babel/polyfill';



let img = new Image();
img.src = bear;
img.classList.add(style.bear); //  要不就是 undefined

let app = document.querySelector('#app');
app.appendChild(img);

new Header();
new Content();

createBear();
font();
addBtn();