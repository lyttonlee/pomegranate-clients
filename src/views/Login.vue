<template>
  <div class="page">
    <div class="con">
      <h1>login</h1>

      <input v-model="name" class="item" type="text" placeholder="name">

      <input v-model="password" class="item" type="password" placeholder="password">

      <button @click="submit" class="item">submit</button>

      <div v-if="hasError" class="error">{{message}}</div>
    </div>
  </div>
</template>
<script>
import {
  login
} from '../api/api'
import {
  mapMutations
} from 'vuex'
export default {
  // ..
  data () {
    return {
      hasError: false,
      message: '',
      name: '',
      password: ''
    }
  },
  methods: {
    ...mapMutations(['setIsLogin']),
    async submit () {
      if (!this.name || !this.password) {
        this.hasError = true
        this.message = '用户名或密码是必须的！'
        return
      } else {
        this.hasError = false
        this.message = ''
      }
      const param = {
        name: this.name,
        password: this.password
      }
      // login(param).then((res) => {
      //   console.log(res)
      // })
      const res = await login(param)
      // console.log(res)
      const { code, result, msg } = res
      if (code === 0) {
        localStorage.setItem('token', result)
        this.setIsLogin(true)
        this.$router.push('/')
      } else {
        this.hasError = true
        this.message = msg
      }
    }
  }
}
</script>
<style lang="less" scoped>
.page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .con {
    // ..
    width: 100%;
    min-width: 200px;
    max-width: 600px;
    // background: rgb(77, 85, 70);
    .item {
      display: block;
      margin: 20px auto;
      width: 60%;
    }
    .error {
      color: crimson;
    }
  }
}
</style>
