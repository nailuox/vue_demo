import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	//
	state: {},
	// mutation 是更改状态的唯一方法，并且这个过程是同步的
	mutations: {},
	// 异步逻辑都应该封装到 action 里面
	actions: {},
	modules: {}
})
