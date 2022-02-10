<template>
	<view>
		<view class="yun"><image src="../../static/zhanlan/yun.png"></image></view>
		<view class="dabaowei">
			<image src="../../static/zhanlan/log.png"></image>
			<view class="list">
				<view class="item">
					<image src="../../static/zhanlan/photo.png"></image>
					<text>金瓯永固杯</text>
				</view>
				<view class="item">
					<image src="../../static/zhanlan/photo.png"></image>
					<text>金瓯永固杯</text>
				</view>
				<view class="item">
					<image src="../../static/zhanlan/photo.png"></image>
					<text>金瓯永固杯</text>
				</view>
			</view>
			<image src="../../static/zhanlan/log.png"></image>
			<view class="list">
				<view class="item">
					<image src="../../static/zhanlan/photo.png"></image>
					<text>金瓯永固杯</text>
				</view>
				<view class="item">
					<image src="../../static/zhanlan/photo.png"></image>
					<text>金瓯永固杯</text>
				</view>
				<view class="item">
					<image src="../../static/zhanlan/photo.png"></image>
					<text>金瓯永固杯</text>
				</view>
			</view>
			<image src="../../static/zhanlan/log.png"></image>
			<view class="list">
				<view class="item">
					<image src="../../static/zhanlan/photo.png"></image>
					<text>金瓯永固杯</text>
				</view>
				<view class="item">
					<image src="../../static/zhanlan/photo.png"></image>
					<text>金瓯永固杯</text>
				</view>
				<view class="item">
					<image src="../../static/zhanlan/photo.png"></image>
					<text>金瓯永固杯</text>
				</view>
			</view>
			<image src="../../static/zhanlan/log.png"></image>
			<view class="list">
				<view class="item">
					<image src="../../static/zhanlan/photo.png"></image>
					<text>金瓯永固杯</text>
				</view>
				<view class="item">
					<image src="../../static/zhanlan/photo.png"></image>
					<text>金瓯永固杯</text>
				</view>
				<view class="item">
					<image src="../../static/zhanlan/photo.png"></image>
					<text>金瓯永固杯</text>
				</view>
			</view>
			<image src="../../static/zhanlan/log.png"></image>
			<view class="list">
				<view class="item">
					<image src="../../static/zhanlan/photo.png"></image>
					<text>金瓯永固杯</text>
				</view>
				<view class="item">
					<image src="../../static/zhanlan/photo.png"></image>
					<text>金瓯永固杯</text>
				</view>
				<view class="item">
					<image src="../../static/zhanlan/photo.png"></image>
					<text>金瓯永固杯</text>
				</view>
			</view>
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
	.yun{
		width: 750rpx;
		height:300rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.dabaowei{
		background: #131419;
		image{
			width: 750rpx;
			height: 100rpx;
			margin-bottom: 30rpx;
		}
		.list{
			display: flex;
			justify-content: space-around;
			.item{
				width: 230rpx;
				height: 300rpx;
				text-align: center;
				text{ color: #fff; text-align: center; margin: auto; display: inline-block;}
				image{
					width: 230rpx;
					height: 230rpx;
				}
			}
		}
	}
</style>
