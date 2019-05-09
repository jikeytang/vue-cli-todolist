<template>
  <footer class="info">
    <p>双击单行进行编辑</p>
    <p>前端开发</p>
    <p><a href="http://todomvc.com">TodoMVC</a></p>
  </footer>
</template>
<script>
export default {
  name: 'Copyright'
}
</script>
<style lang="scss">
.info{
  display:flex;
  justify-content: center;
  >p{
    margin:0 10px;
  }
}
</style>
