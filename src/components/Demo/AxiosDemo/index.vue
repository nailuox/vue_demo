<template>
	<div class="fabricPage">
		<CustomBreadcrumb :breadcrumbList="['Axios Demo']" />
		<TypingCard :content="context" id="howUse" title="使用说明" />
		<a-row :gutter="20">
			<a-col :span="24">
				<a-card title="表格 - template 风格写法">
					<a-table :dataSource="data" bordered rowKey="id">
						<a-column dataIndex="id" title="id">
							<template slot-scope="id">
								{{ id }}
							</template>
						</a-column>
						<a-column dataIndex="username" title="姓名" />
						<a-column dataIndex="sex" title="性别" />
						<a-column dataIndex="age" title="年龄" />
						<a-column dataIndex="hobby" title="爱好" />
						<a-column dataIndex="" title="操作">
							<template slot-scope="text, record">
								<span>
									<a-button>Action 一 {{ record.username }}</a-button>
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
		this.getData()
	},
	data() {
		return {
			context: `<ul class="card-ul">
            <li>Axios主要作用是调取后台数据，功能与传统的Ajax类似，与JQuery Ajax不同的是Axios是Promise的实现版本，符合最新的ES规范</li>
            <li>安装Axios依赖， yarn add axios</li>
            <li>以下数据来自Axios调用获取</li>
            <li>具体使用参见<a href="https://www.kancloud.cn/yunye/axios/234845" target="#">Axios官网</a></li>
        </ul>`
		}
	},
	computed: {
		...mapState({
			data: state => state.data
		})
	},
	methods: {
		...mapActions(['getData', 'handleDelete'])
	}
}
</script>

<style></style>
