<template>
  <div class="todoapp">
    <header-view></header-view>
    <main-view></main-view>
    <footer-view></footer-view>
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
      this.$store.commit('SET_CURRENT', to.name)
    },
    todos: {
      deep: true,
      handler: util.save
    }
  }
}
</script>
