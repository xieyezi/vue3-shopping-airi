import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
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
