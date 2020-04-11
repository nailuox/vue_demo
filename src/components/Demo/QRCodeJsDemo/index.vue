<template>
	<div class="qrcodePage">
		<CustomBreadcrumb :breadcrumbList="breadcrumbList" />
		<TypingCard :content="context" id="howUse" title="使用说明" />
		<a-row :gutter="20">
			<a-col :span="24">
				<a-card
					hoverable
					:bordered="false"
					title="二维码生成器"
					:style="{ minHeight: 400 }"
					:id="1"
				>
					<a-row :gutter="20">
						<a-col :span="24">
							<a-input v-model="codeValue" @change="makeCode" class="qrInput" />
						</a-col>
						<a-col :span="24">
							<div class="qrcode" ref="qrcodeRef" @click="saveCode"></div>
						</a-col>
					</a-row>
				</a-card>
			</a-col>
		</a-row>
	</div>
</template>

<script>
import { Card, Row, Col, Input } from 'ant-design-vue'

import CustomBreadcrumb from '@/common/components/CustomBreadcrumb'
import TypingCard from '@/common/components/TypingCard'
import QRCode from 'qrcodejs2'

export default {
	components: {
		CustomBreadcrumb,
		TypingCard,
		'a-card': Card,
		'a-row': Row,
		'a-col': Col,
		'a-input': Input
	},
	mounted() {
		this.QRCode()
	},
	data() {
		return {
			breadcrumbList: ['QRCodeJs Demo'],
			context: `<ul class="card-ul">
            <li>QRCode.js是一个实现生成二维码(QRCode)的js插件。 QRCode.js有着良好的跨浏览器兼容性（高版本使用HTML5的 Canvas，低版本IE使用table元素绘制），而且QRCode.js没有任何依赖。</li>
            <li>安装QRCodeJs依赖， yarn add qrcodejs2</li>
            <li>具体使用参见<a href="https://github.com/davidshimjs/qrcodejs" target="#">qrcodejs github</a> ,
            <a href="http://code.ciaoca.com/javascript/qrcode/" target="#">qrcodejs 文档</a></li>
				</ul>`,
			codeValue: 'https://www.baidu.com/',
			qrcode: null
		}
	},
	methods: {
		QRCode() {
			// 设置参数方式
			this.qrcode = new QRCode(this.$refs.qrcodeRef, {
				text: this.codeValue,
				width: 256,
				height: 256,
				colorDark: '#000000',
				colorLight: '#ffffff',
				correctLevel: QRCode.CorrectLevel.H
			})
		},
		makeCode() {
			this.qrcode.makeCode(this.codeValue)
		},
		saveCode() {
			// 获取canvas标签
			const canvas = this.$refs.qrcodeRef.getElementsByTagName('canvas')
			const a = document.createElement('a')
			a.href = canvas[0].toDataURL('image/png')
			a.download = '二维码下载'
			a.click()
		}
	}
}
</script>

<style lang="less">
.qrcode {
	display: inline-block;

	// img {
	// 	background-color: rgba(0, 247, 255, 0.507); //设置白色背景色
	// 	padding: 6px; // 利用padding的特性，挤出白边
	// }
}

.qrInput {
	max-width: 256px;
	margin-bottom: 20px;
}
</style>
