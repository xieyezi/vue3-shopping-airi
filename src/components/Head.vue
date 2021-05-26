<template>
	<div class="container w-screen h-12 bg-white border-b dark:bg-gray-800 flex">
		<div class="flex-none w-12 flex justify-center items-center">
			<van-icon v-if="back" name="arrow-left" size="26" :color="isDark ? '#F9FAFB' : '#1F2937'" />
		</div>
		<div class="flex-grow flex justify-center items-center">
			<h4 class="text-gray-800 dark:text-gray-50">{{ title }}</h4>
		</div>
		<div class="flex-none w-12 flex justify-center items-center">
			<slot name="header-action"></slot>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useDark } from '@vueuse/core'

export default defineComponent({
	name: 'Head',
	props: {
		title: {
			type: String,
			default: ''
		},
		back: {
			type: Boolean,
			default: true
		}
	},
	setup() {
		const isDark = useDark()

		return {
			isDark
		}
	}
})
</script>

<style></style>
