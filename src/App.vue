<template :class="isDark ? 'dark' : ''">
	<div>
		<router-view />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useDark } from '@vueuse/core'

export default defineComponent({
	name: 'App',
	setup() {
		const isDark = useDark({
			valueDark: 'dark',
			valueLight: 'light'
		})

		return {
			isDark
		}
	}
})
</script>

<style></style>
