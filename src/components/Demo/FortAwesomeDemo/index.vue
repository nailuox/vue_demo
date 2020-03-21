<template>
	<div class="fortawesomePage">
		<CustomBreadcrumb :breadcrumbList="breadcrumbList" />
		<TypingCard :content="context" id="howUse" title="使用说明" />

		<a-row :gutter="20">
			<a-col :span="24">
				<a-card
					hoverable
					:bordered="false"
					title="基础图标"
					:style="{ minHeight: 400 }"
					:id="1"
				>
					<i class="fa fa-address-book fa-2x" :aria-hidden="true" />
					<div class="listGroup">
						<a class="listGroupItem" href="/">
							<i class="fa fa-home fa-fw" :aria-hidden="true" />
							&nbsp; 首页
						</a>
						<a class="listGroupItem" href="http://www.fontawesome.com.cn/">
							<i class="fa fa-book fa-fw" :aria-hidden="true" />
							&nbsp; 关于我们
						</a>
					</div>
					<ul class="fa-ul">
						<li>
							<i class="fa-li fa fa-check-square" />
							使用列表类图标
						</li>
						<li>
							<i class="fa-li fa fa-check-square" />
							轻松的替换
						</li>
						<li>
							<i class="fa-li fa fa-spinner fa-spin" />
							无序列表
						</li>
						<li>
							<i class="fa-li fa fa-square" />
							中的默认图标
						</li>
					</ul>

					<i class="fa fa-spinner fa-spin fa-3x fa-fw" />
					<span class="sr-only">Loading1...</span>

					<i class="fa fa-cog fa-spin fa-3x fa-fw" />
					<span class="sr-only">Loading4...</span>

					<i class="fa fa-spinner fa-pulse fa-3x fa-fw" />
					<span class="sr-only">Loading5...</span>
				</a-card>
			</a-col>
		</a-row>
	</div>
</template>

<script>
import { Card, Row, Col } from 'ant-design-vue'
import '@fortawesome/fontawesome-free/css/all.css'

import CustomBreadcrumb from '@/common/components/CustomBreadcrumb'
import TypingCard from '@/common/components/TypingCard'

export default {
	components: {
		CustomBreadcrumb,
		TypingCard,
		'a-card': Card,
		'a-row': Row,
		'a-col': Col
	},
	data() {
		return {
			breadcrumbList: ['FortAwesome Demo'],
			context: `<ul class="card-ul">
            <li>Font Awesome提供可缩放的矢量图标，可以使用CSS所提供的所有特性对它们进行更改，包括：大小、颜色、阴影或者其它任何支持的效果。</li>
            <li>安装FortAwesome依赖， yarn add @fortawesome/fontawesome-free</li>
            <li>js文件中引入 import '@fortawesome/fontawesome-free/css/all.css'</li>
            <li>具体使用参见<a href="http://www.fontawesome.com.cn/" target="#">FortAwesome官网</a></li>
        </ul>`
		}
	}
}
</script>

<style lang="less" scoped>
@import './index.module.less';
</style>
