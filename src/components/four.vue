<template>
	<div class="four">
	    <button @click="handleFour">点我就加{{messfour}}</button>
	</div>
	
</template>

<script>
	import bus from "../assets/js/eventBus.js"
	export default {
		props:['msg'], //父组件帮three 传过来的值
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
			messfour (){
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
			sendToMessage(){
				--this.message;// 点击减1 然后传给two
				bus.$emit('sendByBus',this.message)
			},
			
			//要传值给three
			//先要传值给父组件
			handleFour(){
				++this.message;// 点击减1 然后传给two
				bus.$emit('add',this.message);
				console.log(this.msg);
			}		
			
						
		}
			
					
			
			
		

	
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
</style>
