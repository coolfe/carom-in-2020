import img from './0.jpg';
import './main.less';

export default {
  template: `<div>
    <img :src="imgSrc" alt=""/>
    <span>红色文本</span>
  </div>`,
  data() {
    return {
      imgSrc: img
    }
  }
}