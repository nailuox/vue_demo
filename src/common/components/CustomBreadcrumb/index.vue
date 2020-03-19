<template>
	<a-breadcrumb :style="{ marginBottom: '16px' }">
		<a-breadcrumb-item>
			<router-link to="/">
				<a-icon
					type="home"
					:style="{ fontSize: '20px', color: '#1DA57A', marginTop: '25px' }"
				/>首页
			</router-link>
		</a-breadcrumb-item>

		<a-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
			<router-link to="item.to" v-if="typeof item === 'object'">
				{{ item.title }}
			</router-link>
			<span v-else>
				{{ item }}
			</span>
		</a-breadcrumb-item>
	</a-breadcrumb>
</template>

<script>
import { Breadcrumb, Icon } from 'ant-design-vue'
import './index.module.less'

export default {
	name: 'CustomBreadcrumb',
	components: {
		'a-breadcrumb': Breadcrumb,
		'a-breadcrumb-item': Breadcrumb.Item,
		'a-icon': Icon
	},
	props: {
		breadcrumbList: {
			// type: Array,
			// default: []
		}
	}
}
</script>

<style></style>
