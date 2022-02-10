<template>
	<view class="login">
		<view class="kgzg">
			<image src="../../static/kgzg.png"></image>
		</view>
		<button class="log wx"  @click="getuserinfo" >
			微信登录
		</button>
		<view class="log phone" @click="phonelogin">
			手机号登陆/注册
		</view>
		<u-popup v-model="show" mode="bottom" border-radius="14" length="641rpx">
			<view class="apply">
				<view class="apply_smg">
					<view class="apply_avatar"></view>
					<view class="apply_title">看展览</view>
					<view class="apply_for">申请使用</view>
				</view>
				<view class="getinfomsg">
					获取你的昵称、头像、性别
				</view>
				<view class="personal">
					<view class="information">
						<view class="info_avatar">
							<image :src="avatar"></image>
						</view>
						<view class="info_name">
							<view class="username">{{nickname}}</view>
							<view class="wxinfo">微信个人信息</view>
						</view>
					</view>
					<uni-icons type="checkmarkempty"  color="#09C063" size="30"></uni-icons>
				</view>
				<view class="btn_content">
					<view class="btn cancel" @click="cancel">取消</view>
					<button class="btn allow" open-type="getUserInfo" @getuserinfo="bindgetuserinfo">允许</button>
				</view>
			</view>
		</u-popup>
		<button>登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				nickname:"",
				avatar:""
			}
		},
		onLoad(){
			
		},
		
		methods: {
			phonelogin(){
				uni.navigateTo({
					url:"../phonelogin/phonelogin"
				})
			},
			getShow(){
	
			},
			cancel(){
				this.show = false,
				uni.showToast({
				    title:"取消授权",
					icon:"none"
				});
			},
			getuserinfo: function(e) {
				uni.getUserInfo({
					success: res => {
						var data = JSON.parse(res.rawData);
						this.avatar = data.avatarUrl
						this.nickname =	data.nickName
					}
				})
				this.show = !this.show;
			},
			getCode: async function() {
					return new Promise((resolve, reject) => {
						uni.login({
							// #ifdef MP-ALIPAY
							scopes: 'auth_user',
							// #endif
							success: function(res) {
								console.log(res)
								if (res.code) {
									resolve(res.code);
								} else {
									//login成功，但是没有取到code
									reject('未取得code');
								}
							},
							fail: function(res) {
								reject('用户授权失败wx.login');
							}
						});
					});
				},
				//用户授权得到用户的信息
				bindgetuserinfo: async function(e) {
					console.log(e);
					if (e.detail.errMsg == 'getUserInfo:fail auth deny') {
						this.$u.toast('未授权');
					} else {
						try {
							let code = await this.getCode();
							console.log(code);
							let data = {
								code: code,
								rawData: e.detail.rawData,
							};
							//有推荐码的话，带上
							if (this.vuex_invitecode) {
								data.invitecode = this.vuex_invitecode;
							}
							this.toLogin(data);
						} catch (e) {
							this.$u.toast(e);
						}
					}
				},
				//实际的去登陆
				toLogin: async function(data) {
					console.log(data);
					let res = await this.$ajax({
						url:"addons/cms/api.login/wxLogin",
						data:{data}
					})
					console.log(res);
				},
				
		}


	}
</script>
	
<style lang="scss">
	page{
		background: #F2EDDF;
	}
	.login{
		width: 702rpx;
		margin: 0 auto;
		padding: 240rpx 0;
		.kgzg{
			width: 403rpx;
			height: 121rpx;
			margin: auto;
			image{ width: 100%; height: 100%; }
		}
		.log{
			width: 466rpx;
			height: 89rpx;
			background: #DCC18B;
			border-radius: 40rpx;
			font-size: 36rpx;
			font-weight: 700;
			color: #FFFFFF;
			text-align: center;
			margin: 50rpx auto;
			line-height: 89rpx;
			letter-spacing:5rpx;
		}
		.phone{
			color: #000000;
			background: #FFFFFF;
			border: 1rpx solid #9A9A9A;
			border-radius: 40rpx;
			font-weight: 400;
		}
		.apply{
			width:712rpx;
			margin: auto;
			padding-top: 30rpx;
			.apply_smg{
				height: 71rpx;
				width: 360rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.apply_avatar{
					width: 71rpx;
					height: 71rpx;
					background: #989898;
					border-radius: 50%;
				}
				.apply_title{
					font-size: 28rpx;
					font-weight: bold;
					color: #090909;
				}
				.apply_for{
					font-size: 28rpx;
					color: #090909;
				}
			}
			.getinfomsg{
				color: #090909;
				font-weight: bold;
				font-size: 32rpx;
				margin: 40rpx 0;
			}
			.personal{
				height: 138rpx;
				border-top: 1px solid #E3E3E3;
				border-bottom: 1px solid #E3E3E3;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin: 50rpx 0;
				.information{
					width: 360rpx;
					height: 90rpx;
					display: flex;
					.info_avatar{
						width: 91rpx;
						height: 81rpx;
						background: #989898;
						border-radius: 6rpx;
						image{
							width: 100%;
							height:100%;
						}
					}
					.info_name{
						display: inline-block;
						margin-left: 40rpx;
						.username{
							color: #090909;
							font-size: 28rpx;
							font-weight: 700;
						}
						.wxinfo{
							color: #999999;
							font-size: 28rpx;
						}
					}
				}
			}
			.btn_content{
				margin: auto;
				margin-top: 80rpx;
				width: 480rpx;
				display: flex;
				justify-content: space-around;
				.btn{
					width: 212rpx;
					height: 84rpx;
					background: #F2F2F2;
					border-radius: 8rpx;
					text-align: center;
					line-height: 84rpx;
				}
				.cancel{
					background: #F2F2F2;
					color: #090909;
					font-weight: bold;
				}
				.allow{
					background: #09C063;
					font-weight: 400;
					color: #FFFFFF;
				}
			}
		}
	}
</style>
