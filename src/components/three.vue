<template>
	<div class="three">
	    <button @click="threeHandle">点我喊{{msgThree}}</button>
	</div>
	
</template>

<script>
	import bus from "../assets/js/eventBus.js"
	export default {
		props:['msg'],
		data() {
			return {
				message:0,
				obj:{
					name:'bob',
					age:33,
					sex:1
				}
				
			}
		},
		computed:{
			msgThree (){
				var _this = this;
				if (this.msg) {//是否给值？
					_this.message = this.msg
				} else {
					_this.message = 100
				}
				return this.message
			}
		},
		
		methods: {
			//要传值给four
			//先要传值给父组件
			threeHandle(){
				--this.message;// 点击减1 然后传
				bus.$emit('decrease',this.message);
				console.log(this.message);
			}		
			
			
		  }

	
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
</style>
