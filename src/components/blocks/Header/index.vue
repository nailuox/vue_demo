<template>
	<a-layout-header class="header">
		<a-icon
			class="trigger"
			:type="collapsed ? 'menu-unfold' : 'menu-fold'"
			@click="changeCollapsed"
		/>
		<span class="title">Vue示例项目</span>
		<div class="usernameBox">
			<a-avatar icon="user" />
			<span>Admin</span>
			<a-icon type="logout" @click="logout" />
		</div>
		<div class="timeBox">{{ time }}</div>
	</a-layout-header>
</template>

<script>
import { Layout, Icon, Avatar, message } from 'ant-design-vue'
import { createNamespacedHelpers } from 'vuex'
import { clearInterval } from 'timers'

const { mapState, mapActions } = createNamespacedHelpers('header')

export default {
	components: {
		'a-layout-header': Layout.Header,
		'a-icon': Icon,
		'a-avatar': Avatar
	},
	data() {
		return {
			timer: null
		}
	},
	mounted() {
		this.timer = setInterval(this.refreshTime, 1000)
	},
	beforeDestroy() {
		clearInterval(this.timer)
	},
	computed: {
		// 在 `header` 中查找
		...mapState({
			collapsed: state => state.collapsed,
			time: state => state.time
		})
	},
	methods: {
		...mapActions(['changeCollapsed', 'refreshTime']),
		logout() {
			message.info('this is test')
		}
	}
}
</script>

<style lang="less" scoped>
@import './index.module.less';
</style>
