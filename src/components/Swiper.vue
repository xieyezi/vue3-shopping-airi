<template>
	<van-swipe class="w-full rounded-md shadow-sm mt-1" :autoplay="3000" indicator-color="#fff">
		<van-swipe-item v-for="(item, index) in list" :key="index">
			<img :src="item.imgUrl" alt="" @click="goTo(item.url)" />
		</van-swipe-item>
	</van-swipe>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export interface SwiperItem {
	url: string
	imgUrl: string
}

export default defineComponent({
	name: 'Swiper',
	props: {
		list: Array as PropType<Array<SwiperItem>>
	},
	setup() {
		const goTo = (url: string) => {
			if (url != '') window.open(url)
		}
		return {
			goTo
		}
	}
})
</script>
