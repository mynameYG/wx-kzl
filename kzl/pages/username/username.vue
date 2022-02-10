<template>
	<view class="username">
		<view class="username_box">
			<input class="username_inp"  v-model="nickname"  :placeholder="username"></input> <u-icon @click="close" name="close" class="close" margin-right="40" color="#999999" size="22"></u-icon>
		</view>
		<view class="caution">支持2-12个字符</view>
		<view class="determine" @click="profile">确定</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nickname:"",
				tmptoken:"",
				username:""
			}
		},
		
		onLoad() {
			var token = uni.getStorageSync("token");
			if(token){
				this.avatar = uni.getStorageSync("avatar");
				this.nickname = uni.getStorageSync("nickname");
			}
		},
		
		methods: {
			close(){
				this.nickname = "";
			},
			async profile(){
				var nickname = this.nickname;
				var res = await this.$ajax({ 
					url:"addons/cms/api.user/profile",
					method:"POST",
					data:{ "username":uni.getStorageSync("username"), "nickname":nickname,avatar:uni.getStorageSync("avatar")}
				})
				if(res.data.code==1){
					this.getuserinfo();
					uni.showToast({
						title:"修改成功",
						icon:"none"
					});
				}
			},
			
			async getuserinfo(){
				var res = await this.$ajax({ 
					url:"addons/cms/api.user/index"
				})
				console.log(res);
				if(res.data.code == 1){
					this.username = res.data.data.userInfo.nickname;
					uni.setStorage({
					    key: 'nickname',
					    data: res.data.data.userInfo.nickname,
					    success: function (e) {
					        console.log(e);
					    }
					});
					uni.navigateBack({
					    delta: 2
					});
				}
			}
		}
	}
</script>

<style lang="scss">
	page{
		background: #F2EDDF;
		.username{
			width: 702rpx;
			margin: auto;
			.username_box{
				height: 107rpx;
				display: flex;
				justify-content: space-around;
				align-items: center;
				margin-top: 50rpx;
				.username_inp{
					width: 702rpx;
					height: 107rpx;
					background: #FFF9ED;
					border-radius: 20px;
					font-size: 36rpx;
					font-weight: 700;
					color: #090909;
					padding: 0 30rpx;
				}
				.close{
					position: absolute;
					right: 50rpx;
				}
			}
			.caution{
				font-size: 24rpx;
				font-weight: 700;
				color: #999999;
				margin: 10rpx 30rpx;
				letter-spacing:2rpx;
			}
			.determine{
				width: 290rpx;
				height: 74rpx;
				background: #DCC18B;
				border-radius: 37rpx;
				color: #ffffff;
				margin: auto;
				text-align: center;
				line-height: 74rpx;
				font-size: 36rpx;
				font-weight: 700;
				letter-spacing:8rpx;
				margin-top: 100rpx;
			}
		}
	}
</style>
