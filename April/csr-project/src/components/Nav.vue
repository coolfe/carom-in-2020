<template>
  <div class="grid">
    <ul>
        <li v-for="(module,index) in modules" :key="index">
          <router-link :to="module.route">
            <span :class="module.className"></span>
            <div>{{module.title}}</div>
          </router-link>
        </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'mnav',
  data() {
    return {
      modules:[{
        title:'新闻资讯',className:'back-news',route:{name:'newsList'}
       },{
        title:'图文分享',className:'back-pic',route:{name:'detail',query:{categoryId:0} }
       },{
        title:'商品展示',className:'back-goods',route:{name:'home'}
       },{
        title:'留言反馈',className:'back-feed',route:{name:'home'}
       },{
        title:'搜索咨询',className:'back-search',route:{name:'home'}
       },{
        title:'联系我们',className:'back-callme',route:{name:'home'}
       }]
    }
  }
}
</script>
<style scoped>
ul {
  margin:0;
  padding: 0;
  overflow: hidden;

} 
li{
  list-style: none;
  display: inline-block;
  width: 33.333%;
  text-align: center;
}   
.mint-swipe {
  width: 100%;
  height:200px;
}
.mint-swipe img {
  width: 100%;
}

/*九宫格样式*/
   /* img {
        width: 100%;
    }*/
.grid span {
    display: inline-block;
    margin: 10px 0;
    width: 50px;
    height: 50px;
    background-repeat: round;
}

.back-pic {
    background-image: url(../../static/img/picShare.png);
}
.back-goods {
    background-image: url(../../static/img/goodsShow.png);
}
.back-feed {
    background-image: url(../../static/img/feedback.png);
}
.back-search {
    background-image: url(../../static/img/search.png);
}
.back-callme {
    background-image: url(../../static/img/callme.png);
}
.back-news {
    background-image: url(../../static/img/news.png);
}
</style>