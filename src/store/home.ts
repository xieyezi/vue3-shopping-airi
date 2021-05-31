import create, { State } from 'genji-es'
import axios from 'axios'

export interface HomeState extends State {
	isFetching: boolean
	banerList: string[]
	cateGoryList: Array<NameWithIcon>
	brandList: Array<NameWithIcon>
	hotList: Array<GoodItem>
	getHomeData: () => Promise<void>
	toggleLoading: () => void
}

export interface NameWithIcon {
	name: string
	icon: string
}

export interface GoodItem {
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
	toggleLoading: () => set((state) => ({ isFetching: !state.isFetching })),
	getHomeData: async () => {
		set({ isFetching: true })
		const res = await axios.get('/api/index')
		const { banerList, cateGoryList, brandList, hotList } = res.data
		set({
			banerList,
			cateGoryList,
			brandList,
			hotList
		})
		set({ isFetching: false })
	}
}))

export default useStore
