// antd 自定义主题
module.exports = {
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
        changeOrigin: true,//允许跨域
        target: 'http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10'
      }
    }
  }
}
