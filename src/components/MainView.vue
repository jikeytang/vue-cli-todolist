<template>
  <section class="main">
    <input id="toggle-all" type="checkbox" class="toggle-all" v-model="allDone">
    <label for="toggle-all">全选</label>
    <ul class="todo-list">
      <li class="todo" v-for="(item, index) in todos" :class="{ completed: item.completed, editing: item == editedTodo  }" :key="index">
        <div class="view">
          <input type="checkbox" class="toggle" v-model="item.completed">
          <label @dblclick="editTodo(item)">{{ item.title }}</label>
          <button class="destroy" @click="handleDel(item)"></button>
        </div>
        <input type="text" class="edit" v-model="item.title" @blur="doneEdit(item)" @keyup.enter="doneEdit(item)" @keyup.esc="cancelEdit(item)">
      </li>
    </ul>
  </section>
</template>
<script>
import util from '@/util'

export default {
  name: 'MainView',
  props: {
    todos: {
      type: Array
    }
  },
  data () {
    return {
      editedTodo: null
    }
  },
  computed: {
    remaining () {
      return util.active(this.todos).length
    },
    allDone: {
      set (value) {
        this.$emit('all-done', value)
      },
      get () {
        return this.remaining === 0
      }
    }
  },
  methods: {
    handleDel (item) {
      this.$emit('del-todo', item)
    },
    editTodo (item) {
      this.beforeEditCache = item.title
      this.editedTodo = item
    },
    doneEdit (item) {
      this.editedTodo = null
      item.title = item.title.trim()
      if (!item.title) {
        this.handleDel(item)
      }
    },
    cancelEdit (item) {
      this.editedTodo = null
      item.title = this.beforeEditCache
    }
  }
}
</script>
<style lang="scss">
.main{
  min-height:45vh;
}
</style>