<template>
  <el-table
    :data="tableData"
    height="300"
    border
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
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    },
	
	methods:{
		
	},
	created(){
		this.$axios({
			method:'post',
			url: "http://172.16.66.212:8888/api/private/v1/login",
			// data:this.qs.stringify({    //这里是发送给后台的数据
			// 	  userId:this.userId,
			// 	  token:this.token,
			// })
			data: {
				username: 'admin',
				password: '123456'
			},
		}).then((response) =>{          //这里使用了ES6的语法
			console.log(response)       //请求成功返回的数据
		}).catch((error) =>{
			console.log(error)       //请求失败返回的数据
		})
	}
	
	
	
  }
</script>