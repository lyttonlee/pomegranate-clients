<template>
  <div class="page">
    <h2>create</h2>
    <input type="text" v-model="_id" placeholder="_id">
    <input v-model="title" type="text" placeholder="title">
    <!-- <Editor v-model="info" /> -->
    <Upload v-model="info" />
    <button @click="submit">Add Pomegrannate</button>
  </div>
</template>

<script>
// import Editor from '../components/Editor'
import Upload from '../components/Uploads'
import { addItem } from '../api/api'
export default {
  components: {
    // Editor,
    Upload
  },
  data () {
    return {
      info: {},
      title: '',
      _id: '',
    }
  },
  methods: {
    submit () {
      // console.log(this.info)
      if (!this.title || !this.info) {
        return
      }
      const content = Object.values(this.info).map((val) => {
        return `<img src="${val}" style="width:100%" >`
      }).join('')
      // console.log(content)
      const param = {
        title: this.title,
        content,
        _id: this._id
      }
      addItem(param).then((res) => {
        // console.log(res)
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
