<template>
	<a-layout id="components-layout-demo-custom-trigger">
		<!-- 菜单 -->
		<LeftSide />
		<a-layout>
			<!-- 头部 -->
			<Header />
			<!-- 内容 -->
			<a-layout-content
				:style="{
					margin: '24px 16px',
					padding: '10px 20px',
					background: '#fff',
					minHeight: '280px'
				}"
			>
				<router-view></router-view>
			</a-layout-content>
		</a-layout>
	</a-layout>
</template>

<script>
import { Layout } from 'ant-design-vue'

import LeftSide from '@/components/blocks/LeftSide'
import Header from '@/components/blocks/Header'

export default {
	components: {
		'a-layout': Layout,
		'a-layout-content': Layout.Content,
		LeftSide,
		Header
	}
}
</script>

<style>
#components-layout-demo-custom-trigger {
	height: 100%;
}
#components-layout-demo-custom-trigger .trigger {
	font-size: 18px;
	line-height: 64px;
	padding: 0 24px;
	cursor: pointer;
	transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
	color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
	height: 32px;
	background: rgba(255, 255, 255, 0.2);
	margin: 16px;
}
</style>
