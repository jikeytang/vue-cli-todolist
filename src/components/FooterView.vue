<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{todos.length}}</strong> 项</span>
    <ul class="filters">
      <li>
        <a href="#/all" :class="showCurrent('all')">全部</a>
      </li>
      <li>
        <a href="#/active" :class="showCurrent('active')">进行中</a>
      </li>
      <li>
        <a href="#/completed" :class="showCurrent('completed')">已完成</a>
      </li>
    </ul>
    <button class="clear-completed" @click="removeCompleted">清除</button>
  </footer>
</template>
<script>
export default {
  name: 'FooterView',
  props: {
    todos: {
      type: Array
    },
    current: {
      type: String
    }
  },
  methods: {
    removeCompleted () {
      this.$emit('remove-completed')
    },
    showCurrent (current) {
      return this.current === current ? 'selected' : ''
    }
  }
}
</script>
<style lang="scss"></style>