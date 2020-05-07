<template>
     <div>
       <button @click="toBack">返回</button>
       <p>{{msg}}</p>
     </div>
</template>

<script>
export default {
  name: 'detail',
  created() {
    console.log(this.$route.query)
    this.msg = `${this.$route.query.categoryId} 文章详情`
  },
  data () {
    return {
      msg: 'detail'
    }
  },
  methods: {
    toBack() {
      this.$router.go(-1)
    }
  }
}
</script>

