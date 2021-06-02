import create, { State } from 'genji-es'
import axios from 'axios'
import { NameWithIcon } from './home'

export interface HomeState extends State {
	isFetching: boolean
	categoryList: Array<CateGory>
	getCategoryData: () => Promise<void>
}

export interface CateGory {
	name: string
	banner: string
	list: Array<NameWithIcon>
}

const useStore = create<HomeState>((set, get) => ({
	isFetching: false,
	categoryList: [],
	getCategoryData: async () => {
		set({ isFetching: true })
		const res = await axios.get('/api/category')
		const { categoryData } = res.data
		set({
			categoryList: categoryData,
			isFetching: false
		})
	}
}))

export default useStore
