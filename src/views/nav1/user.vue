<template>
<section>
  <!--工具条-->
  <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
    <el-form :inline="true" :model="filters">
      <el-form-item>
        <el-input v-model="filters.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="getUser">查询</el-button>
      </el-form-item>
    </el-form>
  </el-col>

  <!--列表-->
  <template>
			<el-table :data="users" highlight-current-row v-loading="loading" style="width: 100%;">
				<el-table-column type="index" width="60">
				</el-table-column>
				<el-table-column prop="name" label="姓名" width="120" sortable>
				</el-table-column>
				<el-table-column prop="sex" label="性别" width="100" :formatter="formatSex" sortable>
				</el-table-column>
				<el-table-column prop="age" label="年龄" width="100" sortable>
				</el-table-column>
				<el-table-column prop="birth" label="生日" width="120" sortable>
				</el-table-column>
				<el-table-column prop="addr" label="地址" min-width="180" sortable>
				</el-table-column>
			</el-table>
		</template>

</section>
</template>
<script>
import {
  getUserList
} from '../../api/api'
// import NProgress from 'nprogress'
export default {
  data () {
    return {
      tableData: [
        {
          index: '1',
          birth: '2016-05-02',
          name: '王小虎',
          sex: 1,
          age: '14',
          addr: '上海市普陀区金沙江路 1518 弄'
        }, {
          birth: '2016-05-04',
          name: '王小虎',
          sex: 0,
          age: '24',
          addr: '上海市普陀区金沙江路 1517 弄'
        }, {
          birth: '2016-05-01',
          name: '王小虎',
          sex: 1,
          age: '34',
          addr: '上海市普陀区金沙江路 1519 弄'
        }, {
          birth: '2016-05-03',
          name: '王小虎',
          sex: 0,
          age: '64',
          addr: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      filters: {
        name: ''
      },
      loading: false,
      users: []
    }
  },
  methods: {
    // 性别显示转换
    formatSex: (row, column) => {
      return row.sex === 1 ? '男' : row.sex === 0 ? '女' : '未知'
    },
    // 获取用户列表
    getUser: function () {
      let para = {
        name: this.filters.name
      }
      this.loading = true
      // NProgress.start()
      getUserList(para).then((res) => {
        this.users = res.data.users
        this.loading = false
        // NProgress.done()
      })
    }
  },
  mounted () {
    this.loading = true
    setTimeout(() => {
      this.users = this.tableData
      this.loading = false
    }, 1000)
  }
}
</script>

<style scoped>

</style>
