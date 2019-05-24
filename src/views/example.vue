<template>
  <div class="container">
    <van-cell value="内容" icon="shop-o" is-link>
      <template slot="title">
        <span class="custom-text">单元格</span>
        <van-tag type="danger">标签</van-tag>
      </template>
    </van-cell>
    <van-cell title="单元格" icon="location-o" is-link />
    <van-cell title="单元格">
      <van-icon slot="right-icon" name="search" class="custom-icon" />
    </van-cell>
    <van-cell value="内容" icon="shop-o" is-link>
      <template slot="title">
        <span class="custom-text">单元格</span>
        <van-tag type="danger">标签</van-tag>
      </template>
    </van-cell>
    <van-cell title="单元格" icon="location-o" is-link />
    <van-cell title="单元格">
      <van-icon slot="right-icon" name="search" class="custom-icon" />
    </van-cell>
  </div>
</template>

<script>
import { Tag, Cell, Icon, CellGroup } from 'vant'

export default {
  name: 'Home',

  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Tag.name]: Tag,
    [Icon.name]: Icon
  },

  data () {
    return {
      open: false
    }
  }
}
</script>

<style lang="scss">
.info{
  display:none;
}
</style>
