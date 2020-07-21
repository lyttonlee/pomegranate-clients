<template>
  <div class="page">
    <div class="head">
      <!-- {{article.title}} -->
      <div class="title">会理县农产品质量安全追溯系统</div>
      <div class="info">
        <div class="ti">核验成功</div>
        <div class="msg">您所购买的石榴为正品会理石榴</div>
      </div>
      <div class="statis">
        <div class="name">核验次数</div>
        <div class="val">{{article.views || 0}}</div>
      </div>
      <div class="statis">
        <div class="name">最近一次核验时间</div>
        <div class="val">{{moment(article.lastViewTime).format('YYYY-MM-DD HH:mm:ss')}}</div>
      </div>
    </div>
    <div class="head">
      <div class="title text-left">溯源信息</div>
      <div class="statis">
        <div class="name">产品名称</div>
        <div class="val">会理软籽石榴</div>
      </div>
      <div class="statis">
        <div class="name">产地</div>
        <div class="val">{{article.title}}</div>
      </div>
    </div>
    <div v-html="article.content" class="content"></div>
    <div class="total">会理县农产品质量安全追溯系统</div>
  </div>
</template>
<script>
import {
  getItem
} from '../api/api'
import moment from 'moment'
export default {
  data () {
    return {
      article: ''
    }
  },
  methods: {
    moment,
    init () {
      const id = this.$route.params.id
      getItem(id).then((res) => {
        const { code, result } = res
        if (code === 0) {
          // console.log(result)
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
.page {
  .head {
    .text-left {
      text-align: left;
      font-size: 1.2rem !important;
      padding-left: 10px !important;
      box-sizing: border-box;
    }
    .title {
      background: #bd0b0b;
      color: aliceblue;
      padding: 8px 0;
      font-size: 1.3rem;
      font-weight: bold;
    }
    .info {
      margin: 10px 0;
      border-bottom: .5px solid #ddd;
      .ti {
        font-size: 1.2rem;
        color: red;
      }
      .msg {
        margin: 10px 0;
        font-size: 15px;
      }
    }
    .statis {
      text-align: left;
      border-bottom: .5px solid #ddd;
      margin: 8px 0;
      padding-left: 10px;
      .name {
        font-size: 15px;
        color: #111;
      }
      .val {
        color: #666;
        font-size: 13px;
        margin: 8px 0;
      }
    }
  }
  .content {
    margin-bottom: 20px;
  }
  .total {
    border-top: .5px solid #ddd;
    padding: 15px 0;
    color: #666;
    font-size: 14px;
    margin: 8px 0;
  }
}
</style>
