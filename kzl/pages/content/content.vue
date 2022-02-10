<template>
	<view class="cont">
		<!-- 顶部搜索栏 -->
		<view class="exhibition_header">
			<view class="search_content" @click="search()">
				<input type="text" class="search" placeholder="搜索"> 
				<view class="screen">
					<image src="../../static/screen.png"></image> 筛选
				</view>
			</view>
		</view>
		<!-- 内容详情 -->
		<!-- views:预览, likes:点赞 , comments:评论-->
		<uni-swipe-action>
		<uni-swipe-action-item>
		<template v-slot:left class="swipercontent">
			<view class="swipercontent" @click="previousPosts()">
				<view class="slofcont">
					<image src="../../static/left.png"></image>
					<view class="swiperight">上一篇</view>
				</view>
			</view>
		</template>
		<view class="content_item">
			<view class="include">
				<image :src="archivesInfo.image"></image>
				<view class="patch">
					<view class="item_title">{{archivesInfo.museum}}</view>
					<view class="item_title">{{archivesInfo.title}}</view>
					<view class="include_msg">
						<view>
							<text class="caption">展览时间:</text>
							<text>{{archivesInfo.starttime}}</text>
						</view>
						<view>
							<text class="caption">展览地点:</text>
							<text>{{archivesInfo.venue}}</text>
						</view>
						<view>
							<text class="caption">展览介绍:</text>
							<rich-text :nodes="strings"  class="content_text">
							</rich-text>
						</view>
					</view>
					<view class="share_type"  v-if="flag">
						<view>
							<u-icon name="qq-circle-fill"  color="#18bc9c" size="46"></u-icon><text>QQ</text>
						</view>
						<view>
							<u-icon name="weixin-circle-fill"  color="#3498db" size="46"></u-icon><text>微信</text>
						</view>
						<view>
							<u-icon name="weibo-circle-fill"  color="#e74c3c" size="46"></u-icon><text>微博</text>
						</view>
					</view>
					<view class="share">
						<view class="praise" @click="likes(archivesInfo.id)"><u-icon name="thumb-up"  color="#ffffff" size="35"></u-icon><text>点赞 {{praise}}</text></view>
						<view class="praise" @click="collect(archivesInfo.id)"><u-icon name="star"  color="#ffffff" size="35"></u-icon><text>收藏 {{collectcount}}</text></view>
						<view class="zhuanfa" @click="box_if">
							<u-icon name="share"  color="#999999" size="35"></u-icon>
							<view>转发12</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<template v-slot:right>
			<view class="swipercontent" @click="nextArticle">
				<view class="slofcont">
					<image src="../../static/right.png"></image>
					<view class="swiperight">下一篇</view>
				</view>
			</view>
		</template>
		</uni-swipe-action-item>
		</uni-swipe-action>
		<!--评论-->
		<scroll-view  scroll-y class="comment">
			<view class="comment_title">评论</view>
			<view class="critic" v-for="item of comment">
				<view class="comment_photo">
					<view class="comment_photoimg">
						<image :src="item.user.avatar"></image>
					</view>
					<view class="comment_info">
			 			<view class="comment_name">{{item.user.nickname}}</view>
						<view class="comment_thumb">
							<u-icon name="thumb-up" color="#999999" size="26"></u-icon><text @click="replay(item)">12</text>
						</view>
					</view>
				</view>
				<view class="comment_content">
					<view class="vacancy"></view>  <!-- 打补丁 -->
					<view class="comment_content_text">
						{{item.content}}
					</view>
				</view>
			</view>

			<!-- 添加评论 -->
			<view class="add">
				<view class="add_photo">
					<image :src="avatar"></image>
				</view>
				<input type="text" @click="menu"  class="add_put" disabled placeholder="添加评论...">
			</view>
		</scroll-view>
		<!-- 相关搜索 -->
		<view class="concordance">
			<view class="con_size">相关搜索</view>
			<scroll-view scroll-x  class="content_listimg">
				<view class="con_img" v-for="item of recommendList" @click="index(item.id)">
					<image :src="item.image"></image>
					<view class="con_text">{{item.title}}</view>
				</view>
			</scroll-view>
		</view>
		<!-- 底部添加评论 -->
		<view class="bot_add">
			<input type="text" @click="menu"  class="add_inp" placeholder="添加评论...">
			<u-icon name="chat" color="#999999" size="50"></u-icon>
			<u-icon name="thumb-up" color="#999999" size="50"></u-icon>
			<u-icon name="star" color="#999999" size="50"></u-icon>
			<u-icon name="zhuanfa" color="#999999" size="50"></u-icon>
		</view>
		<u-popup v-model="show" mode="bottom"   length="938rpx">
			<scroll-view  scroll-y class="shade">
				<view class="comment">
					<view class="comment_close">
						<view class="comment_title">评论</view>
						<view>
							<u-icon name="close" color="#999999" @click="show = false" size="40"></u-icon>
						</view>
					</view>
					
					<view class="critic" v-for="item of comment">
						<view class="comment_photo">
							<view class="comment_photoimg">
								<image :src="item.user.avatar"></image>
							</view>
							<view class="comment_info">
								<view class="comment_name">{{item.user.nickname}}</view>
								<view class="comment_thumb">
									<u-icon name="thumb-up" color="#999999" size="26"></u-icon><text @click="replay(item)">12</text>
								</view>
							</view>
						</view>
						<view class="comment_content">
							<view class="vacancy"></view>  <!-- 打补丁 -->
							<view class="comment_content_text">
								{{item.content}}
							</view>
						</view>
					</view>
					<!-- 添加评论 -->
					<!-- 打补丁 -->
					<view class="add_buding">
						
					</view>
					<view class="add">
						<view class="add_photo">
							<image :src="avatar" @click="menu"></image>
						</view>
						<!-- <input type="text" v-model="content"  :focus="searchFocus" class="add_put" placeholder="添加评论..."> -->
						<textarea v-model="content" class="add_put"  auto-height="true" ></textarea>
						<view class="send" @click="send(archivesInfo.id)">发送</view>
					</view>
				</view>
			</scroll-view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				strings:"",
				show: false,
				archivesInfo:{},
				comment:[],
				content:"",
				pid: 0,
				recommendList:"",
				lid:"",
				archivesLength:"",
				flag:false,
				praise:"",
				avatar:"",
				searchFocus: false,
				//输入框样式
				type: 'textarea',
				border: true,
				height: 50,
				autoHeight: true,
				// 收藏次数
				collectcount:0
			}
		},
		onLoad(e) {
			this.detail(e.id);
			// this.commentList(e.id);
			this.recommend();
			this.listLength();
			this.collectNumber(e.id);
		},
		methods: {
			//获取列表页的长度 用于判断用户滑动翻页第最后一篇   
			async listLength(){
				var res = await this.$ajax({
					url:"addons/cms/api.archives/index"
				})
			 	this.archivesLength = res.data.data.archivesList.length;
			},
			//内容页
			async detail(id){
				var res = await this.$ajax({
					url:"addons/cms/api.archives/detail?id="+id
				})
				this.lid = id;
				this.archivesInfo = res.data.data.archivesInfo;
				this.strings = this.archivesInfo.content;
				this.praise = res.data.data.archivesInfo.likes;
				this.comment = res.data.data.commentList;
				var avatar = uni.getStorageSync("avatar");
				this.avatar = avatar;
			},
			//点赞
			async likes(id){
				const value = uni.getStorageSync(`${this.id}_${uni.getStorageSync("user_id")}`);
				if(!uni.getStorageSync("token")){
					uni.navigateTo({
						url:"../login/loging"
					})
					return
				}
				if(value == this.id){
					uni.showToast({						title:"请输入评论内容！",						icon:"none"					})
				}
				
				var res = await this.$ajax({
					url:"addons/cms/api.archives/vote",
					method:"POST",
					data:{"id":id, "type":"like"},
				});
				console.log(res);
				if(res.data.code == 1){
					this.praise++;
				}
				
			},
			// 评论列表
			// async commentList(id){
			// 	var res = await this.$ajax({
			// 		url:"addons/cms/api.archives/detail?id="+id
			// 	})
			// 	this.comment = res.data.data.commentList;
			// },
			//艾特
			replay(item){
				console.log(item);
				this.content = `@${item.user.nickname} `;
				this.pid = item.id;
			},
			//评论
			async send(id){
				if(!uni.getStorageSync("token")){
					uni.navigateTo({
						url:"../login/loging"
					})
					return
				}
				if(!this.content){
					uni.showToast({
						title:"请输入评论内容！",
						icon:"none"
					})
					return
				}
				if(this.content.length<3){
					uni.showToast({
						title:"最少输入三个字符！",
						icon:"none"
					})
					return
				}
				var res = await this.$ajax({
					url:"addons/cms/api.comment/post",
					method:"POST",
					data:{"content":this.content,"aid":id,"pid":this.pid}
				})
				this.content = '';
				this.comment = this.comment;
				if (res.data && res.data.data.comment) {
					this.comment = [res.data.data.comment, ...this.comment];
				}
				console.log(res);
			},
			async recommend(){
				var result =  await this.$ajax({
					url:"addons/cms/api.archives/recommend"
				})
				this.recommendList = result.data.data.recommendList;
			},
			//相关搜索
			index(lid){
				uni.navigateTo({
					url: "/pages/content/content?id="+lid
				})
			},
			//搜索跳转
			search(){
				uni.navigateTo({
					url: "/pages/search/search"
				})
			},
			//上一篇
			previousPosts(){
				if(this.lid-- <= 1 ){
					uni.showToast({
						title:"已到达第一篇",
						icon:"none"
					})
					this.lid = 1;
					return
				} else {
					uni.navigateTo({
						url: "/pages/content/content?id="+this.lid
					})
				}
			},
			//下一篇
			nextArticle(){
				this.lid = this.lid++;
				if(this.lid++ >= this.archivesLength){
					uni.showToast({
						title:"最后一篇",
						icon:"none"
					})
					this.lid = this.archivesLength;
					return
				}else{
					uni.navigateTo({
						url: "/pages/content/content?id="+this.lid
					})
				}
			},
			box_if(){
				this.flag = !this.flag;
			},
			menu(){
				this.show = !this.falg;
				this.searchFocus = true;
			},
			//收藏
			async collect(lid){
				if(!uni.getStorageSync("token")){
					uni.navigateTo({
						url:"../login/loging"
					})
					return
				}
				var res =  await this.$ajax({
					url:"addons/cms/api.archives/postcollect",
					method:"POST",
					data:{id: lid}
				})
				if( res.data.code == 1 ) {
					console.log(this.collectcount);
					this.collectcount++;
					uni.showToast({
						title: res.data.msg,
						icon:"none"
					})
				} else {
					uni.showToast({
						title: res.data.msg,
						icon:"none"
					})
				} 
			},
			
			async collectNumber(lid){
				var res =  await this.$ajax({
					url:"addons/cms/api.archives/getcollect",
					method: "POST",
					data:{id: lid}
				})
				this.collectcount = res.data.data.collectcount;
			}
			
		}
	}
</script>

<style lang="scss">

	page{
		background: #F2EDDF !important;
	}
	
	.swipeleft{ 	
		width: 213rpx;
		position: fixed;
	}
	.swiperight{
		width: 213rpx;
		color: #A5A5A5;
		font-weight: 700;
		font-size: 24rpx;
	}
	.swipercontent{
		width: 213rpx;
		background: #F2EDDF;
		position: relative;
		height: 100%;
	}
	.slofcont{ 
		width: 100%;
		height: 90rpx;
		margin: 0 auto;
		text-align: center;
		position: fixed;
		left:50%;
		top:50%;
		transform:translate(-50%,-50%);
		z-index:1000;  
		image{
			width: 72rpx;
			height: 73rpx;
		}
	}
	.cont{
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
				.search{
					width:446rpx;
					height:58rpx;
					border-radius: 27rpx;
					background: #E2E2E2;
					color: #999999;
					font-size: 24rpx;
					padding-left: 30rpx;
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
		// 内容详情
		.content_item{
			width: 750rpx;
			margin-top: 20rpx;
			margin-bottom: 30rpx;
			background: #FEFFEF;
			box-shadow: 0px 0px 5rpx 0px rgba(83, 60, 26, 0.29);
			border-radius: 20rpx;
			.include{
				width: 702rpx;
				margin: auto;
				padding: 40rpx 0;
				image{
					width: 702rpx;
					height: 294rpx;
					border-radius: 12rpx;
				}
				.patch{
					padding: 0 20rpx;
					.item_title{
						font-weight: 700;
						color: #090909;
						font-size: 36rpx;
						margin: 15rpx 0;
					}
					.include_msg{
						padding-top: 10rpx;
						font-size: 32rpx;
						view{
							margin: 20rpx 0;
						}
						.caption{
							color: #6B3612;
							font-size: 32rpx;
							font-weight: 700;
							margin-right: 30rpx;
						}
						.content_text{
							font-size: 28rpx;
							color: #666666;
							line-height: 45rpx;
							background: none;
						}
					}
					.share_type{
						width: 480rpx;
						height: 70rpx;
						background: #F0E9D6;
						box-shadow: 0px 0px 9rpx 0px rgba(83, 60, 26, 0.29);
						border-radius: 35rpx;
						margin: 0 auto;
						display: flex;
						justify-content: space-around;
						color: #666666;
						view{ 
							height: 64rpx;
							line-height: 64rpx;
							color: #666666;
							text{
								display: inline-block;
								line-height: 64rpx;
							}
						}
					}
					
					.share{
						margin-top: 20rpx;
						height: 69rpx;
						.praise{
							background: #C7744E;
							width: 192rpx;
							height: 69rpx;
							display: inline-block;
							text-align: center;
							line-height: 69rpx;
							color: #FFFFFF;
							border-radius: 35rpx;
							margin-right: 20rpx;
						}
						.zhuanfa{
							float: right;
							margin-right: 20rpx;
							font-size: 24rpx;
							color: #999999;
							text-align: center;
						}
					}
				}
				
			}
		}
		//评论
		.comment{
			width: 702rpx;
			margin: 0 auto;
			max-height: 600rpx;
			.comment_title{
				height: 34rpx;
				font-size: 36rpx;
				font-weight: 700;
				color: #090909;
				line-height: 30rpx;
				margin-bottom: 30rpx;
			}
			.critic{
				.comment_photo{
					display: flex;
					justify-content: space-around;
					.comment_photoimg{
						width: 55rpx;
						height: 55rpx;
						border-radius: 50%;
						image{
							width: 100%;
							height: 100%;
						}
					}
					.comment_info{
						width: 600rpx;
						height: 55rpx;
						line-height: 55rpx;
						display: flex;
						justify-content: space-between;
						float: right;
						.comment_name{
							font-size: 28rpx;
							font-weight: 700;
							color: #666666;
						}
						.comment_thumb{
							color: #999999;
							font-size: 24rpx;
							font-weight: 700;
						}
					}
					
				}
				.comment_content{
					display: flex;
					justify-content: space-around;
					margin: 20rpx 0;
					.vacancy{
						width: 55rpx;
					}
					.comment_content_text{
						width: 600rpx;
						font-size: 24rpx;
						font-weight: 700;
						color: #999999;
					}
				}
			}
			.add_buding{
				height: 100rpx;
				width: 100%;
			}
			.add{
				display: flex;
				justify-content: space-around;
				width: 702rpx;
				margin: 0 auto;
				.add_photo{
					width: 55rpx;
					height: 55rpx;
					background: #7F7F7F;
					border-radius: 50%;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.add_put{
					width: 600rpx;
					height: 62rpx;
					background: #F0E9D6;
					border: 1px solid #A9A67F;
					border-radius: 29rpx;
					font-size: 28rpx;
					font-weight: 700;
					color: #999999;
					padding-left: 20rpx;
				}
			}
		}
		//相关搜索
		.concordance{
			width: 702rpx;
			margin: 60rpx auto;
			.con_size{
				height: 34rpx;
				font-size: 36rpx;
				font-weight: 700;
				color: #090909;
				line-height: 30rpx;
				margin-bottom: 30rpx;
			}
			scroll-view{
				width: 702rpx;
				white-space: nowrap; /**不换行**/
				.con_img{
					display: inline-block;
					width: 274rpx;
					height: 140rpx;
					margin-right: 20rpx; 
					image{ 
						width: 274rpx;
						height: 115rpx;
						border-radius: 12rpx;
					}
					.con_text{
						font-size: 20rpx;
						font-weight: 700;
						color: #090909;
						padding: 0 10rpx;
						overflow: hidden; /*溢出隐藏*/
						white-space: nowrap; /*不允许换行*/
						text-overflow: ellipsis; 
					}
				}
			}
		}
		// 底部评论点赞收藏
		.bot_add{
			height: 62rpx;
			width: 702rpx;
			margin: 30rpx auto;
			display: flex;
			justify-content: space-between;
			.add_inp{
				background: #F0E9D6;
				border: 1px solid #A9A67F;
				width: 269rpx;
				height: 62rpx;
				border-radius: 29rpx;
				font-size: 28rpx;
				font-weight: 700;
				color: #999999;
				padding-left: 20rpx;
			}
		}
		// 弹出框评论
		u-popup{
			background: #F2EDDF;
		}
		.shade{
			width: 750rpx;
			height: 100%;
			background: #F2EDDF;
			.comment_close{
				display: flex;
				justify-content: space-between;
				line-height: 50rpx;
				margin-bottom: 30rpx;
				margin-top: 50rpx;
			}
				.comment_title{
					height: 34rpx;
					font-size: 36rpx;
					font-weight: 700;
					color: #090909;
					line-height: 30rpx;
					margin-bottom: 30rpx;
				}
				.critic{
					.comment_photo{
						display: flex;
						justify-content: space-around;
						.comment_photoimg{
							width: 55rpx;
							height: 55rpx;
							background: #7F7F7F;
							border-radius: 50%;
						}
						.comment_info{
							width: 600rpx;
							height: 55rpx;
							line-height: 55rpx;
							display: flex;
							justify-content: space-between;
							float: right;
							.comment_name{
								font-size: 28rpx;
								font-weight: 700;
								color: #666666;
							}
							.comment_thumb{
								color: #999999;
								font-size: 24rpx;
								font-weight: 700;
							}
						}
						
					}
					.comment_content{
						display: flex;
						justify-content: space-around;
						margin: 20rpx 0;
						.vacancy{
							width: 55rpx;
						}
						.comment_content_text{
							width: 600rpx;
							font-size: 24rpx;
							font-weight: 700;
							color: #999999;
						}
					}
				}
				
				.add{
					position: fixed;
					display: flex;
					justify-content: space-around;
					width: 702rpx;
					margin: auto;
					bottom: 0rpx;
					background: #F2EDDF;
					padding-bottom: 20rpx;
					.add_photo{
						width: 55rpx;
						height: 55rpx;
						background: #7F7F7F;
						border-radius: 50%;
					}
					.add_put{ 
						width: 400rpx;
						min-height: 62rpx !important;
						line-height: 62rpx;
						background: #F0E9D6;
						border: 1px solid #A9A67F;
						border-radius: 29rpx;
						font-size: 28rpx;
						font-weight: 700;
						color: #999999;
						padding-left: 20rpx;
					}
					.send{
						width: 146rpx;
						height: 62rpx;
						background: #DCC18B;
						opacity: 0.6;
						border-radius: 29rpx;
						text-align: center;
						line-height: 62rpx;
						font-size: 28rpx;
						font-weight: 700;
						color: #333333;
					}
			}
		}
	}
</style>
