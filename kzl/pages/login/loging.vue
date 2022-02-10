<template>
	<view class="warp">
		<input type="text" v-model="uname">
		<input type="text" v-model="upwd" focus>
		<button @click="btnlogin">登录</button>
		<button>微信登录</button>
		<button @click="userinfo">aaaaaaa</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 uname:"",
				 upwd:"",
			}
		},
		// onShow() {
		// 	if (this.vuex_token) {
		// 		this.getuserinfo();
		// 	} else {
		// 		this.$u.vuex('vuex_user', {});
		// 	}
		// 	//移除事件监听
		// 	uni.$off('uAvatarCropper', this.upload);
		// },
		onLoad(e) {
			// this.getuserinfo();
		},
		methods: {
			// btnlogin(){
			// 	var uname = this.uname;
			// 	var upwd = this.upwd;
			// 	uni.request({
			// 		url: "http://mz.kzl.cn/api/user/login",
			// 		method:"POST",
			// 		data:{"account":uname,"password":upwd},
			// 		success: res => {
			// 			console.log(res);
			// 		}
			// 	})
			// }
			
			async getuserinfo(){
				var res = await this.$ajax({ 
					url:"addons/cms/api.user/index"
				})
				console.log(res)
				console.log(res.data.data.userInfo.avatar)
				uni.setStorage({
				    key: 'avatar',
				    data: res.data.data.userInfo.avatar,
				    success: function (e) {
				        console.log(e);
				    }
				});
				uni.setStorage({
				    key: 'username',
				    data: res.data.data.userInfo.username,
				    success: function (e) {
				        console.log(e);
				    }
				});
				uni.setStorage({
				    key: 'nickname',
				    data: res.data.data.userInfo.nickname,
				    success: function (e) {
				        console.log(e);
				    }
				});
				
				uni.setStorage({
				    key: 'user_id',
				    data: res.data.data.userInfo.user_id,
				    success: function (e) {
				        console.log(e);
				    }
				});
			},
			
			async btnlogin(){
				var uname = this.uname;
				var upwd = this.upwd;
				if(uname == "" || upwd == ""){
					uni.showToast({
					    title:"用户名或密码不能为空",
						icon:"none"
					});
					return;
				}
				var res = await this.$ajax({ 
					url:"addons/cms/api.login/login",
					method:"post",
					data:{"account":uname,"password":upwd}
				})
				console.log(res);
				if(res.data.code == 1){
					uni.setStorage({
					    key: 'token',
					    data: res.data.data.token,
					    success: function (e) {
					        console.log(e);
					    }
					});
					this.getuserinfo();
					uni.showToast({
					    title:"登陆成功",
						icon:"none"
					});
					uni.navigateBack();
				}else{
					uni.showToast({
					    title:"用户名或密码有误",
						icon:"none"
					});
				}
			},
		
			
		}
	}
</script>

<style lang="scss">
page{
	background: #FFF9ED;
}
.warp{
	input{
		width: 750rpx;
		height: 80rpx;
		border: 1px solid #F0AD4E;
		margin: 20rpx 0;
	}
}

</style>
