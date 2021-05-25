import { Icon } from 'vant'
import { App } from 'vue'

export function useVant(app: App<Element>) {
	app.use(Icon)

	return app
}
