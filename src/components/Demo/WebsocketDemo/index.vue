<template>
	<div class="websocketDemoPage">
		<CustomBreadcrumb :breadcrumbList="breadcrumbList" />
		<TypingCard :content="context" id="howUse" title="使用说明" />
		<a-row :gutter="20">
			<a-col :span="24">
				<a-card
					hoverable
					:bordered="false"
					title="Websocket"
					:style="{ minHeight: 400 }"
					:id="1"
				>
					<a-table
						:dataSource="users"
						bordered
						rowKey="id"
						:pagination="false"
						:loading="loading"
					>
						<a-column dataIndex="id" title="I D" />
						<a-column dataIndex="username" title="姓名" />
						<a-column dataIndex="sex" title="性别" />
						<a-column dataIndex="age" title="年龄" />
						<a-column dataIndex="hobby" title="爱好" />
					</a-table>
				</a-card>
			</a-col>
		</a-row>
	</div>
</template>

<script>
import { Card, Row, Col, Table, message } from 'ant-design-vue'
import ReconnectingWebSocket from 'reconnectingwebsocket'

import CustomBreadcrumb from '@/common/components/CustomBreadcrumb'
import TypingCard from '@/common/components/TypingCard'

const { Column } = Table

export default {
	components: {
		CustomBreadcrumb,
		TypingCard,
		'a-card': Card,
		'a-row': Row,
		'a-col': Col,
		'a-table': Table,
		'a-column': Column
	},
	mounted() {
		this.fetchData()
	},
	beforeDestroy() {
		if (!this.ws) {
			this.ws.close()
		}
	},
	data() {
		return {
			breadcrumbList: ['Websocket Demo'],
			context: `<ul class="card-ul">
            <li>Websocket允许服务端主动向客户端推送数据。在WebSocket API中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。</li>
            <li>安装Websocket依赖， yarn add reconnectingwebsocket</li>
            <li>具体使用参见<a href="https://www.npmjs.com/package/reconnectingwebsocket" target="#">reconnectingwebsocket npm</a></li>
            <li>以下数据通过<a href="http://coolaf.com/tool/chattest" target="#">websocket在线测试地址</a>发送并获取</li>
        </ul>`,
			loading: true,
			users: [],
			ws: null,
			connectedError: 0
		}
	},
	methods: {
		fetchData() {
			this.ws = new ReconnectingWebSocket(
				'ws://123.207.136.134:9010/ajaxchattest',
				null,
				{ debug: true, reconnectInterval: 30000 }
			)
			this.ws.onerror = () => {
				this.ws.close()
				message.error('websocket连接出错!')
				setTimeout(() => {
					this.$router.go(-1)
				}, 2000)
			}

			// console.log(this.ws)
			const data = require('./data.json')
			this.ws.onopen = () => {
				window.console.log('Connection open ...')
				this.ws.send(JSON.stringify(data))
			}
			this.ws.onmessage = data => {
				window.console.log()
				const usersString = data.data.substr(0, data.data.indexOf(']') + 1)
				const users = JSON.parse(usersString)
				this.loading = false
				this.users = users
        this.ws.close()
        window.console.log('Connection close ...')
			}
		}
	}
}
</script>

<style></style>
