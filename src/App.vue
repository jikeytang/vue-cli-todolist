<template>
  <div id="app">
    <router-view></router-view>
    <copyright></copyright>
  </div>
</template>

<script>
import Copyright from '@/components/Copyright'

export default {
  name: 'app',
  components: {
    Copyright
  }
}
</script>
<style lang="scss">
#app {
  font-family: PingFang SC,Helvetica Neue,Hiragino Sans GB,Segoe UI,Microsoft YaHei,微软雅黑,sans-serif;
}
::-webkit-input-placeholder {
  font-style:normal !important;
}
</style>
