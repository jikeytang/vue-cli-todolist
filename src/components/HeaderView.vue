<template>
  <header class="header">
    <h1>todos</h1>
    <Input class="i-new-todo" v-model="newTodo" placeholder="请输入待办事项" clearable  @keyup.enter="addTodo" />
    <!--<input class="new-todo" autofocus autocomplete="off" placeholder="请输入待办事项" v-model="newTodo" @keyup.enter="addTodo">-->
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

      if(!value) {
        return
      }

      this.$emit('add-todo', { title: value, completed: false })
      this.newTodo = ''
    }
  }
}
</script>
<style lang="scss">
.i-new-todo{
  padding:0 0 0 60px;
  .ivu-input{
    height:60px;
    line-height:60px;
    border:0;
  }
  .ivu-input-icon{
    line-height:60px;
    font-size: 24px;
    color: #dcdee2;
  }
}
</style>