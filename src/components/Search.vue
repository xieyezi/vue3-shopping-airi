<template>
	<div class="container w-screen h-12 bg-gray-50 dark:bg-gray-800 flex justify-center items-center">
		<div class="w-11/12 h-10 rounded-full bg-gray-100 flex justify-start items-center">
			<input
				type="text"
				class="w-full ml-5 mr-5 focus:outline-none bg-gray-100 text-sm"
				@change="emitToFather"
				placeholder="最高可降800"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useDark } from '@vueuse/core'

export default defineComponent({
	name: 'Search',
	props: {
		onClick: {
			type: Function
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
