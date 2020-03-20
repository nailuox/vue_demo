<template>
	<div class="videoPage">
		<CustomBreadcrumb :breadcrumbList="breadcrumbList" />
		<TypingCard :content="context" id="howUse" title="使用说明" />
		<a-row :gutter="20">
			<a-col :span="24">
				<a-card
					hoverable
					:bordered="false"
					title="视频播放"
					:style="{ minHeight: 400 }"
					:id="1"
				>
					<VideoPlayer :videoJsOptions="videoJsOptions" />
				</a-card>
			</a-col>
		</a-row>
	</div>
</template>

<script>
import { Card, Row, Col } from 'ant-design-vue'

import CustomBreadcrumb from '@/common/components/CustomBreadcrumb'
import TypingCard from '@/common/components/TypingCard'
import VideoPlayer from './VideoPlayer'

export default {
	components: {
		CustomBreadcrumb,
		TypingCard,
		VideoPlayer,
		'a-card': Card,
		'a-row': Row,
		'a-col': Col
	},
	data() {
		return {
			breadcrumbList: ['Openlayers Demo'],
			context: `<ul class="card-ul">
            <li>video.js是一款基于HTML5的网络视频播放器。它支持HTML5和Flash视频，以及YouTube和Vimeo（通过插件），支持在桌面和移动设备上播放视频。因为Video.js基于html5的，所以只有mp4，webm，ogv三种格式支持</li>
            <li>安装Video依赖， yarn add video.js</li>
            <li>具体使用参见<a href="https://videojs.com/" target="#">Video官网</a> ,
            <a href="https://docs.videojs.com/tutorial-react.html" target="#">Video文档</a></li>
        </ul>`,
			videoJsOptions: {
				style: { height: '400px', width: '100%' },
				autoplay: true,
				controls: true,
				sources: [
					{
						src:
							'//s3.pstatp.com/aweme/resource/web/static/image/index/tvc-v2_30097df.mp4',
						type: 'video/mp4'
					}
				]
			}
		}
	}
}
</script>

<style></style>
