import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../components/Dashboard'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Dashboard',
		component: Dashboard
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../components/About.vue')
	},
	{
		path: '*',
		name: 'Dashboard',
		component: Dashboard
	}
]

const router = new VueRouter({
	routes
})

export default router
