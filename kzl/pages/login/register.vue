<template>
	<view>
		
		<input type="text" v-model="phone">
		<button @click="getcode">验证码</button>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				phone:""
			}
		},
		
		methods:{
			async getcode(){
				var res = await this.$ajax({
					url: 'addons/cms/api.sms/send',
					method: "post",
					data:{ "event": "register", "mobile":this.phone }
				})
				console.log(res);
			}
		}
	}
	
</script>

<style lang="scss">
	input{
		height: 100rpx;
		border:1px solid red;
	}
</style>
