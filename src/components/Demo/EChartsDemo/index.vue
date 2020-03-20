<template>
	<div class="echartsPage">
		<CustomBreadcrumb :breadcrumbList="breadcrumbList" />
		<TypingCard :content="context" id="howUse" title="使用说明" />

		<a-row :gutter="20">
			<a-col :span="12">
				<a-card
					hoverable
					:bordered="false"
					title="基础柱状图"
					:style="{ minHeight: 400 }"
					:id="1"
				>
					<div ref="column" :style="{ width: '95%', height: '400px' }" />
				</a-card>
			</a-col>

			<a-col :span="12">
				<a-card
					hoverable
					:bordered="false"
					title="堆积条形图"
					:style="{ minHeight: 400 }"
					:id="2"
				>
					<div ref="echarts4" :style="{ width: '95%', height: '400px' }" />
				</a-card>
			</a-col>
		</a-row>
	</div>
</template>
<script>
import { Card, Row, Col } from 'ant-design-vue'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/heatmap'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/visualMap'
import 'echarts/extension/bmap/bmap'

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
		this.initColumnEcharts()
		this.initStack()
	},
	data() {
		return {
			breadcrumbList: ['ECharts Demo'],
			context: `<ul class="card-ul">
            <li>ECharts，一个使用 JavaScript 实现的开源可视化库，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等），底层依赖轻量级的矢量图形库 ZRender，提供直观，交互丰富，可高度个性化定制的数据可视化图表。</li>
            <li>安装Echarts依赖， yarn add echarts</li>
            <li>使用echarts bmap需要在html中添加百度地图的密钥,以及在文件中引入
            import 'echarts/lib/component/visualMap'与
            import 'echarts/extension/bmap/bmap'</li>
            <li>具体使用参见<a href="https://echarts.baidu.com/" target="#">echarts官网</a></li>
        </ul>`
		}
	},
	methods: {
		initColumnEcharts() {
			const myChart = echarts.init(this.$refs.column)

			myChart.setOption({
				title: {
					text: 'ECharts 柱状图示例'
				},
				tooltip: {},
				xAxis: {
					data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
				},
				yAxis: {},
				series: [
					{
						name: '销量',
						type: 'bar',
						data: [5, 20, 36, 10, 10, 20]
					}
				]
			})
			window.addEventListener('resize', function() {
				myChart.resize()
			})
		},
		initStack() {
			const myChart = echarts.init(this.$refs.echarts4)
			const option = {
				title: {
					text: 'ECharts 堆积条形图示例'
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						// 坐标轴指示器，坐标轴触发有效
						type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
					}
				},
				// legend: {
				//   data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
				// },
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				xAxis: {
					type: 'value'
				},
				yAxis: {
					type: 'category',
					data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
				},
				series: [
					{
						name: '直接访问',
						type: 'bar',
						stack: '总量',
						label: {
							normal: {
								show: true,
								position: 'insideRight'
							}
						},
						data: [320, 302, 301, 334, 390, 330, 320]
					},
					{
						name: '邮件营销',
						type: 'bar',
						stack: '总量',
						label: {
							normal: {
								show: true,
								position: 'insideRight'
							}
						},
						data: [120, 132, 101, 134, 90, 230, 210]
					},
					{
						name: '联盟广告',
						type: 'bar',
						stack: '总量',
						label: {
							normal: {
								show: true,
								position: 'insideRight'
							}
						},
						data: [220, 182, 191, 234, 290, 330, 310]
					},
					{
						name: '视频广告',
						type: 'bar',
						stack: '总量',
						label: {
							normal: {
								show: true,
								position: 'insideRight'
							}
						},
						data: [150, 212, 201, 154, 190, 330, 410]
					},
					{
						name: '搜索引擎',
						type: 'bar',
						stack: '总量',
						label: {
							normal: {
								show: true,
								position: 'insideRight'
							}
						},
						data: [820, 832, 901, 934, 1290, 1330, 1320]
					}
				]
			}
			myChart.setOption(option)
			window.addEventListener('resize', function() {
				myChart.resize()
			})
		}
	}
}
</script>
<style lang="less" scoped>
@import './index.module.less';
</style>
