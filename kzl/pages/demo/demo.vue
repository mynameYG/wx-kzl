<template>
	<view>
		<uni-swipe-action>
		    <uni-swipe-action-item>
		        <template v-slot:left>
		            <view><text>置顶</text></view>
		        </template>
		        <view>
		            <text >使用插槽</text>
		        </view>
		        <template v-slot:right>
		            <view><text>删除</text></view>
		        </template>
		    </uni-swipe-action-item>
		  
		</uni-swipe-action>
		
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
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
