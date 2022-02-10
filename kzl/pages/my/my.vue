
<template>
		<view class="my_homepage">
			<view class="my_member" @click="personal">
				<view class="avatar">
					<image :src="avatar"></image>
				</view>
				<view class="memtar_msg"> 
					<view class="memtar_name">{{nickname}}</view>
					<view class="memtar_number">15500000000</view>
				</view>
			</view>
			
			<view class="my_content">
				<view class="my_list" @click="like">	
					<u-icon name="thumb-up" color="#999999" size="35"></u-icon>
					<view class="my_right">
						<text>我的点赞</text>
						<u-icon name="arrow-right" margin-left="10rpx" color="#999999" size="35"></u-icon>
					</view>
				</view>
				<view class="my_bor"></view>
				<view class="my_list" @click="collect">
					<u-icon name="star" color="#999999" size="35"></u-icon>
					<view class="my_right">
						<text>我的收藏</text>
						<u-icon name="arrow-right" margin-left="10rpx" color="#999999" size="35"></u-icon>
					</view>
				</view>
				<view class="my_bor"></view>
				<view class="my_list" @click="footprint">
					<image class="iconewe" src="../../static/zuji.png" mode=""></image>
					<view class="my_right">
						<text>浏览足迹</text>
						<u-icon name="arrow-right" color="#999999" size="35"></u-icon>
					</view>
				</view>
				<view class="my_bor"></view>
				<view class="my_list" @click="feedback">
					<u-icon name="edit-pen" color="#999999" size="35"></u-icon>
					<view class="my_right">
						<text>意见反馈</text>
						<u-icon name="arrow-right"  color="#999999" size="35"></u-icon>
					</view>
				</view>
				<view class="my_bor"></view>
				<view class="my_list" @click="open">
					<u-icon name="star-fill" color="#999999" size="35"></u-icon>
					<view class="my_right">
						<text>清理缓存</text>
						<u-icon name="arrow-right"  color="#999999" size="35"></u-icon>
					</view>
				</view>
				<view class="my_bor"></view>
				<view class="my_list" @click="about">
					<image class="iconewe" src="../../static/about.png" mode=""></image>
					<view class="my_right">
						<text>关于我们</text>
						<u-icon name="arrow-right"  color="#999999" size="35"></u-icon>
					</view>
				</view>
				<view class="my_bor"></view>
			</view>
		<!-- 退出登录-->
			<view class="logout" @click="logout">
				退出登录
			</view>
			<u-modal v-model="show" show-cancel-button :title-style="{background: '#F2EDDF'}"  :cancel-style="{background: '#F2EDDF'}"  :confirm-style="{background: '#F2EDDF'}"   :content-style="{background: '#F2EDDF'}" :content="content"></u-modal>
		</view>
</template>
	
<script>
	
	export default {
		data() {
			return {
				show: false,
				content: '确定要清楚所有缓存吗',
				avatar:"",
				nickname:""
			}
		},
		onShow: function() {
			var token = uni.getStorageSync("token");
			if(token){
				console.log()
				this.getuserinfo();
				
			} else {
				uni.navigateTo({
					url:"../login/loging"
				})		
			}
			console.log("加载");
		},
		onLoad() {
			
		},
		methods: {
			personal(){
				uni.navigateTo({
					url:"../personal/personal"
				})
			},
			about(){
				uni.navigateTo({
					url:"../about/about"
				})
			},
			footprint(){
				uni.navigateTo({
					url:"../footprint/footprint"
				})
			},
			like(){
				uni.navigateTo({
					url:"../like/like"
				})
			},
			feedback(){
				uni.navigateTo({
					url:"../feedback/feedback"
				})
			},
			collect(){
				uni.navigateTo({
					url:"../collect/collect"
				})
			},
			open() {
				this.show = true;
			},
			async logout(){
				var res =  await this.$ajax({
					url:"addons/cms/api.user/logout",
				});
				if(res.data.code == 1){
					uni.removeStorage({
					    key: 'token',
					    success: function (res) {
					        console.log('success');
					    }
					});	
					uni.redirectTo({
					    url:"../login/loging"
					});
				}
			},
			async getuserinfo(){
				var res = await this.$ajax({ 
					url:"addons/cms/api.user/index"
				})
				if(res.data.code == 1){
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
					this.avatar = uni.getStorageSync("avatar");
					this.nickname = uni.getStorageSync("nickname");
				}
			}
		}
	}
	
</script>

<style lang="scss">
	page{
		background: #F2EDDF;
	}
	.iconewe{
		width: 35rpx;
		height: 35rpx;
	}
	.my_homepage{
		padding-top: 50rpx;
		.my_member{
			width: 702rpx;
			height: 152rpx;
			background: #FFF9ED;
			box-shadow: 0px 3rpx 7rpx 0px rgba(83, 60, 26, 0.07);
			border-radius: 20rpx;
			padding: 22rpx 20rpx;
			margin: auto;
			display: flex;
			justify-content: space-between;
			margin-bottom: 20rpx;
			.avatar{
				width: 109rpx;
				height: 109rpx;
				background: #B3B3B3;
				border-radius: 50%;
				image{
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}
			.memtar_msg{ 
				height: 109rpx;	
				width: 520rpx;
				display: flex;
				flex-direction:column;
				justify-content: space-around;
				.memtar_name{
					font-weight: 700;
					font-size: 36rpx;
				}
				.memtar_number{
					color: #292929;
					font-size: 28rpx;
					font-weight: 700;
				}
			}
		}
		.my_content{
			width: 702rpx;
			height: 674rpx;
			background: #FFF9ED;
			border-radius: 20px;
			margin: 0 auto;
			.my_list{
				width: 702rpx;
				height: 103rpx;
				line-height: 103rpx;
				padding: 0 20rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.my_right{
					width: 600rpx;
					display: flex;
					justify-content: space-between;
					font-weight: 700;
				}
			}
			.my_bor{
				width: 600rpx;
				height: 1rpx;
				float: right;
				background: #D2C191;
				opacity: 0.2;
				margin-right: 20rpx;
			}
		}
		// 退出登录
		.logout{
			width: 466rpx;
			height: 89rpx;
			background: #DCC18B;
			border-radius: 40px;
			margin: 50rpx auto 0;
			font-size: 36rpx;
			color: #ffffff;
			text-align: center;
			line-height: 89rpx;
			font-weight: 700;
			letter-spacing:8rpx;
		}
	}
</style>
