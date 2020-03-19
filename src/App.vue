<template>
	<a-layout id="components-layout-demo-custom-trigger">
		<a-layout-sider :trigger="null" collapsible v-model="collapsed">
			<div class="logo" />
			<!-- 菜单 -->
			<a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
				<a-menu-item key="1">
					<router-link to="/">
						<a-icon type="user" />
						<span>Home</span>
					</router-link>
				</a-menu-item>
				<a-sub-menu>
					<span slot="title"
						><a-icon type="laptop" /><span v-if="!collapsed"
							>组件演示</span
						></span
					>
					<a-menu-item key="2">
						<router-link to="/about">
							<a-icon type="video-camera" />
							<span> About</span>
						</router-link>
					</a-menu-item>
				</a-sub-menu>
			</a-menu>
		</a-layout-sider>
		<a-layout>
			<!-- 头部 -->
			<a-layout-header style="background: #fff; padding: 0">
				<a-icon
					class="trigger"
					:type="collapsed ? 'menu-unfold' : 'menu-fold'"
					@click="changeCollapsed"
				/>
			</a-layout-header>
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
import { Layout, Menu, Icon } from 'ant-design-vue'
import { createNamespacedHelpers } from 'vuex'

const { Sider, Header, Content } = Layout
const { mapState, mapActions } = createNamespacedHelpers('app')

export default {
	components: {
		'a-layout': Layout,
		'a-layout-sider': Sider,
		'a-menu': Menu,
		'a-menu-item': Menu.Item,
		'a-icon': Icon,
		'a-layout-header': Header,
		'a-layout-content': Content,
		'a-sub-menu': Menu.SubMenu
	},
	// data() {
	// 	return {
	// 		collapsed: false
	// 	}
	// },
	computed: {
		// 在 `app` 中查找
		...mapState({
			collapsed: state => state.collapsed
		})
	},
	methods: {
		...mapActions(['changeCollapsed'])
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
