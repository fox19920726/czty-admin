<template>
  <div>
    <router-link to="logout" replace><el-button>跳转</el-button></router-link>
    <img src="./../images/logo.png" />
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <i class="iconfont iconpingdiguot"></i>
    <i class="el-icon-edit"></i>
  </div>
</template>

<script>
import { login, getAllOverview } from '../api/api'
import {
  setToken,
  setRoleId
} from '../utils/auth'

export default {
  name: 'Login',
  mounted() {
    login('', '').then((response) => {
      const data = response.data.data

      this.$store.commit('SET_TOKEN', {
        token: data.token
      })
      setToken(data.token);
      setRoleId(data.roleId);
    })
    getAllOverview()
  },
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.aaa{
  color:red;
}
</style>
