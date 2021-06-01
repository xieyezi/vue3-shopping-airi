<template>
	<div v-if="isFetching" class="flex justify-center items-center w-screen h-screen">
		<van-loading color="#8B5CF6"> 疯狂加载中...</van-loading>
	</div>
	<div v-else class="bg-white h-full dark:bg-xieyezi-black flex flex-col items-center overflow-hidden pb-12">
		<!-- header -->
		<Head title="分类" :back="false">
			<template v-slot:header-action>
				<van-icon name="cart-o" size="26" badge="9" :color="isDark ? '#A78BFA' : '#8B5CF6'" class="mr-2" />
			</template>
		</Head>
		<!-- search-input -->
		<Search @keywordChange="keyWordChange" :onClick="toSearch"></Search>
		<!-- content -->
		<div class="w-full mt-1 flex justify-start content-start">
			<!-- left sliderbar -->
			<SliderBar :categoryList="categoryList" @sliderIndexChange="indexChange"></SliderBar>
			<!-- right list -->
			<div class="content ml-1 bg-green-600 p-3">
				<div class="">
					<img src="" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import useStore from '@src/store/category'
import { useDark } from '@vueuse/core'
import Head from '@components/Head.vue'
import Search from '@components/Search.vue'
import SliderBar from './components/SlideBar.vue'

export default defineComponent({
	name: 'Cartgory',
	components: {
		Head,
		Search,
		SliderBar
	},
	setup() {
		const active = ref(0)
		const isDark = useDark()
		const [isFetching, categoryList, getCategoryData] = useStore((state) => [
			state.isFetching,
			state.categoryList,
			state.getCategoryData
		])

		onMounted(() => {
			getCategoryData()
		})

		const indexChange=(index:number)=> {
			console.log(index)
		}

		const keyWordChange = (e: string) => {
			console.log('keyword:', e)
		}

		const toSearch = () => {
			console.log('去搜索页')
		}

		return {
			active,
			isDark,
			isFetching,
			categoryList,
			keyWordChange,
			toSearch,
			indexChange
		}
	}
})
</script>

<style scoped>
.content {
	width: calc(100% - 100px);
    height: calc(100% - 160px);
	/* height: -moz-calc(100vh - 160px);
	height: -webkit-calc(100vh - 160px);
	height: calc(100vh - 160px); */
}
</style>