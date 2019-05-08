<template>
  <div class="todoapp">
    <header-view @add-todo="addTodo"></header-view>
    <main-view :todos="filteredTodos" @del-todo="delTodo" @all-done="allDone"></main-view>
    <footer-view :todos="todos" :current="current" @remove-completed="removeCompleted"></footer-view>
  </div>
</template>
<script>
import HeaderView from '@/components/HeaderView'
import MainView from '@/components/MainView'
import FooterView from '@/components/FooterView'
import util from '@/util'

export default {
  name: 'Home',
  components: {
    HeaderView,
    MainView,
    FooterView
  },
  data () {
    return {
      todos: util.fetch(),
      current: 'all'
    }
  },
  watch: {
    '$route' (to) {
      this.current = to.name
    },
    todos: {
      deep: true,
      handler: util.save
    }
  },
  computed: {
    filteredTodos () {
      return util[this.current](this.todos)
    }
  },
  methods: {
    allDone (value) {
      this.todos.forEach(todo => {
        todo.completed = value
      })
    },
    addTodo (newTodo) {
      this.todos.push(newTodo)
    },
    delTodo (todo) {
      this.todos.splice(this.todos.indexOf(todo), 1)
    },
    removeCompleted () {
      this.todos = util.active(this.todos)
    }
  }
}
</script>
