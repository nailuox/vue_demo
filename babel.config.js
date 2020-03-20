// antd样式按需加载
module.exports = {
	presets: ['@vue/app'],
	plugins: [
		[
			'import',
			{ libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true }
		]
	]
}
