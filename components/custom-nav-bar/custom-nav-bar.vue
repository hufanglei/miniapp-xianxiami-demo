<template>
	<view class="layout"> 
		<view class="navbar">
			<view class="statusBar"></view>
			 <view class="titleBar">
				 <view class="title">标题</view>
				 <view class="search">
					 <uni-icons class="icon" type="search" color="#888" size="18"></uni-icons>
					 <text class="text">搜索</text>
				 </view>
			 </view>
		</view>
		<view class="fill">
			
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
.layout {
	.navbar{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index:10;
		background:
			linear-gradient(to bottom, transparent 0%, #fff 400rpx),
		    linear-gradient(to right,#beecd8 20%,#F4E2D8);
		.statusBar{
		}
		.titleBar{
			display: flex;
			padding: 0 30rpx;
			align-items: center;
			height: 100rpx;
			.title{
				font-size: 22rpx;
				font-weight: 700;
				color: $text-font-color-1;
			}
			.search{
				width: 220rpx;
				height: 50rpx;
				border-radius: 60rpx;
				background: rgba(225, 255,255,0);
				border: 1px solid #fff;
				margin-left: 30rpx;
				color: #fff;
				font-size: 28rpx;
				display: flex;
				align-items: center;
				.icon{
					margin-left: 5rpx;
				}
				.text{
					padding-left: 10rpx;
				}
				
			}
		}
	}
	.fill{
		
	}
}
</style>