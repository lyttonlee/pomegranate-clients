<template>
  <div class="page">
    <div class="title">
      {{article.title}}
    </div>
    <div v-html="article.content" class="content"></div>
    <div class="total"></div>
  </div>
</template>
<script>
import {
  getItem
} from '../api/api'
export default {
  data () {
    return {
      article: ''
    }
  },
  methods: {
    init () {
      const id = this.$route.params.id
      getItem(id).then((res) => {
        const { code, result } = res
        if (code === 0) {
          console.log(result)
          this.article = result
        }
      })
    }
  },
  created () {
    this.init()
  }
}
</script>
<style lang="less" scoped>

</style>
