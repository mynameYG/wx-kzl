<template>
	<view class="footprint">
		<view class="hint">
			<view>共<text>2</text>条，最多为你保存<text>30</text>条</view>
		</view>
		<uni-swipe-action-item>
			<radio class="radio" color='#C7744E' v-if="flag" :checked="includes" ></radio>
			<view>
				<view class="track">
					<image src="https://cdn.uviewui.com/uview/swiper/1.jpg"></image>
					<view class="track_title">妙合神形——中国国家博物馆藏明清肖像画展</view>
				</view>
			</view>
			<template v-slot:left>
				<view>
					<view class="delete">取&nbsp&nbsp消&nbsp&nbsp点&nbsp&nbsp赞</view>
				</view>
			</template>
		</uni-swipe-action-item>
		
		<view class="manage" @click="manage()" v-if="!flag">管理</view>
		<view class="targe" v-if="flag"> 
			<radio color='#C7744E' :checked="includes"></radio>
			<view @click="dele()">删除</view>
			<view @click="cancel()">取消</view>
		</view>
	</view>
</template>

<script>
	import uniSwipeAction from "@/components/uni-swipe-action/uni-swipe-action.vue"
	export default {
		components: {
		    uniSwipeAction
		},
		data() {
			return {
				flag:true,
				data:"",
				includes:false
			}
		},
		methods: {
			manage(){
				this.flag = true
			},
			dele(){
				this.flag = false
			},
			cancel(){
				this.flag = false
			}
		}
	}
</script>


<style lang="scss">
	page{
		background: #F2EDDF;
		.delete{
			margin-top: 20rpx;
			width: 117rpx;
			height: 356rpx;
			background: #C7744E;
			border-radius: 20rpx 0rpx 0rpx 20rpx;
			font-size: 24rpx;
			font-weight: 700;
			color: #ffffff;
			writing-mode: vertical-lr; 
			text-align: center;
			padding: 0 40rpx;
			// box-shadow: 0px 0px 6px 0px rgba(83, 60, 26, 0.3);
		}
		.footprint{
			width: 702rpx;
			margin: 0 auto;
			font-size: 28rpx;
			.radio{
				margin: 0 20rpx;
				margin-top: 20%;
				transform:scale(0.7);
				color: #C7744E !important;
			}
			
			.track{
				width: 702rpx;
				height: 357rpx;
				background: #F7EED6;
				box-shadow: 0px 0px 6px 0px rgba(83, 60, 26, 0.3);
				// border-radius: 12px;
				margin: 20rpx 0;
				image{
					width: 702rpx;
					height: 294rpx;
					// border-radius: 12px 12px 0px 0px;
				}
				.track_title{
					font-size: 30rpx;
					font-weight: 700;
					color: #572808;
					padding: 0 20rpx;
				}
			}
			.manage{
				width: 196rpx;
				height: 60rpx;
				background: #DCC18B;
				border-radius: 28rpx;
				color: #FFFFFF;
				letter-spacing: 12rpx;
				font-size: 28rpx;
				font-weight: 700;
				margin: 60rpx auto;
				line-height: 60rpx;
				text-align: center;
				position: fixed;
				bottom: 40rpx;
				left: 50%;
				margin-left: -98rpx ;
			}
			.targe{
				radio{
					margin: 20% 180rpx 0 20rpx;
					transform:scale(0.7);
					color: #C7744E !important;
				}
				view{
					width: 148rpx;
					height: 60rpx;
					background: #C7744E;
					border-radius: 28rpx;
					display: inline-block;
					text-align: center;
					line-height: 60rpx;
					color: #FFFFFF;
					margin: 0 20rpx;
				}
			}
		}
	}
</style>