<template>
	<div class="">
	    <table class="table" border="1px" cellpadding="0" cellspacing="0">
	        <thead class="datathead">
	        <tr>
	            <th class="text-center">楼盘</th>
	            <th class="text-center">咨询师</th>
	            <th class="text-center">评论时间</th>
				<th class="text-center">是否</th>
	        </tr>
	        </thead>
	        <tbody>
				<tr v-for="(item,index) in tableData" :key="index" v-on:click="hideDiv(item)">
					<td>{{item.roleName}}</td>
					<td>{{item.roleType}}</td>
					<td>{{item.roleDesc}}</td>
					<td>{{item.state | formatter}}</td>
				</tr>
	        </tbody>
	    </table>
		
		<one></one>
		<two></two>
		<three :msg="msg" @decrease="decrease"></three>
		<four :msg="msg" @add="add"></four>
	</div>
</template>

<script>
	import treeTable from "./treeTable"
	import one from "./one"
	import two from "./two"
	import three from "./three"
	import four from "./four"
	export default {
		components:{
			one,
			two,
			three,
			four
		},
		data() {
			return {
				input: '',
				drawer: false,
				slePaymenttime1: '',
				slePaymenttime2: '',
				msg:'',
				tableData: [
					{
					roleName: '投诉',
					roleType: '普通',
					roleDesc: '投诉一下',
					state: '1'
				}, {
					roleName: '医助',
					roleType: '普通',
					roleDesc: '只可查看工单',
					state: '1'
				}, {
					roleName: '质检',
					roleType: '普通',
					roleDesc: '质检描述。。',
					state: '0'
				}, {
					roleName: '技术',
					roleType: '普通',
					roleDesc: '超管，哈哈哈哈',
					state: '0'
				}],
				multipleSelection: [],
				dialogAddRole: false,
				dialogUpdateRole: false,
				dialogDelRole: false,
				
				checkded01:[],
				sRoleName: '',
				sRoleType: '',
				sRoleDesc: ''
				
			}
		},
		filters: {
			formatter(val){
				if (val == 1) {
					return val = '是';
				} else {
					return val = '否';
				}
			},
		},
		
		methods: {
			hideDiv (item){
				console.log(item);
			},
			//父组件监听到three子组件要传给four子组件的值
			decrease(data){
				console.log(data);//three传回来的值
				this.msg = data; //将它复制给msg,然后再传给four
			},
			
			//父组件监听到four子组件要传给three子组件的值
			add(data){
				console.log(data);
				this.msg = data; 
			}
			
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table{border: 1px solid #eee;}
</style>
