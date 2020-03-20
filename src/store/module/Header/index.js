import moment from 'moment'

import { CHANGE_COLLAPSED, REFRESH_TIME } from './mutation-types'

// initial state
const state = {
	collapsed: false,
	time: moment().format('YYYY-MM-DD HH:mm:ss')
}

// getters
const getters = {}

// actions
// Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作
// 异步逻辑都应该封装到 action 里面
const actions = {
	changeCollapsed({ commit, state }) {
		commit({ type: CHANGE_COLLAPSED, collapsed: !state.collapsed })
	},
	refreshTime({ commit }) {
		commit({ type: REFRESH_TIME })
	}
}

// mutations 是更改状态的唯一方法，并且这个过程是同步的
const mutations = {
	[CHANGE_COLLAPSED](state, paylod) {
		state.collapsed = paylod.collapsed
	},
	[REFRESH_TIME](state) {
		state.time = moment().format('YYYY-MM-DD HH:mm:ss')
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
