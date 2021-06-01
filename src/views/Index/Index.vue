<template>
	<Home v-if="active === 0"></Home>
	<Category v-if="active === 1"></Category>
	<Order v-if="active === 2"></Order>
	<User v-if="active === 3"></User>

	<van-tabbar v-model="active" class="bg-white dark:bg-xieyezi-black">
		<van-tabbar-item v-for="item in icons" :key="item.name" class="bg-white dark:bg-xieyezi-black">
			<span class="text-xs font-light text-gray-700 dark:text-gray-400">{{ item.name }}</span>
			<template #icon="props">
				<img :src="props.active ? item.active : item.inactive" />
			</template>
		</van-tabbar-item>
	</van-tabbar>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

import homeOnPng from '@assets/images/tabbar/home_on.png'
import homeOffPng from '@assets/images/tabbar/home_off.png'
import categoryOnPng from '@assets/images/tabbar/category_on.png'
import categoryOffPng from '@assets/images/tabbar/category_off.png'
import orderOnPng from '@assets/images/tabbar/order_on.png'
import orderOffPng from '@assets/images/tabbar/order_off.png'
import userOnPng from '@assets/images/tabbar/user_on.png'
import userOffPng from '@assets/images/tabbar/user_off.png'
import Home from '../home/Home.vue'
import Category from '../category/Category.vue'
import Order from '../order/Order.vue'
import User from '../user/User.vue'

export default defineComponent({
	name: 'Index',
	components: {
		Home,
		Category,
		Order,
		User
	},
	setup() {
		let active = ref(0)
		const icons = reactive([
			{
				name: '首页',
				link: '/home',
				active: homeOnPng,
				inactive: homeOffPng
			},
			{
				name: '分类',
				link: '/login',
				active: categoryOnPng,
				inactive: categoryOffPng
			},
			{
				name: '订单',
				link: '/login',
				active: orderOnPng,
				inactive: orderOffPng
			},
			{
				name: '我的',
				link: '/home',
				active: userOnPng,
				inactive: userOffPng
			}
		])

		return {
			active,
			icons
		}
	}
})
</script>
