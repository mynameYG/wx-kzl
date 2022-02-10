<template>
	<view class="sear">
		<view class="exhibition_header">
			<view class="search_content">
				<uni-icons class="iconsearch" type="search" color="#999999" size="18"></uni-icons>
				<input type="text" class="search" placeholder="搜索" focus v-model="changeVaule"> 
				<view class="screen" @click="searchFun">
					确认
				</view>
			</view>
		</view>
		<view class="hot_search">
			<view class="hot_font">热门搜索</view>
			<view class="hot_search_tag">
				<text>故宫博物院</text>
				<text>山西博物院</text>
				<text>瓷器</text>
				<text>战国</text>
				<text>青铜器</text>
				<text>唐代</text>
				<text>清代</text>
				<text>明代</text>
				<text>西汉</text>
				<text>宋代</text>
				<text>水下考古</text>
			</view>
		</view>
		<view class="hot_search">
			<view class="hot_font">搜索历史</view>   <u-icon name="close"  v-if="searchAll.length>0" @click="remove()" class="close" color="#999999" size="35"></u-icon>
			<view class="hot_search_tag" >
				<text v-for="item of searchAll">{{item}}</text>
			</view>
		</view>
		<!-- 本周排行 -->
		<view class="ranking">
			<view class="ranking_font">本周排行</view>
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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				changeVaule: '',    // 输入框输入的值
				searchAll: []       // 搜索记录
			}
		},
		methods: {
			searchFun() {
				if(this.changeVaule != '') {    // 输入框的值不为空时
					this.searchAll.push(this.changeVaule)    // 将输入框的值添加到搜索记录数组中存储
					uni.setStorage({
						key: 'searchAll_key',
						data: this.searchAll,    
						success: function () {
									
						}
					})
					this.changeVaule = ''
				}
				console.log(this.searchAll);
			},
			remove(){
				uni.removeStorage({
				    key: 'searchAll_key',
				    success: function (res) {
				        console.log('success');
				    }
				});
				this.searchAll = []
			}
		},
		onLoad () {
			const than = this        // 注意this的指向
			uni.getStorage({
				key: 'searchAll_key',
				success(res) {
					than.searchAll = res.data
				}
			})
		}
	}
</script>

<style lang="scss">
	page{
		background: #F2EDDF;
	}
	.sear{
		.exhibition_header{
			background: #A9A67F;
			padding: 20rpx 0;
			width: 100%;
			height: 98rpx;
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
					width:540rpx;
					height:58rpx;
					border-radius: 27rpx;
					background: #E2E2E2;
					color: #999999;
					font-size: 24rpx;
					padding-left: 60rpx;
				}
				.screen{
					height: 58rpx;
					text-align: center;
					line-height: 58rpx;
					margin: 0 20rpx;
				}
			}
		}
		.hot_search{
			width: 702rpx;
			margin: 30rpx auto;
			.close{
				display: inline-block;
				margin-left: 70%;
			}
			.hot_font{
				display: inline-block;
				font-size: 36rpx;
				font-weight: 700;
				margin-bottom: 20rpx;
			}
			.hot_search_tag{
				text{
					display: inline-block;
					color: #ffffff;
					background: #DCC18B;
					font-size: 28rpx;
					padding: 15rpx 20rpx;
					border-radius: 40rpx;
					letter-spacing:4rpx;
					margin: 10rpx 10rpx;
				}
			}
		}
		.ranking{
			width: 702rpx;
			margin: 30rpx auto;
			.ranking_font{
				font-size: 36rpx;
				font-weight: 700;
				margin-bottom: 20rpx;
			}
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
	}
	.sear.hot_list:nth-child(1) .serial { background: #D57464; }
	.sear .hot_list:nth-child(2) .serial { background: #D5C064; }
	.sear .hot_list:nth-child(3) .serial { background: #CAD564; }
</style>
