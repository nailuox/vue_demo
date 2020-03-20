import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../components/Dashboard'
import OpenlayersDemo from '../components/Demo/OpenlayersDemo'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Dashboard',
		component: Dashboard
	},
	{
		path: '/echartsDemo',
		name: 'EChartsDemo',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import('../components/Demo/EChartsDemo')
	},
	{
		path: '/openlayersDemo',
		component: OpenlayersDemo
	},
	{
		path: '*',
		name: 'Dashboard',
		component: Dashboard
	}
]

const router = new VueRouter({
  mode: 'history',
	routes
})

export default router
