<template>
	<div class="bg-white h-screen dark:bg-gray-800">
		<!-- header -->
		<Head title="首页" :back="false">
			<template v-slot:header-action>
				<van-icon name="cart-o" size="26" :color="isDark ? '#F9FAFB' : '#1F2937'" />
			</template>
		</Head>
		<!-- search-input -->
		<Search @keywordChange="keyWordChange" :onClick="toSearch"></Search>
		<!-- content -->

		<!-- footer-table -->
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useDark } from '@vueuse/core'
import Head from '@components/Head.vue'
import Search from '@components/Search.vue'
import useStore from '../../store/home'

export default defineComponent({
	name: 'Home',
	components: {
		Head,
		Search
	},
	setup() {
		const isDark = useDark()

		const [banerList, cateGoryList, brandList, hotList, getHomeData] = useStore((state) => [
			state.banerList,
			state.cateGoryList,
			state.brandList,
			state.hotList,
			state.getHomeData
		])

		onMounted(() => {
			getHomeData()
		})

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
