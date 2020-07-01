<template>
  <div class="page">
    <div class="con">
      <h1>Regin</h1>

      <input v-model="name" class="item" type="text" placeholder="name">

      <input v-model="password" class="item" type="text" placeholder="password">

      <button @click="submit" class="item">submit</button>

      <div v-if="hasError" class="error">{{message}}</div>
    </div>
  </div>
</template>
<script>
import {
  regin
} from '../api/api'
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
      const res = await regin(param)
      // console.log(res)
      const { code, msg } = res
      if (code === 0) {
        // localStorage.setItem('token', result)
        this.hasError = true
        this.message = '注册成功'
        this.$router.push('/login')
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
