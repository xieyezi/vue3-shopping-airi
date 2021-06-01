import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Index',
		component: () => import('../views/Index/Index.vue')
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/login/Login.vue')
	},
	{
		path: '/home',
		name: 'Home',
		component: () => import('../views/home/Home.vue')
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
