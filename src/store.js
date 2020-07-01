import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogin: localStorage.getItem('token') || false
  },
  mutations: {
    setIsLogin: (state, payload) => {
      state.isLogin = payload
    }
  },
  actions: {}
})

export default store
