<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{todos.length}}</strong> 项</span>
    <ul class="filters">
      <li>
        <a href="#/all" :class="{ selected: current === 'all' }">全部</a>
      </li>
      <li>
        <a href="#/active" :class="{ selected: current === 'active' }">进行中</a>
      </li>
      <li>
        <a href="#/completed" :class="{ selected: current === 'completed' }">已完成</a>
      </li>
    </ul>
    <button class="clear-completed" @click="removeCompleted">清除</button>
  </footer>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'FooterView',
  computed: {
    ...mapGetters([
      'todos',
      'current'
    ])
  },
  methods: {
    removeCompleted () {
      this.$store.dispatch('removeCompleted')
    }
  }
}
</script>
<style lang="scss"></style>
