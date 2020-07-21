<template>
  <div class="page">
    <button v-if="isLogin" @click="toAdd" class="btn">添加</button>
    <button v-if="isLogin" @click="makeQR" class="btn">生成二维码</button>
    <template v-for="(item, index) in list">
      <div class="item" :key="index">
        <div @click="toDeatil(item._id)" class="title">{{item.title}}</div>
        <div v-if="isLogin" class="action">
          <div @click="deleteArt(item._id)" class="delete">删除</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import {
  getList,
  deleteItem
} from '../api/api'
import {
  mapState
} from 'vuex'
import QR from 'qrcode'
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
    },
    deleteArt (id) {
      // console.log(id)
      deleteItem(id).then((res) => {
        if (res.code === 0) {
          this.getAll()
        }
      })
    },
    makeQR () {
      // console.log(window.location)
      const href = window.location.href
      const opts = {
        type: 'image/png',
        width: 150,
        margin: 5
      }
      this.list.forEach((item) => {
        const url = href + 'detail/' + item._id
        console.log(url)
        QR.toDataURL(url, opts).then((url) => {
          let a = document.createElement('a')
          a.href = url
          a.download = item.title
          a.click()
          a.remove()
          a = null
        })
      })
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
  .item {
    margin: 15px 0;
    padding: 10px;
    box-sizing: border-box;
    box-shadow: 0 1px 6px #566;
    border-radius: 5px;
    background: rgba(65, 97, 112, 0.39);
    .title {
      font-size: 1.5rem;
    }
    .action {
      margin-top: 10px;
      color: crimson;
      cursor: pointer;
    }
  }
}
</style>
