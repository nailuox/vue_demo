<template>
	<a-layout-sider :trigger="null" collapsible v-model="collapsed">
		<div class="logo" />
		<a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
			<a-menu-item key="1">
				<router-link to="/">
					<a-icon type="user" />
					<span>首页</span>
				</router-link>
			</a-menu-item>
			<a-sub-menu>
				<span slot="title">
					<a-icon type="laptop" />
					<span v-if="!collapsed">组件演示</span>
				</span>
				<a-menu-item key="2">
					<router-link to="/echartsDemo">
						<a-icon type="pie-chart" />
						<span>ECharts</span>
					</router-link>
				</a-menu-item>
				<a-menu-item key="3">
					<router-link to="/openlayersDemo">
						<a-icon type="heat-map" />
						<span>Openlayers</span>
					</router-link>
				</a-menu-item>
				<a-menu-item key="4">
					<router-link to="/videoDemo">
						<a-icon type="video-camera" />
						<span>Video</span>
					</router-link>
				</a-menu-item>
				<a-menu-item key="5">
					<router-link to="/fabricDemo">
						<a-icon type="highlight" />
						<span>Fabric</span>
					</router-link>
				</a-menu-item>
				<a-menu-item key="6">
					<router-link to="/fortAwesomeDemo">
						<a-icon type="font-colors" />
						<span>FortAwesome</span>
					</router-link>
				</a-menu-item>
				<a-menu-item key="7">
					<router-link to="/axiosDemo">
						<a-icon type="api" />
						<span>Axios</span>
					</router-link>
				</a-menu-item>
			</a-sub-menu>
		</a-menu>
	</a-layout-sider>
</template>

<script>
import { Layout, Menu, Icon } from 'ant-design-vue'
import { mapState } from 'vuex'

const { Sider } = Layout

export default {
	components: {
		'a-layout-sider': Sider,
		'a-menu': Menu,
		'a-menu-item': Menu.Item,
		'a-icon': Icon,
		'a-sub-menu': Menu.SubMenu
	},
	computed: {
		...mapState({
			collapsed: state => state.header.collapsed
		})
	}
}
</script>

<style></style>
