<template>
	<view class="warp">
		<text class="msg">共0条，最多为你保存30条</text>
		<view class="kong">
			<view class="massage">您还没有浏览记录</view>
			<view class="msg_img">
				<image src="../../static/null.png"></image>
			</view>
			<view class="gotoindex">去首页逛一逛</view>
		</view>
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
.warp{
	width: 702rpx;
	margin: auto;
	padding-top: 30rpx;
	.msg{
		font-size: 28rpx;
		font-weight: 400;
		color: #999999;
	}
	.kong{
		width: 288rpx;
		margin: auto;
		margin-top: 80rpx;
		.massage{ 
			font-weight: bold;
			color: #333333;
			font-size: 36rpx;
			margin: auto;
		}
		.msg_img{
			width: 278rpx;
			height: 280rpx;
			margin: 40rpx auto;
			border: 1px dashed #999999;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.gotoindex{
			width: 277rpx;
			height: 68rpx;
			border: 1rpx solid #A9A67F;
			border-radius: 12rpx;	
			margin: auto;
			text-align: center;
			line-height: 68rpx;
			font-size: 32rpx;
			font-weight: 700;
			color: #090909;
		}
	}
}
</style>
