<template>
     <div>
       <ul>
         <li v-for="item in data" :key="item.id" @click="toDetail(item.id)">
           {{item.title}}
         </li>
       </ul>
     </div>
</template>

<script>
export default {
  name: 'Title',
  data () {
    return {
      msg: 'list',
      data: [{
        title: '第1篇文章标题',
        id: 1,
        content: '第1篇文章'
      },{
        title: '第2篇文章标题',
        id: 2,
        content: '第2篇文章'
      }]
    }
  },
  methods: {
    toDetail(id) {
      this.$router.push({
        name: 'detail',
        query: {
          categoryId: id
        }
      })
    }
  }
}
</script>

