<template>
	<div class="fabricPage">
		<CustomBreadcrumb :breadcrumbList="breadcrumbList" />
		<TypingCard :content="context" id="howUse" title="使用说明" />
		<a-row :gutter="20">
			<a-col :span="12">
				<a-card
					hoverable
					:bordered="false"
					title="基础图形"
					:style="{ minHeight: 400 }"
					:id="1"
				>
					<canvas ref="canvas" />
				</a-card>
			</a-col>
			<a-col :span="12">
				<a-card
					hoverable
					:bordered="false"
					title="图片加载"
					:style="{ minHeight: 400 }"
					:id="1"
				>
					<canvas ref="canvas2" />
				</a-card>
			</a-col>
		</a-row>
	</div>
</template>

<script>
import { Card, Row, Col } from 'ant-design-vue'
import { fabric } from 'fabric'

import photo from '@/assets/setup.jpg'
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
	mounted() {
		this.init()
		this.init2()
	},
	data() {
		return {
			breadcrumbList: ['Fabric Demo'],
			context: `<ul class="card-ul">
            <li>Fabric使用html5 的canvas画板做一些图片旋转，拖动，放大，缩小和合成图片</li>
            <li>安装Fabric依赖， yarn add fabric</li>
            <li>具体使用参见<a href="http://fabricjs.com/" target="#">Fabric官网</a></li>
        </ul>`
		}
	},
	methods: {
		init() {
			fabric.Object.prototype.originX = fabric.Object.prototype.originY =
				'center'

			const canvas = new fabric.Canvas(this.$refs.canvas, {
				selection: false,
				width: 800,
				height: 400
			})
			// create a rectangle object
			const rect = new fabric.Rect({
				left: 100,
				top: 100,
				fill: '#D81B60',
				width: 50,
				height: 50,
				strokeWidth: 2,
				stroke: '#880E4F',
				rx: 10,
				ry: 10,
				// angle: 45,
				scaleX: 3,
				scaleY: 3,
				hasControls: true
			})

			canvas.add(rect)

			const circle1 = new fabric.Circle({
				radius: 65,
				fill: '#039BE5',
				left: 300,
				top: 100,
				stroke: 'red',
				strokeWidth: 3
			})

			const circle2 = new fabric.Circle({
				radius: 65,
				fill: '#4FC3F7',
				left: 500,
				top: 100,
				opacity: 0.7,
				stroke: 'blue',
				strokeWidth: 3,
				strokeUniform: true
			})

			canvas.add(circle1)
			canvas.add(circle2)
		},
		init2() {
			fabric.Object.prototype.originX = fabric.Object.prototype.originY =
				'center'
			const canvas = new fabric.Canvas(this.$refs.canvas2, {
				selection: false,
				width: 800,
				height: 400
			})
			fabric.Object.prototype.transparentCorners = false
			fabric.Image.fromURL(photo, function(img) {
				img.scale(0.3).set({
					left: 200,
					top: 200
					// angle: -15
					// clipTo: function(ctx) {
					//   ctx.arc(0, 0, radius, 0, Math.PI * 2, true)
					// }
				})
				canvas.add(img).setActiveObject(img)
			})
		}
	}
}
</script>

<style></style>
