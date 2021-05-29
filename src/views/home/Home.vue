<template>
	<div v-if="isFetching">loading...</div>
	<div v-else class="bg-gray-100 h-screen dark:bg-xieyezi-black flex flex-col items-center">
		<!-- header -->
		<Head title="首页" :back="false">
			<template v-slot:header-action>
				<van-icon name="cart-o" size="26" :color="isDark ? '#F9FAFB' : '#1F2937'" />
			</template>
		</Head>
		<!-- search-input -->
		<Search @keywordChange="keyWordChange" :onClick="toSearch"></Search>
		<!-- content -->
		<div class="w-11/12 mt-2">
			<Swiper :list="banners"></Swiper>
			<Category :list="cateGoryList"></Category>
			<LeftTitle title="品牌专场"></LeftTitle>
			<Brand :list="brandList" ref="brandRef"></Brand>
		</div>
		<!-- footer-table -->
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, onMounted, ref, watch } from 'vue'
import { useDark } from '@vueuse/core'
import Head from '@components/Head.vue'
import Search from '@components/Search.vue'
import Swiper from '@components/Swiper.vue'
import LeftTitle from '@components/LeftTitle.vue'
import Category from './components/Category.vue'
import Brand from './components/Brand.vue'
import useStore from '../../store/home'

export default defineComponent({
	name: 'Home',
	components: {
		Head,
		Search,
		Swiper,
		Category,
		Brand,
		LeftTitle
	},
	setup() {
		const isDark = useDark()
		let brandRef = ref<any>(null)

		const [isFetching, banerList, cateGoryList, brandList, hotList, getHomeData] = useStore((state) => [
			state.isFetching,
			state.banerList,
			state.cateGoryList,
			state.brandList,
			state.hotList,
			state.getHomeData
		])

		const banners = computed(() =>
			banerList.value.map((e: string) => {
				return {
					imgUrl: e,
					url: ''
				}
			})
		)

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
			brandRef,
			isDark,
			isFetching,
			banerList,
			cateGoryList,
			brandList,
			banners,
			hotList,
			keyWordChange,
			toSearch
		}
	}
})
</script>
