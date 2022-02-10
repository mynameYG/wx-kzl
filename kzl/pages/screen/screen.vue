<template>  
	<view class="warp">  
		<view class="datatime">
			<view class="istime">
				<view class="title_time">时间</view>
				<!-- <picker mode="date"  fields='day' :start="startDay" @change="bindDateChange">  
					<view>{{startDay}}</view>
				</picker> -->
				<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
				    <view>{{date}}</view>
				</picker>
				<view class="msg">请选择参观时间</view>
			</view>
			<u-icon name="close" color="#090909" size="36"></u-icon> 
		</view>
		<view class="zt">
			<view class="title_zt">状态</view>
			<view :class="['exhibition_zt',Inv==0?'invse':'']" @click="Inv=0">已经闭展</view>
			<view :class="['exhibition_zt',Inv==1?'invse':'']" @click="Inv=1">正在展览</view>
			<view :class="['exhibition_zt',Inv==2?'invse':'']" @click="Inv=2">尚未展览</view>
		</view>
		<view class="region">
			<view class="place">
				<view class="title_place">地点</view>
				<input class="place_inp" type="text" placeholder="请选择参观的博物馆">
			</view>
			<view class="address">
				<text>省份</text>
				<text>山西</text>
				<text>太原</text>
			</view>
			<view class="option_list">
				<text>山西博物院</text> <text>晋祠博物院</text>
			</view>
		</view>
		<view class="btn_list">
			<text>重置</text>
			<text>确定</text>
		</view>
	</view>  
</template>
	
<script>  
  export default {  
    data() {  
		const currentDate = this.getDate({
			format: true
		})
		return {
		    title: 'picker',
		    array: ['中国', '美国', '巴西', '日本'],
		    index: 0,
			Inv: 0,
		    date: "时间查询",
		    time: '12:01'
		}
    },  
    onLoad() {  

    },
    methods: {  
		bindDateChange: function(e) {
		    this.date = e.target.value
		},
		getDate(type) {
		    const date = new Date();
		    let year = date.getFullYear();
		    let month = date.getMonth() + 1;
		    let day = date.getDate();
		
		    if (type === 'start') {
		        year = year - 60;
		    } else if (type === 'end') {
		        year = year + 2;
		    }
		    month = month > 9 ? month : '0' + month;
		    day = day > 9 ? day : '0' + day;
		    return `${year}-${month}-${day}`;
		}
    }  
  };  
</script>

<style lang="scss">
	page{
		background: #FFF9ED;
	}
	.warp{
		width: 702rpx;
		margin: auto;
		padding-top: 40rpx;
		.datatime{
			display: flex;
			justify-content: space-between;
			align-items:center;
			.istime{
				display: flex;
				.title_time{
					width: 60rpx;
					font-size: 28rpx;
					color: #2B2B24;
					font-weight: bold;
					margin-right: 20rpx;
				}
				picker{
					display: inline-block;
					font-size: 20rpx;
					font-weight: 400;
					color: #999999;
					width: 172rpx;
					height: 38rpx;
					border: 1rpx solid #C7744E;
					border-radius: 6rpx;
					line-height: 38rpx;
					text-align: center;
					margin-right: 20rpx;
				}
				.msg{
					font-size: 20rpx;
					font-weight: 400;
					color: #999999;
				}
			}
			u-icon{ float: right}
		}
		.zt{
			display: flex;
			margin-top: 80rpx;
			.title_zt{
				width: 60rpx;
				font-size: 28rpx;
				color: #2B2B24;
				font-weight: bold;
				margin-right: 20rpx;
			}
			.exhibition_zt{
				width: 120rpx;
				height: 47rpx;
				border: 1rpx solid #C8C8C8;
				border-radius: 12rpx;
				color: #333333;
				font-size: 20rpx;
				margin-right: 20rpx;
				line-height: 47rpx;
				text-align: center;
			}
		}
		.place{
			display: flex;
			align-items:center;
			margin-top: 80rpx;
			.title_place{
				width: 60rpx;
				font-size: 28rpx;
				color: #2B2B24;
				font-weight: bold;
				margin-right: 20rpx;
			}
			.place_inp{
				width: 480rpx;
				height: 52rpx;
				border: 1rpx solid #C7744E;
				border-radius: 6rpx;
				font-size: 20rpx;
				padding-left: 20rpx;
			}
		}
		.address{
			margin-left: 80rpx;
			margin-top: 20rpx;
			text{
				display: inline-block;
				height: 38rpx;
				text-align: center;
				line-height: 38rpx;
				color: #333333;
				font-size: 20rpx;
				margin-right:10rpx;
				padding: 0 20rpx;
				border-radius: 6rpx;
			}
		}
		.option_list{
			margin-left: 80rpx;
			margin-top: 20rpx;
			text{
				display: inline-block;
				height: 38rpx;
				text-align: center;
				line-height: 38rpx;
				color: #333333;
				font-size: 20rpx;
				margin-right:10rpx;
				padding: 0 20rpx;
				border-radius: 6rpx;
			}
		}
		.btn_list{
			display: flex;
			justify-content: space-between;
			width: 350rpx;
			margin: 50rpx auto;
			text{
				display: inline-block;
				width: 168rpx;
				height: 59rpx;
				background: #DCC18B;
				border-radius: 30rpx;
				font-size: 30rpx;
				font-weight: 400;
				color: #FFFFFF;
				line-height: 59rpx;
				text-align: center;
				letter-spacing:8rpx;
			}
		}
	}
	.invse{ border: 1rpx solid #C7744E !important; }
</style>
