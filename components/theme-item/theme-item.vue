<template>
	<view class="themeItem">
		<navigator url="" class="box">
			<image class="pic" src="../../common/images/classify1.jpg" mode=""></image>
			<view class="mask">明星美女</view>
			<view class="tab">3天前更新</view>
		</navigator>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.themeItem{
	.box{
		height: 340rpx;
		border-radius: 10rpx;
		overflow: hidden;
		position: relative;
		.pic{
			width: 100%;
		}
		.mask{
			width: 100%;
			height: 70rpx;
			position: absolute;
			bottom: 0;
			left: 0;
			background: rgba(0,0,0,0.2);
			display: flex;
			align-items: center;
			justify-content: center;
			color: #fff;
			font-weight: 600;
			// 磨砂效果
			backdrop-filter: blur(20rpx);
			font-size: 30rpx;
		}
		.tab{
			position: absolute;
			left: 0;
			top: 0;
			background: rgba(255,129,90,0.7);
			// 磨砂效果
			backdrop-filter: blur(20rpx);
			color: #fff;
			font-size: 22rpx;
			padding: 6rpx 14rpx;
			border-radius: 0 0 20rpx 0;
		}
	}
}
</style>