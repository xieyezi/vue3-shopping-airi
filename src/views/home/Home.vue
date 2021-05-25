<template>
	<div class="bg-white h-screen dark:bg-gray-800">
		<Head title="首页" :back="false">
			<template v-slot:header-action>
				<van-icon name="cart-o" size="26" :color="isDark ? '#F9FAFB' : '#1F2937'" />
			</template>
		</Head>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useDark } from '@vueuse/core'
import Head from '@components/Head.vue'

export default defineComponent({
	name: 'Home',
	components: {
		Head
	},
	setup() {
		const isDark = useDark()

		return {
			isDark
		}
	}
})
</script>
