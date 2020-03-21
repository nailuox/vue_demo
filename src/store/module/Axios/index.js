import { message } from 'ant-design-vue'

import { AXIOS_GET_DATA, AXIOS_DELETE_DATA } from './mutation-types'
import Axios from '@/common/Axios'

// initial state
const state = {
	data: { subjects: [] }
}

// getters
const getters = {}

// actions
// Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作
// 异步逻辑都应该封装到 action 里面
const actions = {
	async getData({ commit }) {
		let data = {}
		try {
			const res = await Axios.get('/data.json')
			data = res.data ? res.data : []
		} catch (e) {
			message.error('请求数据出错：' + e)
			return
		}
		commit({ type: AXIOS_GET_DATA, data })
	},

	handleDelete(context, id) {
		context.commit({ type: AXIOS_DELETE_DATA, id })
	}
}

// mutations 是更改状态的唯一方法，并且这个过程是同步的
const mutations = {
	[AXIOS_GET_DATA](state, paylod) {
		state.data = paylod.data
	},
	[AXIOS_DELETE_DATA](state, paylod) {
		const newData = state.data.subjects.filter(x => x.id !== paylod.id)
		state.data.subjects = [...newData]
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
