<template>
	<a-card
		hoverable
		:bordered="false"
		class="cardItem"
		:title="title"
		:style="{ minHeight: 136 }"
		:id="id"
	>
		<div :style="{ display: 'none' }" ref="source" v-html="content" />
		<div ref="output" />
	</a-card>
</template>

<script>
import { Card } from 'ant-design-vue'
import Typing from './typing'

export default {
	name: 'TypingCard',
	components: {
		'a-card': Card
	},
	props: {
		title: {
			type: String,
			default: '何时使用'
		},
		content: {
			type: String,
			default: ''
		},
		id: {}
	},
	mounted() {
		const typing = new Typing({
			source: this.$refs.source,
			output: this.$refs.output,
			delay: 30
		})
		typing.start()
	}
}
</script>

<style lang="less" scoped>
  @import './index.module.less';
</style>
