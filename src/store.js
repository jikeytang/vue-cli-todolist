import Vue from 'vue'
import Vuex from 'vuex'
import util from '@/util'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: util.fetch(),
    current: 'all'
  },
  mutations: {

  },
  actions: {

  }
})
