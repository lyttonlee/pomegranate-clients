<template>
  <div class="page">
    <button @click="toAdd" class="btn">添加</button>
    <template v-for="(item, index) in list">
      <div @click="toDeatil(item._id)" class="item" :key="index">
        <div class="title">{{item.title}}</div>
        <div v-html="item.content"></div>
      </div>
    </template>
  </div>
</template>

<script>
import {
  getList
} from '../api/api'
import {
  mapState
} from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      list: []
    }
  },
  computed: {
    ...mapState(['isLogin'])
  },
  methods: {
    getAll () {
      getList().then((res) => {
        const { code, result } = res
        if (code === 0) {
          this.list = result
        }
      })
    },
    toAdd () {
      this.$router.push('/create')
    },
    toDeatil (id) {
      this.$router.push(`/detail/${id}`)
    }
  },
  created () {
    this.getAll()
  }
}
</script>

<style lang="less" scoped>
.page {
  padding: 10px;
  text-align: left;
  .btn {
    padding: 5px;
  }
}
</style>
