<template>
  <div class="page">
    <h2>detail</h2>
    <!-- <div>{{$router}}</div> -->
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
