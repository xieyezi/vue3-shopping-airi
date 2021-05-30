<template>
	<div class="w-full bg-gray-100 dark:bg-xieyezi-black mt-2 grid grid-cols-2 gap-x-4 gap-y-3 mb-5">
		<GoodItem v-for="(item, index) in hotList" :key="item.goodsId" :goodItem="item"></GoodItem>
	</div>
</template>

<script lang="ts">
import { GoodItem as GoodItemType } from '@src/store/home'
import { defineComponent, PropType } from 'vue'
import GoodItem from '@components/GoodItem.vue'

export default defineComponent({
	name: 'HotList',
	props: {
		hotList: Array as PropType<Array<GoodItemType>>
	},
	components: {
		GoodItem
	}
})
</script>
