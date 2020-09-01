<template>
	<div class="one">
	    <button @click="sendToMessage">点我减{{message}}</button>
	</div>
	
</template>

<script>
	import bus from "../assets/js/eventBus.js"
	export default {
		
		data() {
			return {
				message:100,
				obj:{
					name:'bob',
					age:33,
					sex:1
				}
				
			}
		},
		
		methods: {
			sendToMessage(){
				--this.message;// 点击减1 然后传给two
				bus.$emit('sendByBus',this.message)
			}		
			
			
		  }

	
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
</style>
