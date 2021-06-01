<template>
	<div class="slide-bar w-20 bg-gray-100 dark:bg-xieyezi-content pt-2 pb-2 overflow-y-auto">
		<div
			v-for="(item, index) in categoryList"
			:key="item.name"
			class="h-14 flex justify-center items-center"
			@click="clickItem(index)"
		>
			<div :class="active == index ? 'active' : 'in-active'">
				<p class="font-light text-gray-800 dark:text-gray-200" :style="active === index ? 'color:white' : ''">
					{{ item.name }}
				</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { CateGory } from '@src/store/category'
import { defineComponent, PropType, ref } from 'vue'

export default defineComponent({
	name: 'SliderBar',
	props: {
		categoryList: Array as PropType<Array<CateGory>>
	},
	emits: ['sliderIndexChange'],
	setup(_, ctx) {
		let active = ref(0)

		const clickItem = (index: number) => {
			active.value = index
			ctx.emit('sliderIndexChange', index)
		}
		return {
			active,
			clickItem
		}
	}
})
</script>
<style scoped>
.slide-bar {
	height: -moz-calc(100vh - 160px);
	height: -webkit-calc(100vh - 160px);
	height: calc(100vh - 160px);
}
.active {
	height: 30px;
	width: 80%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	background: linear-gradient(to right, #ba68c8, #7265e3);
	color: white;
	font-size: 13px;
}
.in-active {
	height: 30px;
	width: 80%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	font-size: 12px;
}
</style>
