<template>
	<a-layout-header style="background: #fff; padding: 0">
		<a-icon
			class="trigger"
			:type="collapsed ? 'menu-unfold' : 'menu-fold'"
			@click="changeCollapsed"
		/>
	</a-layout-header>
</template>

<script>
import { Layout, Icon } from 'ant-design-vue'
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('header')

export default {
	components: {
		'a-layout-header': Layout.Header,
		'a-icon': Icon
	},
	data() {
		return {
			// ...mapState({
			// 	collapsed: state => {
			//     window.console.log(state)
			//     return state.collapsed
			//   }
			// })
		}
	},
	computed: {
		// 在 `header` 中查找
		...mapState({
			collapsed: state => state.collapsed
		})
	},
	methods: {
		...mapActions(['changeCollapsed'])
	}
}
</script>

<style></style>
