import create, { State } from 'genji-es'
import { useFetch } from '@vueuse/core'
import { unref } from 'vue-demi'

export interface HomeState extends State {
	isFetching: boolean
	banerList: string[]
	cateGoryList: Array<NameWithIcon>
	brandList: Array<NameWithIcon>
	hotList: Array<HotItem>
	getHomeData: () => Promise<void>
}

export interface NameWithIcon {
	name: string
	icon: string
}

export interface HotItem {
	goodsId: string
	goodsMiniPrice: string
	goodsName: string
	goodsPicUrl: string
}

const useStore = create<HomeState>((set, get) => ({
	isFetching: false,
	banerList: [],
	cateGoryList: [],
	brandList: [],
	hotList: [],
	getHomeData: async () => {
		set({ isFetching: true })
		const { isFetching, data, isFinished } = await useFetch('http://xieyezi.com:9003/mock/11/airi/index').get().json()
		// const {} = data
		console.log(isFinished.value)
		if (isFinished.value) {
			console.log('data:', data)
			console.log('data.value:', unref(data))
			const { banerList, brandList, cateGoryList, hotList } = data.value
			console.log('banerList:', banerList)
		}
		set({
			isFetching: unref(isFetching)
		})
	}
}))

export default useStore
