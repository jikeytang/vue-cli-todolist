<template>
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo" autofocus autocomplete="off" placeholder="请输入待办事项" v-model="newTodo" @keyup.enter="addTodo">
  </header>
</template>
<script>
export default {
  name: 'HeaderView',
  data () {
    return {
      newTodo: ''
    }
  },
  methods: {
    addTodo () {
      var value = this.newTodo && this.newTodo.trim()

      if (!value) {
        return
      }

      this.$store.dispatch('addTodo', { title: value, completed: false })
      this.newTodo = ''
    }
  }
}
</script>
<style lang="scss"></style>
