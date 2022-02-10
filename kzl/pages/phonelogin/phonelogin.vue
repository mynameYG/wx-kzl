<template>
	<view class="phone_login">
		<view class="mobile">
			<text>+86</text> <input type="text" placeholder="输入手机号">
		</view>
		<view class="captcha">
			<input type="text" placeholder="输入验证码"><text>发送验证码</text>
		</view>
		<view class="login_btn" hover-class="login_hover">登录</view>
		<view class="bottom_msg">未注册手机验证后完成注册</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	page{
		background: #F2EDDF;
	}
	.phone_login{
		padding-top: 80rpx;
		.mobile{
			border-bottom: 1px solid #D6D299;
			width: 535rpx;
			margin: 60rpx auto;
			display: flex;
			align-items: center;
			padding-bottom: 10rpx;
			text{
				width: 72rpx;
				height: 28rpx;
				font-size: 36rpx;
				font-weight: 700;
				color: #666666;
				line-height: 30rpx;
				margin-right: 100rpx;
			}
			input{
				display: inline-block;
				font-size: 36rpx;
				color: #999999;
			}
		}
		.captcha{
			border-bottom: 1px solid #D6D299;
			width: 535rpx;
			margin: 60rpx auto;
			display: flex;
			align-items: center;
			padding-bottom: 10rpx;
			text{
				font-size: 30rpx;
				width: 248rpx;
				color: #999999;
			}
			input{
				display: inline-block;
				color: #999999;
				font-size: 36rpx;
			}
		}
		.login_btn{
			width: 466rpx;
			height: 89rpx;
			background: #FFFFFF;
			border: 1px solid #9A9A9A;
			border-radius: 40rpx;
			margin: 150rpx auto;
			text-align: center;
			line-height: 89rpx;
			font-size: 36rpx;
			color: #444444;
			letter-spacing:4rpx;
			font-weight: 700;
		}
		.login_hover{
			background: #DCC18B;
			border: 1px solid #9A9A9A;
			color: #ffffff;
		}
		.bottom_msg{
			width: 340rpx;
			position: fixed;
			bottom: 50rpx;
			left: 50%;
			margin-left: -170rpx;
			color: #888888;
			font-size: 24rpx;
			letter-spacing:4rpx;
		}
	}
	
</style>
