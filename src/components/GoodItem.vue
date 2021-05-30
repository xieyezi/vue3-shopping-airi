<template>
	<div class="w-full h-40" @click="toDetail">
		<img :src="goodItem.goodsPicUrl" :alt="goodItem.goodsName" />
		<p>{{ goodItem.goodsName }}</p>
		<p>优衣库官方旗舰店</p>
		<p>{{ goodItem.goodsMiniPrice }}</p>
	</div>
	
</template>

<script lang="ts">
import { GoodItem as GoodItemType } from '@src/store/home'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
	name: 'GoodItem',
	props: {
		goodItem: {
			type : Object as PropType<GoodItemType>,
			default: {}
		}
	},
	setup(props) {
		console.log(props.goodItem)

		const toDetail = () => {
			// console.log(goodItem)
		}

		return {
			toDetail
		}
	}
})
</script>
