<template>
	<view class="personal">
		<view class="portraits" @click="chooseAvatar">
			<view class="portraits_text">头像</view>
			<view class="portraits_right">
				<view class="portraits_img">
					<image :src="avatar"></image>
				</view>
				<u-icon name="arrow-right" color="#999999" size="24"></u-icon>
			</view>
		</view>
		<view class="portraits" @click="username">
			<view class="portraits_text">用户名</view>
			<view class="portraits_right">
				<view class="portraits_name">{{nickname}}</view>
				<u-icon name="arrow-right" color="#999999" size="24"></u-icon>
			</view>
		</view>
		<!-- <u-popup v-model="show" mode="bottom">
			<view class="pop_up"> 
				<view class="pop_title">设置头像图片</view>
				<view>拍照</view>
				<view>相册</view>
				<view>取消</view>
			</view>
		</u-popup> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// show: false,
				avatar:"",
				nickname:"",
			}
		},
		onShow: function() {
			var token = uni.getStorageSync("token");
			if(token){
				this.avatar = uni.getStorageSync("avatar");
				this.nickname = uni.getStorageSync("nickname");
			}
			console.log("加载");
		},
		created() {
			// 监听从裁剪页发布的事件，获得裁剪结果
			uni.$on('uAvatarCropper', path => {
				this.avatar = path;
				uni.uploadFile({
					url: 'http://mz.kzl.cn/api/common/upload',
					filePath: path,
					header: {
						token: uni.getStorageSync("token") || 0,
						uid: uni.getStorageSync("user_id") || ""
					},
					name: 'file',
					success: (res) => {
						var data = JSON.parse(res.data);
						console.log(data.code);
						if(data.code == 1) {
							this.avatar = data.data.fullurl;
							this.editAvatar();
						} else {
							uni.showToast({
								title:"上传失败",
								icon:"none"
							});
						}
					}
				});
			})
		},
				
		onLoad() {
			var token = uni.getStorageSync("token");
			if(token){
				this.avatar = uni.getStorageSync("avatar");
				this.nickname = uni.getStorageSync("nickname");
			}
		},
		
		methods: {
			username(){
				uni.navigateTo({
					url:"../username/username"
				})
			},
			
			chooseAvatar() {
				// 此为uView的跳转方法，详见"文档-JS"部分，也可以用uni的uni.navigateTo
				this.$u.route({
					// 关于此路径，请见下方"注意事项"
					url: '/uview-ui/components/u-avatar-cropper/u-avatar-cropper',
					// 内部已设置以下默认参数值，可不传这些参数
					params: {
						// 输出图片宽度，高等于宽，单位px
						destWidth: 300,
						// 裁剪框宽度，高等于宽，单位px
						rectWidth: 300,
						// 输出的图片类型，如果'png'类型发现裁剪的图片太大，改成"jpg"即可
						fileType: 'jpg',
					}
				})
			},
			
			
			editAvatar: async function() {
				let res = await this.$ajax({
					url: "addons/cms/api.user/avatar",
					method: "POST",
					data:{ avatar: this.avatar}
				});	
				if(res.data.code==1){
					uni.showToast({
						title:"修改成功",
						icon:"none"
					});
					uni.setStorage({
						key: 'avatar',
						data: this.avatar,
						success: function (e) {
						}
					});
					uni.showToast({
					    title:"修改成功",
						icon:"none"
					});
				}
			},
		}
	}
</script>

<style lang="scss">
	page{
		background: #F2EDDF;
	}
	.personal{
		padding-top: 20rpx;
		.portraits{
			width: 750rpx;
			height: 152rpx;
			background: #FFF9ED;
			box-shadow: 0px 3rpx 7rpx 0px rgba(83, 60, 26, 0.07);
			margin: 20rpx auto;
			line-height: 152rpx;
			display: flex;
			justify-content: space-between;
			padding: 0 40rpx;
			align-items:center;
			.portraits_text{
				font-size: 36rpx;
				font-weight: 700;
				color: #090909;
			}
			.portraits_right{
				height: 92rpx;
				line-height: 92rpx;
				display: flex;
				justify-content: space-between;
				align-items:center;
			}
			.portraits_img{
				width: 93rpx;
				height: 92rpx;
				background: #B3B3B3;
				border-radius: 50%;
				display: inline-block;
				margin-right: 30rpx;
				image{
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}
			.portraits_name{
				font-size: 36rpx;
				font-weight: 700;
				color: #999999;
				margin-right: 30rpx;
				letter-spacing: 4rpx;
			}
		}
		.pop_up{
			width: 750rpx;
			height: 318rpx;
			background: #F2EDDF;
			border-radius: 6rpx;
			.pop_title{
				width: 750rpx;
				height: 120rpx;
				margin: 0 auto;
				color: #090909;
				font-size: 32rpx;
				text-align: center;
				line-height: 120rpx;
				border: 1px solid #FFFAF0;
			}
			view{
				color: #090909;
				width: 702rpx;
				height: 60rpx;
				margin: auto;
				line-height: 60rpx;
				text-align: center;
			}
		}
	}
	
</style>
