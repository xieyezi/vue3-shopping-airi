import { App } from 'vue'
import { Icon } from 'vant'
import { Swipe, SwipeItem, Loading } from 'vant'

export function useVant(app: App<Element>) {
	app.use(Icon)
	app.use(Swipe)
	app.use(SwipeItem)
	app.use(Loading)
	return app
}
