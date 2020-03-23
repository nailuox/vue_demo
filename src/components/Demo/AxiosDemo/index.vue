<template>
	<div class="fabricPage">
		<CustomBreadcrumb :breadcrumbList="['Axios Demo']" />
		<TypingCard :content="context" id="howUse" title="使用说明" />
		<a-row :gutter="20">
			<a-col :span="24">
				<a-card :title="'表格 - template 风格写法 >>>>>>>>>>>>>>> ' + data.title">
					<a-table
						:dataSource="data.subjects"
						bordered
						rowKey="id"
						:pagination="false"
						:loading="loading"
					>
						<a-column dataIndex="title" title="电影名称" />
						<a-column dataIndex="genres" title="电影类型">
							<template slot-scope="genres">
								{{ genres.map(x => x) }}
							</template>
						</a-column>
						<a-column dataIndex="directors" title="主演">
							<template slot-scope="directors">
								{{ directors.map(x => x.name) }}
							</template>
						</a-column>
						<a-column dataIndex="mainland_pubdate" title="公映时间" />
						<a-column dataIndex="" title="操作">
							<template slot-scope="text, record">
								<span>
									<!-- <a-button>Action 一 {{ record.title }}</a-button> -->
									<a-divider type="vertical" />
									<a-popconfirm
										title="确认删除?"
										@confirm="handleDelete(record.id)"
									>
										<a-button type="primary">Delete</a-button>
									</a-popconfirm>
								</span>
							</template>
						</a-column>
					</a-table>
				</a-card>
			</a-col>
		</a-row>
	</div>
</template>

<script>
import {
	Row,
	Col,
	Card,
	Table,
	Popconfirm,
	Divider,
	Button
} from 'ant-design-vue'
import { createNamespacedHelpers } from 'vuex'

import CustomBreadcrumb from '@/common/components/CustomBreadcrumb'
import TypingCard from '@/common/components/TypingCard'

const { mapState, mapActions } = createNamespacedHelpers('axios')
const { Column } = Table

export default {
	components: {
		CustomBreadcrumb,
		TypingCard,
		'a-row': Row,
		'a-col': Col,
		'a-card': Card,
		'a-table': Table,
		'a-column': Column,
		'a-divider': Divider,
		'a-popconfirm': Popconfirm,
		'a-button': Button
	},
	mounted() {
		this.getData().then(() => {
			this.loading = false
		})
	},
	data() {
		return {
			context: `<ul class="card-ul">
            <li>Axios主要作用是调取后台数据，功能与传统的Ajax类似，与JQuery Ajax不同的是Axios是Promise的实现版本，符合最新的ES规范</li>
            <li>安装Axios依赖， yarn add axios</li>
            <li>以下数据来自Axios调用获取</li>
            <li>具体使用参见<a href="https://www.kancloud.cn/yunye/axios/234845" target="#">Axios官网</a></li>
				</ul>`,
			loading: true
		}
	},
	computed: {
		...mapState({
			data: state => state.data
		})
	},
	methods: {
		// 将 `this.getData()` 映射为 `this.$store.dispatch('getData')`
		...mapActions(['getData', 'handleDelete'])
	}
}
</script>

<style></style>
