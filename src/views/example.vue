<template>
  <div class="container">
    <div class="md-example-child md-example-child-detail-item md-example-child-detail-item-0">
      <md-field>
        <md-detail-item title="承保公司" content="众安" bold />
        <md-detail-item title="投保人" content="张三" />
        <md-detail-item title="被保人" content="李四" />
        <md-detail-item title="保险费用" content="0.1元/日" />
        <md-detail-item title="保障日期" content="2018/08/08 ~ 2019/08/08" />
        <md-detail-item title="保单号" content="123456789" />
        <md-detail-item title="保单协议">
          <a href="#" style="color:#5878b4;text-decoration:none;">查看</a>
        </md-detail-item>
      </md-field>
    </div>
  </div>
</template>

<script>
import { Field, DetailItem } from 'mand-mobile'

export default {
  name: 'Home',

  components: {
    [Field.name]: Field,
    [DetailItem.name]: DetailItem
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
