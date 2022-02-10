
<template>
	<view class="home" @touchstart="touchStart" @touchend="touchEnd" >
		<!-- 顶部搜索栏 -->
		<view class="exhibition_header" v-if="show">
			<view class="search_content" >
				<uni-icons class="iconsearch" type="search" color="#999999" size="18"></uni-icons>
				<input type="text" class="search" @click="search" placeholder="搜索"> 
				<view class="screen" @click="screen">
					<image src="../../static/screen.png"></image> <view>筛选</view>
				</view>
			</view>
		</view>
		<!--打补丁 -->
		<view class="patch"></view>
		<!-- 看展览 列表 -->
		<!-- views:预览, likes:点赞 , comments:评论  -->
		<view class="content" v-for="item of swiper" @click="exhibition(item.id)">
			<image :src="item.image"></image>
			<view class="zt_active" :class="statusText[item.zt]">{{item.state}}</view>
			<view class="exhibition_details">
				<text class="exhibition_title">{{item.title}}</text><image src="../../static/huo.png"></image>
				<view class="line"></view>
				<view class="exhibition_info">
					<view class="info"><view class="time_place"><uni-icons type="location" color="#999999" size="14"></uni-icons>展览地点：</view><text class="">{{item.venue}}</text></view>
					<view class="info">
						<view class="time_place"><uni-icons type="shop" color="#999999" size="14"></uni-icons> 展览时间：</view>
						<text class="">
							<text v-if="item.starttime != '0000-00-00'">{{item.starttime}}</text> <text v-if="item.endtime != '0000-00-00'"> 到{{item.endtime}}</text>
						</text>
					</view>
					<view class="trigeminy">
						<view><uni-icons type="hand-thumbsup" color="#999999" size="14"></uni-icons>点赞 {{item.likes}}</view>
						<view><uni-icons type="compose" color="#999999" size="14"></uni-icons>转发 12</view>
						<view><uni-icons type="star" color="#999999" size="14"></uni-icons>收藏 {{item.collect}}</view>
						<view><uni-icons type="eye" color="#999999" size="14"></uni-icons>查看 {{item.views}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="isOver" v-if="flag">-----没有更多展览-----</view>
	</view>
</template>
 
<script>
	// Icons 图标放在text标签中微信小程序不会显示
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		components: {uniIcons},
		data() {
			return {
				swiper:[],
				statusText: {
					1: ['span-delay'],
					2: ['span-finish'],
					3: ['span-rough']
				},
				pageindex: 1,
				flag: false,
				touchStartX: 0,  // 触屏起始点x 
				touchStartY: 0,  // 触屏起始点y 
				show:true
			}
		},
		
		onLoad() {
			this.index()
		},
	
		methods: {
			async index(){
				const res = await this.$ajax({
					url:"addons/cms/api.archives/index?page="+this.pageindex,
				})
				// this.swiper = res.data.data.archivesList;
				this.swiper = this.swiper.concat(res.data.data.archivesList);
				console.log(this.swiper);
				for( var i = 0; i < this.swiper.length; i++ ){
					var nowtime = Date.now();
					var starttime =  new Date(this.swiper[i].starttime).getTime();
					var endtime =  new Date(this.swiper[i].endtime).getTime();
					if(nowtime<starttime){
						this.swiper[i].state = "尚未开展"
						this.swiper[i].zt = 3;
					} else if(nowtime>endtime+86400000){
						this.swiper[i].state = "已经闭展"
						this.swiper[i].zt = 1;
					} else {
						this.swiper[i].state = "正在展出"
						this.swiper[i].zt = 2;
					}
				}
			},
			
			onReachBottom(){
				if(this.swiper.length<this.pageindex*10) return this.flag = true;
				this.pageindex++;
				this.index()
			},
			
			search(){
				uni.navigateTo({
					url: "/pages/search/search"
				})
			},
			
			exhibition(lid){
				uni.navigateTo({
					url: "/pages/content/content?id="+lid
				})
			},
			
			screen(){
				uni.navigateTo({
					url: "/pages/screen/screen"
				})
			},
			//滑动
			touchStart(e) {  
				console.log("触摸开始")   
				this.touchStartX = e.touches[0].clientX;
				this.touchStartY = e.touches[0].clientY;  
			},
			touchEnd(e) {
				console.log("触摸结束")   
				let deltaX = e.changedTouches[0].clientX - this.touchStartX; 
				let deltaY = e.changedTouches[0].clientY - this.touchStartY;
				if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {  
					if (deltaX >= 0) {  
						// console.log("左滑")  
					} else {  
						// console.log("右滑")  
					}  
				} else if(Math.abs(deltaY) > 50 && Math.abs(deltaX) < Math.abs(deltaY)) {  
					if (deltaY < 0) {  
						this.show = false; 
					} else {  
						// console.log("下滑") 
						this.show = true;
					}  
				}
			}	
		}
	}
	
</script>
	
<style lang="scss">
	page{
		background: #F2EDDF;
	}
	.home{
		/* #ifdef MP */
		padding-top:80rpx;
		/* #endif */
		background: #F2EDDF;
		.exhibition_header{
			background: #A9A67F;
			padding: 20rpx 0;
			width: 100%;
			height: 98rpx;
			position: fixed;
			top: 88rpx;
			z-index: 100;
			/* #ifdef MP */
				background: #A9A67F;
				padding: 20rpx 0;
				width: 100%;
				height: 98rpx;
				position: fixed;
				top: -1rpx;
				z-index: 100;
			/* #endif */
			.search_content{
				width: 702rpx;
				height: 58rpx;
				display: flex;
				justify-content: space-between;
				margin: 0 auto;
				position: relative;
				.iconsearch{
					position: absolute;
					top: 50%;
					margin-top:-24rpx;
					margin-left: 10rpx;
				}
				.search{
					width:446rpx;
					height:58rpx;
					border-radius: 27rpx;
					background: #E2E2E2;
					color: #999999;
					font-size: 24rpx;
					padding-left: 60rpx;
				}
				.screen{
					width: 186rpx;
					height: 58rpx;
					background: #DCC18B;
					border-radius: 29px;
					text-align: center;
					padding: 0 30rpx;
					line-height: 58rpx;
					display: flex;
					justify-content: space-around;
					align-items:center;
					image{
						width: 42rpx;
						height: 42rpx;
					}
				}
			}
		}
		/* #ifdef H5 */
			.patch{
				height: 100rpx;
			}
		/* #endif */
		
		image{
			width: 702rpx;
			height: 294rpx;
			border-radius:  12px 12px 0 0;
		}
		.content{
			width: 702rpx;
			padding-bottom: 30rpx;
			margin: 40rpx auto;
			background: #F2EDDF;
			border-radius: 12px;
			box-shadow: 0px 0px 6px 0px rgba(83, 60, 26, 0.3);
			position:relative;
			.zt_active{
				position: absolute;
				top: 40rpx;
				left: -10rpx;
				width: 118rpx;
				height: 42rpx;
				background: #C7744E;
				color: #FFFFFF;
				font-size: 20rpx;
				text-align: center;
				font-weight: 700;
				line-height: 42rpx;
				border-radius: 0px 20px 20px 0px;
				box-shadow: -4rpx 10rpx 20rpx -6rpx #65290E;	
			}
			.exhibition_details{
				margin:0 10rpx;
				.line{
					background: #DCC18B;
					height: 2.8rpx;
					width: 50rpx;
					margin: 10rpx 0;
				}
				.exhibition_title{
					color: #572808;
					font-size: 30rpx;
					font-weight: bold;
				}
				
				.exhibition_info{
					color:#333333;
					font-size: 24rpx;
					.info{ margin: 5rpx 0; }
					.time_place{
						color: #999999;
						display: inline;
					}
					.trigeminy{
						margin-top: 20rpx;
						display: flex;
						justify-content: space-between;
						align-items: center;
						view{
							display: inline;
						}
					}
				}
				image{
					width: 22rpx;
					height: 32rpx;
				}
			}	
		}
		.isOver{
			width: 100%;
			height: 50px;
			line-height: 50px;
			text-align: center;
			font-size: 28rpx;
			margin: auto;
		}
	}
	
	.span-delay{background: #A7A7A7 !important;}
	.span-finish{background: #C7744E !important;}
	.span-rough{background: #D5C064 !important;}
	
</style>

