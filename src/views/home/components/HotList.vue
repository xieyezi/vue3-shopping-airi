<template>
	<div class="w-full mt-2 h-full bg-indigo-500">
		<div class="w-1/2 h-40 float-left" v-for="(item, index) in hotList" :key="item.goodsId">
			<p>{{item.goodsName}}</p>
			<GoodItem :goodItem="item"></GoodItem>
		</div>
	</div>
</template>

<script lang="ts">
import { GoodItem as GoodItemType } from '@src/store/home'
import { defineComponent, PropType } from 'vue'
import GoodItem from '@components/GoodItem.vue'

export default defineComponent({
	name: 'GoodItem',
	props: {
		hotList: Array as PropType<Array<GoodItemType>>
	},
	components: {
		GoodItem
	},
	setup() {}
})
</script>
