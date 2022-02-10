<template>
	<view class="feedback">
		<textarea placeholder="亲，您遇到什么系统问题啦，或有什么功能建议吗？欢迎您提 供给我们，谢谢！" class="feedback_val">
		 
		</textarea>
		
		<view class="send">
			发送
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
		background: #F2EDDF;
	}
	.feedback{
		width: 702rpx;
		margin: auto;
		.feedback_val{
			width: 702rpx;
			height: 345rpx;
			border: 1rpx solid #DCC18B;
			border-radius: 20rpx;
			color: #999999;
			font-size: 24rpx;
			font-weight: 700;
			line-height: 36rpx;
			margin: 20rpx 0;
		}
		.send{
			width: 290rpx;
			height: 74rpx;
			background: #DCC18B;
			border-radius: 37rpx;
			margin: 0 auto;
			font-size: 36rpx;
			font-weight: 400;
			color: #FFFFFF;
			line-height: 74rpx;
			text-align: center;
			letter-spacing: 8rpx;
		}
	}
</style>
