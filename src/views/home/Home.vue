<template>
	<div class="bg-white h-screen dark:bg-gray-800">
		<!-- header -->
		<Head title="首页" :back="false">
			<template v-slot:header-action>
				<van-icon name="cart-o" size="26" :color="isDark ? '#F9FAFB' : '#1F2937'" />
			</template>
		</Head>
		<!-- searchInput -->
		<Search @keywordChange="keyWordChange" :onClick="toSearch"></Search>
		<!--  -->
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useDark } from '@vueuse/core'
import Head from '@components/Head.vue'
import Search from '@components/Search.vue'

export default defineComponent({
	name: 'Home',
	components: {
		Head,
		Search
	},
	setup() {
		const isDark = useDark()

		const keyWordChange = (e: string) => {
			console.log('keyword:', e)
		}

		const toSearch = () => {
			console.log('去搜索页')
		}

		return {
			isDark,
			keyWordChange,
			toSearch
		}
	}
})
</script>
