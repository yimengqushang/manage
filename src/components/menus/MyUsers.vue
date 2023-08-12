<template>
  <div class="content">
    <h4 class="text-center">用户管理</h4>
    <!-- 卡片区域 -->
    <div class="card">
      <div class="card-header">
        添加用户
      </div>
      <div class="card-body">
        <!-- 添加品牌的表单区域 -->
        <form @submit.prevent="add">
          <div class="form-row align-items-center">
            <div class="col-auto">
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">用户名称</div>
                </div>
                <input type="text" class="form-control" placeholder="请输入姓名" v-model.trim="brand">
              </div>
            </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-primary mb-2">添加</button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <!-- 表格区域 -->
    <table class="table table-bordered table-hover table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">姓名</th>
          <th scope="col">状态</th>
          <th scope="col">创建时间</th>
          <th scope="col">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in Carlist" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.brandName }}</td>
          <td>
            <div class="custom-control custom-switch">
              <input type="checkbox" class="custom-control-input" :id="'cd' + item.id" v-model="item.status">
              <label class="custom-control-label" :for="'cd' + item.id" v-if="item.status">已启用</label>
              <label class="custom-control-label" :for="'cd' + item.id" v-else>已禁用</label>
            </div>
          </td>
          <td>{{ item.time }}</td>
          <td>
            <a href="javascript:;" @click="remove(item.id)">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'MyRights',
  data() {
    return {
      brand: '',
      nextId: 11,
      Carlist: [{
        id: 1,
        brandName: '刘一',
        status: true,
        time: new Date()
      }, {
        id: 2,
        brandName: '陈二',
        status: false,
        time: new Date()
      }, {
        id: 3,
        brandName: '张三',
        status: true,
        time: new Date()
      }, {
        id: 4,
        brandName: '李四',
        status: false,
        time: new Date()
      }, {
        id: 5,
        brandName: '王五',
        status: true,
        time: new Date()
      }, {
        id: 6,
        brandName: '赵六',
        status: false,
        time: new Date()
      }, {
        id: 7,
        brandName: '孙七',
        status: true,
        time: new Date()
      }, {
        id: 8,
        brandName: '周八',
        status: true,
        time: new Date()
      }, {
        id: 9,
        brandName: '吴九',
        status: false,
        time: new Date()
      }, {
        id: 10,
        brandName: '郑十',
        status: false,
        time: new Date()
      }],
    }
  },
  methods: {
    add() {
      // 如果判断到 brand 的值为空字符串，则 return 出去
      if (this.brand === '') return alert('必须填写姓名！')
      let obj = {
        id: this.nextId,
        brandName: this.brand,
        status: true,
        time: new Date()
      }
      this.Carlist.push(obj)
      this.brand = ''
      this.nextId++
    },
    remove(id) {
      this.Carlist = this.Carlist.filter(item => item.id !== id)
    }
  }
}
</script>

<style lang="less" scoped></style>