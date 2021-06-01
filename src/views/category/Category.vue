<template>
	<div v-if="isFetching" class="flex justify-center items-center w-screen h-screen">
		<van-loading color="#8B5CF6"> 疯狂加载中...</van-loading>
	</div>
	<div v-else class="bg-gray-100 h-full dark:bg-xieyezi-black flex flex-col items-center overflow-hidden pb-12">
		<!-- header -->
		<Head title="分类" :back="false">
			<template v-slot:header-action>
				<van-icon name="cart-o" size="26" badge="9" :color="isDark ? '#A78BFA' : '#8B5CF6'" class="mr-2" />
			</template>
		</Head>
		<!-- search-input -->
		<Search @keywordChange="keyWordChange" :onClick="toSearch"></Search>
		<!-- content -->
		<div class="w-11/12 mt-2"></div>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'
import Head from '@components/Head.vue'
import Search from '@components/Search.vue'
import useStore from '@src/store/category'
import { useDark } from '@vueuse/core'

export default defineComponent({
	name: 'Cartgory',
	components: {
		Head,
		Search
	},
	setup() {
		const isDark = useDark()
		const [isFetching, categoryList, getCategoryData] = useStore((state) => [
			state.isFetching,
			state.categoryList,
			state.getCategoryData
		])

		onMounted(() => {
			getCategoryData()
		})

		const keyWordChange = (e: string) => {
			console.log('keyword:', e)
		}

		const toSearch = () => {
			console.log('去搜索页')
		}

		return {
			isDark,
			isFetching,
			categoryList,
			keyWordChange,
			toSearch
		}
	}
})
</script>
