<template>
	<div class="about">
		<CustomBreadcrumb :breadcrumbList="breadcrumbList" /> 
		<h1>About</h1>
	</div>
</template>
<script>
import CustomBreadcrumb from '@/common/components/CustomBreadcrumb'

export default {
	name: 'About',
	components: {
		CustomBreadcrumb
	},
	data() {
		return {
			breadcrumbList: ['about']
		}
	}
}
</script>
