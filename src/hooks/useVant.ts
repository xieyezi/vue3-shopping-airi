import { App } from 'vue'
import { Icon, Lazyload, Swipe, SwipeItem, Loading, Tabbar, TabbarItem } from 'vant'
import lazyPng from '@assets/images/home/loading.png'

export function useVant(app: App<Element>) {
	app.use(Icon)
	app.use(Swipe)
	app.use(SwipeItem)
	app.use(Loading)
	app.use(Tabbar)
	app.use(TabbarItem)
	app.use(Lazyload, { loading: lazyPng })

	return app
}
