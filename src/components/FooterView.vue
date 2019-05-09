<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{todos.length}}</strong> 项</span>
    <ul class="filters">
      <li>
        <a href="#/all" :class="{ selected: this.current === 'all' }">全部</a>
      </li>
      <li>
        <a href="#/active" :class="{ selected: this.current === 'active' }">进行中</a>
      </li>
      <li>
        <a href="#/completed" :class="{ selected: this.current === 'completed' }">已完成</a>
      </li>
    </ul>
    <el-button class="el-clear-completed" @click="removeCompleted" size="mini" type="primary">清除</el-button>
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
    }
  }
}
</script>
<style lang="scss">
.el-clear-completed{
  float: right;
  position: relative;
  line-height: 7px;
  text-decoration: none;
  cursor: pointer;
}
</style>
