<template>
  <div>
    <h4 class="text-center">商品管理</h4>

    <!-- 商品列表 -->
    <table class="table table-bordered table-striped table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>商品名称</th>
          <th>商品价格</th>
          <th>商品信息</th>
          <th>商品图片信息</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in shopList" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td class="red">&yen;{{ Number(item.price).toFixed(2) }}</td>
          <td>{{ item.introduce }}</td>
          <td>{{ item.picture }}</td>
          <td>
            <a href="#" @click.prevent="">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getShopInfo } from '@/api/shopAPI.js';

export default {
  name: 'MyGoods',
  data() {
    return {
      shopList: []
    }
  },
  methods: {
    //    事件name
    async getShop() {
      const { data: res } = await getShopInfo()
      this.shopList = res.data
    }
  },
  //   生命周期函数created中调用 事件name 
  created() {
    this.getShop()
  }
}
</script>

<style lang="less" scoped>
.red {
  color: red;
}
</style>