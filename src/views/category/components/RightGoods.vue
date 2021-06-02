<template>
	<div class="content ml-1 pl-1 pr-1 pb-6 overflow-y-scroll">
		<div class="">
			<img v-lazy="cateGory?.banner" :alt="cateGory?.name" />
		</div>
		<div class="mt-1">
			<div class="grid grid-cols-3 gap-y-5">
				<div v-for="item in cateGory?.list" :key="item.name" class="flex flex-col justify-start items-center">
					<img v-lazy="item.icon" :alt="item.name" class="img" />
					<p class="text-xs font-light text-gray-800 dark:text-gray-200">{{ item.name }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { CateGory } from '@src/store/category'
import { defineComponent, onMounted, PropType } from 'vue'

export default defineComponent({
	name: 'RightGoods',
	props: {
		cateGory: Object as PropType<CateGory>
	},
	setup() {
		return {}
	}
})
</script>

<style scoped>
.content {
	width: calc(100vw - 90px);
	height: calc(100vh - 155px);
}
.img {
	max-width: 50px;
	max-height: 50px;
	border-radius: 50%;
}
</style>
