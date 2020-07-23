<template>
  <div class="upload">
    <!-- <div @click="upload" class="button">upload</div> -->
    <input class="upload-btn" type="file" @change="upload" multiple >
    <div class="content">
      <template v-for="(val, key, index) in urls">
        <img class="img" :src="val" alt="key" :key="index" srcset="">
      </template>
    </div>
  </div>
</template>
<script>
import { getUploadToken } from '../api/api'
import * as qiniu from 'qiniu-js'
import hash from 'hash.js'
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Object
    }
  },
  data () {
    return {
      urls: {}
    }
  },
  methods: {
    upload (ev) {
      // console.log(ev)
      getUploadToken().then((res) => {
        const { code, result, msg } = res
        if (code === 0) {
          const token = result
          // console.log(token)
          // console.log(qiniu)
          const files = ev.target.files
          if (files.length > 0) {
            const doUpload = (file, index) => {
              const _this = this
              qiniu.compressImage(file, {
                quality: 0.9,
                noCompressIfLarger: true,
                maxWidth: 750
              }).then((data) => {
                // console.log(data)
                const type = file.name.split('.').pop()
                const randomHash = hash.sha256().update(file.name).digest('hex')
                // console.log(randomHash)
                const key = 'pomegranate' + new Date().valueOf() + randomHash + '.' + type
                const observable = qiniu.upload(data.dist, key, token)
                observable.subscribe({
                  complete (res) {
                    // console.log(res)
                    const url = 'http://cdn.huili.cool/' + res.key + '@scaleWidth750px'
                    _this.urls[index] = url
                    _this.urls = { ..._this.urls }
                    // console.log(_this.urls)
                    _this.$emit('change', _this.urls)
                  }
                })
              })
            }
            for (let i = 0; i < files.length; i++) {
              doUpload(files[i], i)
            }
            // Promise.all()
          }
        } else {
          console.log(msg)
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.upload {
  width: 100%;
  max-width: 700px;
  margin: 10px auto;
  position: relative;
  z-index: 0;
  .content {
    max-height: 80vh;
    overflow-y: auto;
    .img {
      width: 100%;
    }
  }
}
</style>
