import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/home/Home.vue')
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/login/Login.vue')
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router