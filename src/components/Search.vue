<template>
	<div class="container w-screen h-12 bg-white dark:bg-xieyezi-black flex justify-center items-center">
		<div class="w-10/12 h-10 rounded-full bg-gray-100 flex justify-start items-center">
			<input
				type="text"
				class="w-full ml-5 mr-5 focus:outline-none bg-gray-100 text-sm"
				@change="emitToFather"
				placeholder="最高可降800"
			/>
		</div>
		<div class="w-1/12 text-center ml-2" @click="onClick">
			<p class="text-gray-800 dark:text-gray-50 text-sm">搜索</p>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useDark } from '@vueuse/core'

export default defineComponent({
	name: 'Search',
	props: {
		onClick: {
			type: Function as PropType<() => void>
		}
	},
	setup(_, context) {
		const isDark = useDark()
		const { emit } = context

		const emitToFather = (e: any) => {
			if (e !== null) emit('keywordChange', e.target.value)
		}

		return {
			isDark,
			emitToFather
		}
	}
})
</script>

<style></style>
