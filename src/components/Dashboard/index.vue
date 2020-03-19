<template>
	<div class="home">
		<CustomBreadcrumb />
		<TypingCard :content="context" id="howUse" title="项目介绍" />
	</div>
</template>

<script>
import CustomBreadcrumb from '@/common/components/CustomBreadcrumb'
import TypingCard from '@/common/components/TypingCard'

export default {
	name: 'Home',
	components: {
		CustomBreadcrumb,
		TypingCard
	},
	data() {
		return {
			context: `<ul class="card-ul">
            <li>该系统用于演示vue项目</li>
            <li>使用vue ui脚手架生成, UI使用 Antd Design Vue, 使用Yarn管理依赖</li>
            <li>项目使用技术栈为：vue + vue router + vuex + less</li>
            <li>
              演示Echart图表组件, Fabric绘制图形插件, Openlayer地图组件, Video视频播放器插件,
               FortAwesome字体图标, Websocket等组件的使用
            </li>
        </ul>`
		}
	}
}
</script>
