// antd 自定义主题
module.exports = {
	// 相对路径 ('./')，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径
	publicPath: process.env.NODE_ENV === 'production' ? '/vue_demo/' : '/',
	css: {
		loaderOptions: {
			less: {
				modifyVars: {
					'primary-color': '#1DA57A',
					'link-color': '#1DA57A',
					'border-radius-base': '2px'
				},
				javascriptEnabled: true
			}
		}
	},
	devServer: {
		// port: 7788,
		proxy: {
			'/data': {
				changeOrigin: true, //允许跨域
				target:
					'http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10'
			}
		}
	}
}
