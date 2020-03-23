import axios from 'axios'

import Constant from '@/common/Constant'

axios.interceptors.request.use(
	config => {
		const token = sessionStorage.getItem(Constant.storageKeys.token)
		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}
		if (process.env.NODE_ENV === 'production') {
      config.url = '/vue_demo' + config.url
		}
		return config
	},
	error => {
		return Promise.reject(error)
	}
)

axios.interceptors.response.use(
	data => {
		return Promise.resolve(data)
	},
	error => {
		const errMsg =
			(error.response &&
				error.response.data &&
				(error.response.data.message ||
					error.response.data.msg ||
					error.response.data.errors)) ||
			error

		return Promise.reject(errMsg)
	}
)

export default axios
