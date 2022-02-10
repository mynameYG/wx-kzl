<template>
	<view>
		<view class="error">
			<view class="err_msg">您的网络出现了问题</view>
			<view class="bgyuan"></view>
			<view class="content_img">
				<image src="../../static/error404.png"></image>
			</view>
		</view>
		<view class="flush">刷新</view>
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
		background: #FFF9ED;
	}
	.error{
		width:324rpx;
		height: 500rpx;
		margin: auto;
		position: relative;
		padding-top: 60rpx;
		.err_msg{
			font-size: 36rpx;
			font-weight: 700;
			color: #333333;
			margin: auto;
		}
		.bgyuan{
			width: 150rpx;
			height: 150rpx;
			background: #EEDFC0;
			border-radius: 50%;
			margin: 40rpx auto;
		}
		.content_img{
			width: 320rpx;
			height: 229rpx;
			margin: auto;
			border: 1px dashed #999999;
			position: absolute;
			top: 200rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		
	}
	.flush{
		width: 138rpx;
		height: 68rpx;
		border: 1rpx solid #A9A67F;
		border-radius: 12rpx;
		margin: auto;
		font-size: 32rpx;
		font-weight: 700;
		line-height: 68rpx;
		text-align: center;
		color: #090909;
	}
</style>
