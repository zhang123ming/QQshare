<template>
	<view class="container">
		<button type="default" @click="qqqzone">分享qq空间</button>
		<button type="default" @click="login"> qq登录</button>
		<button type="default" @click="uniappSDK">qq分享朋友圈</button>
		<button type="default" @click="plus">安卓分享</button>
		<image :src="userInfo.avatarUrl" mode=""></image>
		<text>{{userInfo.nickname}}</text>
		<h1>{{userInfo}}</h1>
		<image :src="userInfo.figureurl"></image>
		<image :src="userInfo.figureurl_1"></image>
		<image :src="userInfo.figureurl_2"></image>
		<image :src="userInfo.headimgurl"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				message: "12",
				info: "45l",
				userInfo: {}
			}
		},
		methods: {
			plus: function() {
				plus.share.sendWithSystem({
					content: '分享内容',
					href: 'https://www.dcloud.io/'
				}, function() {
					uni.showToast({
						title: "分享成功"
					})
				}, function(e) {
					uni.showToast({
						title: "失败"
					})
				});
			},
			qqqzone: function() {
				uni.share({
					provider: "qq",
					scene: "WXSceneSession",
					type: 0,
					href: "http://uniapp.dcloud.io/",
					title: "uni-app分享",
					summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
					imageUrl: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
					success: function(res) {
						console.log("success:" + JSON.stringify(res));

					},
					fail: function(err) {
						console.log("fail:" + JSON.stringify(err));
					}
				});
			},
			login: function() {
				const self = this;
				uni.login({
					provider: "qq",
					success: (resp) => {
						self.message = JSON.stringify(resp);

						var access_token = resp.authResult.access_token;
						uni.getUserInfo({
							provider: 'qq',
							success: function(infoRes) {
								self.userInfo = infoRes.userInfo
							}
						})
					},
					fail: (err) => {
						alert("失败");
					}
				});

			},
			uniappSDK: function() {
				// uni.share({

				uni.shareWithSystem({
					summary: '我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！',
					href: 'https://uniapp.dcloud.io',
					imageUrl: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
					success() {
						// 分享完成，请注意此时不一定是成功分享
					},
					fail() {
						// 分享失败
					}
				})

			}

		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}

	image {
		width: 100px;
		height: 100px;
		border-radius: 50%;
	}

	h1 {
		border-bottom: 3px solid #DD524D;
	}
</style>
