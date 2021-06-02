<template>
	<div class="w-full h-64 bg-white dark:bg-xieyezi-content shadow-xs rounded-md p-2" @click="toDetail(goodItem)">
		<img v-lazy="goodItem.goodsPicUrl" :alt="goodItem.goodsName" />
		<p class="pt-3 text-base text-gray-700 font-normal dark:text-gray-200 dark:text-opacity-90">
			{{ goodItem.goodsName }}
		</p>
		<p class="text-xs text-gray-700 font-light dark:text-gray-200 dark:text-opacity-70">优衣库官方旗舰店</p>
		<p class="text-xs text-red-600 dark:text-red-600 font-light dark:text-opacity-70">¥{{ goodItem.goodsMiniPrice }}</p>
	</div>
</template>

<script lang="ts">
import { GoodItem as GoodItemType } from '@src/store/home'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
	name: 'GoodItem',
	props: {
		goodItem: {
			type: Object as PropType<GoodItemType>,
			default: {}
		}
	},
	setup() {
		const toDetail = (goodItem: GoodItemType) => {
			console.log(goodItem.goodsId)
		}

		return {
			toDetail
		}
	}
})
</script>
