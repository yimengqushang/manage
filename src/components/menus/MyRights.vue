<template>
  <div>
    <!-- 标题 -->
    <h4 class="text-center">权限管理</h4>

    <!-- 用户列表 -->
    <table class="table table-bordered table-striped table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>地址</th>
          <th>邮箱</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in userlist" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.email }}</td>
          <td>
            <a href="#" @click.prevent="gotoDetail(item.id)">详情</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getUserInfo } from '@/api/userAPI.js';

export default {
  name: 'MyUser',
  data() {
    return {
      userlist: []
    }
  },
  methods: {
    gotoDetail(id) {
      console.log('ok');
      this.$router.push('/home/userinfo/' + id)
    },
    async getUser() {
      const { data: res } = await getUserInfo()
      this.userlist = res.data
    }
  },
  created() {
    this.getUser()
  }
}
</script>

<style lang="less" scoped></style>
