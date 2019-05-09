<template>
  <section class="main">
    <input id="toggle-all" type="checkbox" class="toggle-all" v-model="allDone">
    <label for="toggle-all">全选</label>
    <ul class="todo-list">
      <li class="todo" v-for="(item, index) in filteredTodos" :class="{ completed: item.completed, editing: item == editedTodo  }" :key="index">
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
export default {
  name: 'MainView',
  data () {
    return {
      editedTodo: null
    }
  },
  computed: {
    remaining () {
      return this.$store.state.todos.length
    },
    allDone: {
      set (value) {
        this.$store.dispatch('allDone', value)
      },
      get () {
        return this.remaining === 0
      }
    },
    filteredTodos () {
      return this.$store.getters[this.$store.state.current]
    }
  },
  methods: {
    handleDel (todo) {
      this.$store.dispatch('delTodo', todo)
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
