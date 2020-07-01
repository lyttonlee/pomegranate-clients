<template>
  <div class="page">
    <h2>create</h2>
    <input v-model="title" type="text" placeholder="title">
    <Editor v-model="info" />
    <button @click="submit">Add Pomegrannate</button>
  </div>
</template>

<script>
import Editor from '../components/Editor'
import { addItem } from '../api/api'
export default {
  components: {
    Editor
  },
  data () {
    return {
      info: '',
      title: ''
    }
  },
  methods: {
    submit () {
      if (!this.title || !this.info) {
        return
      }
      const param = {
        title: this.title,
        content: this.info
      }
      addItem(param).then((res) => {
        console.log(res)
        const { code } = res
        if (code === 0) {
          this.$router.push('/')
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.page {
  padding: 10px;
}
</style>
