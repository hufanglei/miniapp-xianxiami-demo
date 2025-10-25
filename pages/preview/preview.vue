<template>
	<view class="preview">
		<swiper circular>
			<swiper-item v-for="item in 5">
				<image @click="maskChange" src="../../common/images/preview1.jpg" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		
		<view class="mask" v-if="maskState">
			<view class="goBack"></view>
			<view class="count">3 / 9</view>
			<view class="time">
				<uni-dateformat :date="new Date()" format="hh:mm"></uni-dateformat>
			</view>
			<view class="date">
				<uni-dateformat :date="new Date()" format="MM月dd日"></uni-dateformat>
			</view>
			<view class="footer">
				<view class="box" @click="clickInfo">
					<uni-icons type="info" size="23"></uni-icons>
					<view class="text">信息</view>
				</view>
				<view class="box" @click="clickScore">
					<uni-icons type="star" size="23"></uni-icons>
					<view class="text">5分</view>
				</view>
				<view class="box">
					<uni-icons type="download" size="23"></uni-icons>
					<view class="text">下载</view>
				</view>
			</view>
		</view>

		
		<uni-popup ref="infoPopup" type="bottom">
			<view class="infoPopup">
				<view class="popHeader">
					<view></view>
					<view class="title">壁纸信息</view>
					<view class="close" @click="clickInfoClose">
						<uni-icons type="closeempty" size="18" color="#999"></uni-icons>
					</view>
				</view>
				<scroll-view scroll-y>
					<view class="content">
						<view class="row" >
							<view class="label">壁纸ID：</view>
							<text selectable class="value">1212123415fad</text>
						</view>
						<view class="row" >
							<view class="label">分类：</view>
							<text  class="value class">明星美女</text>
						</view>
						<view class="row" >
							<view class="label">发布者：</view>
							<text  class="value">咸虾米</text>
						</view>
						<view class="row" >
							<view class="label">评分：</view>
							<text  class="value roteBox">
								<uni-rate readonly touchable="false" :max="5" :value="3.5" />
								<text class="score">5分</text>
							</text>
						</view>
						<view class="row" >
							<view class="label">摘要：</view>
							<text  class="value">NBA支持贡献世界名画，文班亚麻封盖杜兰特名场面，图源:微博</text>
						</view>
						<view class="row">
							<text class="label">标签：</text>
							<view class="value tabs">
								<view class="tab" v-for="item in 3">标签名</view>
							</view>
						</view>
						
						<view class="copyright">
							声明:本图片来用户投稿，非商业使用，用于免费学习交流，如侵犯了您的权益，您可以拷贝壁纸ID举报至平台，邮箱513894357@qq.com，管理将删除侵权壁纸，维护您的权益。
						</view>
					</view>
				</scroll-view>
			</view>
		</uni-popup>
		
		<uni-popup ref="scorePopup" :is-mask-click="false">
			<view class="scorePopup">
				<view class="popHeader">
					<view></view>
					<view class="title">壁纸评分</view>
					<view class="close" @click="clickScoreClose">
						<uni-icons type="closeempty" size="18" color="#999"></uni-icons>
					</view>
				</view>
				<view class="content">
					<uni-rate v-model="useScore" allow-half/>
					<text class="text">{{useScore}}分</text>
				</view> 
				<view class="footer">
					<button  @click="submitScore" :disabled="!useScore" type="default" size="mini" plain>确认评分</button>					
				</view>
			</view>
		</uni-popup>

	</view>
</template>

<script setup>
import { ref } from "vue";

const maskState = ref(true);
const infoPopup = ref(null);
const scorePopup = ref(null);
const useScore = ref(0);


// 点击info弹窗
const clickInfo = ()=>{
	console.log(infoPopup.value)
	infoPopup.value.open();
}

// 点击关闭信息躺床
const clickInfoClose = () => {
	infoPopup.value.close();
}

// 评分弹窗
const clickScore=()=>{
	scorePopup.value.open();
	console.log(11)	
}

// 点击评分框
const clickScoreClose=()=>{
	scorePopup.value.close();
}

// 确认评分
const submitScore=()=>{
	console.log("评分了")
}

// 遮罩状态
const maskChange = () => {
	maskState.value = !maskState.value;
}
	
</script>

<style lang="scss" scoped>
.preview{
	width: 100%;
	height: 100vh;
	position: relative;
	swiper {
	   width: 100%;	
	   height: 100%;
	   image{
		   width: 100%;
		   height: 100%;
	   }
	}
	
	.mask{
		&>view{
			position: absolute; 
			left: 0;
			margin: auto;
			right: 0;
			color: #fff;
			width: fit-content; // 内容自适应
		}
	   .goBack{
		   
	   }
	   .count{
		  top: 10vh;
		  right: 0;
		  background: rgba(0,0,0,0.3);
		  font-size: 28rpx;
		  border-radius: 40rpx;
		  padding: 8rpx 28rpx;
		  backdrop-filter: blur(10rpx);
	   }
	   .time{
		   font-size: 140rpx;
		   top:calc(10vh + 80rpx);
		   font-weight: 100;
		   line-height: 1em;
		   text-shadow: 0 4rpx rgba(0,0,0,0.3);
	   }
	   .date{
		   font-size: 34rpx;
		   top: calc(10vh + 230rpx);
		   text-shadow: 0 2rpx rgba(0,0,0,0.3);
	   }
	   .footer{
		  background: rgba(255,255,255,0.8);
		  bottom: 10vh;
		  width: 65vw;
		  height: 120rpx;
		  border-radius: 120rpx;
		  color: #000;
		  display: flex;
		  justify-content: space-around;
		  align-items: center;
		  box-shadow: 0 2rpx 0 rgba(0,0,0,0.1);
		  backdrop-filter: blur(20rpx);
		  .box{
			  display: flex;
			  flex-direction: column;
			  align-items: center;
			  justify-content: center;
			  padding: 2rpx 12rpx;
			  .text{
				  font-size: 26rpx;
				  color: $text-font-color-2;
			  }
		  }
	   }
	}
	
	
	.popHeader{
		display: flex;
		justify-content: space-between;
		align-items: center;
		.title{
			color: $text-font-color-2;
			font-size: 26rpx;
		}
		.close{
			border: 1px solid red;
			padding: 6rpx;
		}
	}
	
	.infoPopup{
		width: 100%;
		background: #fff;
		padding: 30rpx;
		border-radius: 30rpx 30rpx 0 0;
		overflow: hidden;
		
		scroll-view{
			max-height: 60vh;
			.row{
				display: flex;
				padding: 16rpx 0;
				font-size: 32rpx;
				line-height: 1.7em;
				.label {
					color: $text-font-color-3;
					width: 140rpx;
					text-align: right;
					font-size: 30rpx;	
				}
				.value{
					flex: 1;
					width: 0;
				}
				.roteBox{
					display: flex;
					align-items: center;
					.score{
						font-size: 26rpx;
						color: $text-font-color-2;
						padding-left: 10rpx;
					}
				}
				.tabs{
					display: flex;
					flex-wrap: wrap;
					.tab{
						border: 1px solid $brand-theme-color;
						color: $brand-theme-color;
						font-size: 22rpx;
						padding: 10rpx 30rpx;
						border-radius: 40rpx;
						line-height: 1em;
						margin: 0 10rpx 10rpx 0;
					}
				}
				.class{
					color: $brand-theme-color;
				}
				
			}
			
			.copyright {
				font-size: 28rpx;
				padding: 20rpx;
				background: #f6f6f6;
				color: #666;
				border-radius: 10rpx;
				margin: 20rpx 0;
				line-height: 1.6em;
			}
			
		}
	}

	.scorePopup{
		background: #fff;
		padding: 30rpx;
		width: 70vw;
		border-radius: 30rpx;
		.content{
			padding: 30rpx 0;
		    display: flex;
			align-items: center;
			justify-content: center;
			.text{
				color: #ffca3e;
				padding-left: 10rpx;
				width: 80rpx;
				line-height: 1em;
				text-align: right;
			}
		}
		.footer{
			padding: 10rpx 0;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
}	

</style>
