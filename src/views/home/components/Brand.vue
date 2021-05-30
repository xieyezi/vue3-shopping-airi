<template>
	<div
		class="
			w-full
			h-24
			mt-2
			rounded-md
			bg-white
			dark:bg-xieyezi-content
			shadow-sm
			wrapper
			whitespace-nowrap
			relative
			overflow-hidden
		"
	>
		<div class="scroll-content inline-block pt-3">
			<div class="scroll-item inline-block" v-for="(item, index) in list" :key="index">
				<div class="w-14 h-14 inline-block mx-2">
					<img :src="item.icon" :alt="item.name" class="w-full" @click="toCatory(item.name)" />
					<p class="text-xs pt-1 font-light text-gray-700 dark:text-gray-200 dark:text-opacity-70">{{ item.name }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { NameWithIcon } from '@src/store/home'
import { defineComponent, onMounted, PropType } from 'vue'
import BScroll from '@better-scroll/core'
import { BScrollConstructor } from '@better-scroll/core/dist/types/BScroll'

export default defineComponent({
	name: 'Brand',
	props: {
		list: Array as PropType<Array<NameWithIcon>>
	},
	setup() {
		let bscroll: BScrollConstructor<{}>

		onMounted(() => {
			bscroll = new BScroll('.wrapper' as any, {
				scrollX: true,
				click: true,
				probeType: 3
			})
		})

		const refresh = () => {
			bscroll.refresh()
		}

		const toCatory = (keyword: string) => {
			console.log(keyword)
		}

		return {
			refresh,
			toCatory
		}
	}
})
</script>
