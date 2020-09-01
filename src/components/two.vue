<template>
	<div class="two">
	    <button @getData="getData">我跟着one减{{message}}</button>
	</div>
	
</template>

<script>
	import bus from "../assets/js/eventBus.js"
	export default {
		
		data() {
			return {
				message:100
				
			}
		},
		
		methods: {
			getData(){
				bus.$on('sendByBus',data=>{
					console.log(data);
					this.message=data;
					console.log(this.message);
				})
			}		
			
			
		},
		created() {
			this.getData();
		},
		mounted(){
			
		}
		

	
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
</style>
