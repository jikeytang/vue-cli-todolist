import Vue from 'vue'
import Vuex from 'vuex'
import util from '@/util'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: util.fetch() || [],
    current: 'all'
  },
  getters: {
    todos (state) {
      return state.todos
    },
    current (state) {
      return state.current
    },
    all (state) {
      return state.todos
    },
    active (state) {
      return state.todos.filter(todo => {
        return !todo.completed
      })
    },
    completed (state) {
      return state.todos.filter(todo => {
        return todo.completed
      })
    }
  },
  mutations: {
    SET_CURRENT (state, value) {
      state.current = value
    },
    ADD_TODO (state, todo) {
      state.todos.push(todo)
    },
    DEL_TODO (state, todo) {
      state.todos.splice(state.todos.indexOf(todo), 1)
      util.save(state.todos)
    },
    REMOVE_COMPLETED (state, todo) {
      state.todos = todo
    },
    ALL_DONE (state, value) {
      state.todos.forEach(todo => {
        todo.completed = value
      })
    }
  },
  actions: {
    addTodo ({ commit }, todo) {
      commit('ADD_TODO', todo)
    },
    delTodo ({ commit }, todo) {
      commit('DEL_TODO', todo)
    },
    removeCompleted ({ commit, getters }) {
      commit('REMOVE_COMPLETED', getters.active)
    },
    allDone ({ commit }, value) {
      commit('ALL_DONE', value)
    }
  }
})
