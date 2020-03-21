import Vue from 'vue'
import Vuex from 'vuex'

import header from './module/Header'
import axios from './module/Axios'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		header,
		axios
	}
})
