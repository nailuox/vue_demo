<template>
	<div class="olPage">
		<CustomBreadcrumb :breadcrumbList="breadcrumbList" />
		<TypingCard :content="context" id="howUse" title="使用说明" />

		<a-row :gutter="20">
			<a-col :span="24">
				<a-card
					hoverable
					:bordered="false"
					title="基于KML格式数据生成热力图"
					:style="{ minHeight: 400 }"
					:id="1"
				>
					<div
						id="map"
						:style="{
							width: '100%',
							height: '400px',
							position: 'relative'
						}"
					/>
					<form>
						<label>radius size</label>
						<input
							ref="radius"
							type="range"
							:min="1"
							:max="50"
							:step="1"
							:value="5"
						/>
						<label>blur size</label>
						<input
							ref="blur"
							type="range"
							:min="1"
							:max="50"
							:step="1"
							:value="15"
						/>
					</form>
				</a-card>
			</a-col>
		</a-row>
		<a-row :gutter="20">
			<a-col :span="24">
				<a-card
					hoverable
					:bordered="false"
					title="通过坐标点和权值生成热力图"
					:style="{ minHeight: 400 }"
					:id="2"
				>
					<div
						id="map2"
						:style="{
							width: '100%',
							height: '400px',
							position: 'relative'
						}"
					/>
				</a-card>
			</a-col>
		</a-row>
	</div>
</template>

<script>
import { Card, Row, Col } from 'ant-design-vue'
import Map from 'ol/Map'
import View from 'ol/View'
import OSM from 'ol/source/OSM'
import {
	Heatmap as HeatmapLayer,
	Tile as TileLayer
	// Vector as VectorLayer
} from 'ol/layer'
import VectorSource from 'ol/source/Vector'
import KML from 'ol/format/KML'
import Feature from 'ol/Feature'
import { Point } from 'ol/geom'
import { transform } from 'ol/proj'
import Stamen from 'ol/source/Stamen'
import 'ol/ol.css'

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
			breadcrumbList: ['Openlayers Demo'],
			context: `<ul class="card-ul">
            <li>OpenLayers 是一个专为Web GIS 客户端开发提供的JavaScript 类库包，用于实现标准格式发布的地图数据访问。openlayers2与openlayers3以后的API完全不同，目前版本是5.3.0</li>
            <li>安装OpenLayer依赖， yarn add ol</li>
            <li>具体使用参见<a href="https://openlayers.org/" target="#">OpenLayer官网</a></li>
            <li>使用地图时注意地图的<a href="http://weilin.me/ol3-primer/ch04/04-03.html" target="#">坐标系</a>是哪种,示例中两个地图坐标系为3857</li>
            <li>配合热力图的使用</li>
        </ul>`,
			map: null,
			map2: null,
			kmlUrl:
				'https://openlayers.org/en/latest/examples/data/kml/2012_Earthquakes_Mag5.kml'
		}
	},
	methods: {
		init() {
			const blur = this.$refs.blur
			const radius = this.$refs.radius
			const vector = new HeatmapLayer({
				source: new VectorSource({
					url: this.kmlUrl,
					format: new KML({
						extractStyles: false
					})
				}),
				blur: parseInt(blur.value, 10),
				radius: parseInt(radius.value, 10),
				weight: function(feature) {
					// 2012_Earthquakes_Mag5.kml stores the magnitude of each earthquake in a
					// standards-violating <magnitude> tag in each Placemark.  We extract it from
					// the Placemark's name instead.
					var name = feature.get('name')
					var magnitude = parseFloat(name.substr(2))
					return magnitude - 5
				}
			})
			this.map = new Map({
				target: 'map',
				layers: [
					new TileLayer({
						source: new OSM()
					}),
					vector
				],
				view: new View({
					center: [0, 0],
					zoom: 2
				})
			})

			const blurHandler = function() {
				vector.setBlur(parseInt(blur.value, 10))
			}
			blur.addEventListener('input', blurHandler)
			blur.addEventListener('change', blurHandler)

			const radiusHandler = function() {
				vector.setRadius(parseInt(radius.value, 10))
			}
			radius.addEventListener('input', radiusHandler)
			radius.addEventListener('change', radiusHandler)
		},
		init2() {
			//创建热力图层
			const vector = new HeatmapLayer({
				gradient: ['#00f', '#0ff', '#0f0', '#ff0', '#f00'],
				blur: 10,
				radius: 10,
				shadow: 250,
				source: new VectorSource({
					wrapX: false
				})
			})
			this.map2 = new Map({
				target: 'map2',
				layers: [
					new TileLayer({
						source: new Stamen({
							layer: 'toner'
						})
					}),
					vector
				],
				view: new View({
					center: transform([121.586159, 38.9015801], 'EPSG:4326', 'EPSG:3857'),
					zoom: 17
				})
			})
			//创建要素
			let features = []
			const _dataArray = require('./data.json')
			// window.console.log(_dataArray)
			_dataArray.forEach(data => {
				const _feature = new Feature({
					geometry: new Point(
						transform(data.coordinate, 'EPSG:4326', 'EPSG:3857')
					),
					data: data,
					weight: data.weight
				})
				features.push(_feature)
			})

			//将要素添加到热力图层的source中
			vector.getSource().addFeatures(features)
		}
	}
}
</script>

<style lang="less" scoped>
@import './index.module.less';
</style>
