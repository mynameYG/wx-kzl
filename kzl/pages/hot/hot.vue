
<template>
	<view class="hot_content">
		<view class="hot_list">
			<view class="serial">1</view>
			<view class="hot_right">
				<text class="hot_title">
					格物匠心——福建传统工艺展（中国国家博物馆）
				</text>
				<view class="hot_time">
					2020.8.7.- 2020.10.18
				</view>
			</view>
			<view class="hot_bor"></view>
		</view>
		<view class="hot_list">
			<view class="serial">2</view>
			<view class="hot_right">
				<text class="hot_title">
					宅兹中国——宝鸡出土青铜器与金文精华（中国国家博物馆）
				</text>
				<view class="hot_time">
					2020.8.7.- 2020.10.18
				</view>
			</view>
			<view class="hot_bor"></view>
		</view>
		<view class="hot_list">
			<view class="serial">3</view>
			<view class="hot_right">
				<text class="hot_title">
					宅兹中国——宝鸡出土青铜器与金文精华（中国国家博物馆）
				</text>
				<view class="hot_time">
					2020.8.7.- 2020.10.18
				</view>
			</view>
			<view class="hot_bor"></view>
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
	.hot_content{
		padding-top: 30rpx;
		.hot_list{
			padding-bottom:20rpx;
			width: 702rpx;
			margin: 0 auto;
			.serial{
				float:left;
				width: 22rpx;
				height: 22rpx;
				background: #D57464;
				border-radius: 3px;
				font-size: 14rpx ;
				line-height: 22rpx;
				text-align: center;
				color: #FFFFFF;
				margin-top: 10rpx;
			}
			
			.hot_right{
				margin-left: 40rpx;
				.hot_title{
					height: 30rpx;
					font-size: 30rpx;
					font-weight: 400;
					color: #333333;
					line-height: 30rpx;
					margim-bottom: 20rpx;
				}
				.hot_time{
					margin-top: 20rpx;
					font-size: 24rpx;
					font-weight: 400;
					height: 20rpx;
					line-height: 20rpx;
					color: #333333;
				}
			}
			.hot_bor{
				width: 702rpx;
				height: 1rpx;
				background: #D2C191;
				opacity: 0.2;
				margin-top: 30rpx;
			}
		}
		
	}
	.hot_content .hot_list:nth-child(1) .serial { background: #D57464; }
	.hot_content .hot_list:nth-child(2) .serial { background: #D5C064; }
	.hot_content .hot_list:nth-child(3) .serial { background: #CAD564; }
</style>
