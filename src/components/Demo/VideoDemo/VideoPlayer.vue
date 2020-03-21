<template>
	<div>
		<div data-vjs-player>
			<video ref="videoNode" :style="videoJsOptions.style" class="video-js">
				抱歉，您的浏览器不支持内嵌视频
			</video>
		</div>
	</div>
</template>

<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

export default {
	props: {
		videoJsOptions: {}
	},
	data() {
		return {
			player: null
		}
	},
	mounted() {
		this.player = videojs(
			this.$refs.videoNode,
			this.videoJsOptions,
			function onPlayerReady() {
				window.console.log('onPlayerReady', this)
			}
		)
	},
	beforeDestroy() {
		if (this.player) {
			this.player.dispose()
		}
	}
}
</script>

<style></style>
