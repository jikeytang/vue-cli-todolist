<template>
  <header class="header">
    <h1>todos</h1>
    <el-input class="new-todo" v-model="newTodo" placeholder="请输入待办事项" @keyup.enter="addTodo" clearable></el-input>
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

      this.$emit('add-todo', { title: value, completed: false })
      this.newTodo = ''
    }
  }
}
</script>
<style lang="scss">
.new-todo{
  padding:16px 0 16px 60px;
  input{
    border:0;
  }
}
</style>
