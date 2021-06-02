<template>
	<div class="container mx-auto h-screen bg-white dark:bg-xieyezi-black flex flex-col">
		<!-- head logo -->
		<div class="flex flex-col h-2/5 justify-center items-center">
			<div class="shadow w-16 h-16">
				<img :src="logoUrl" alt="airi logo" />
			</div>
			<p class="pt-3 font-medium text-gray-800 dark:text-white">AiRi</p>
		</div>
		<!-- middle input -->
		<div class="container w-full flex flex-col justify-center items-center">
			<div class="w-10/12 rounded-lg py-3 px-6 flex flex-row bg-gray-100">
				<img src="../../assets/images/login/phone.png" alt="phone" class="w-6 pr-2" />
				<input
					type="text"
					class="w-full focus:outline-none bg-gray-100"
					v-model="userName"
					placeholder="请输入用户名"
				/>
			</div>
			<div class="w-10/12 rounded-lg py-3 px-6 flex flex-row bg-gray-100 mt-4">
				<img src="../../assets/images/login/password.png" alt="phone" class="w-7 pr-2" />
				<input
					type="password"
					class="w-full focus:outline-none bg-gray-100"
					v-model="passWord"
					placeholder="请输入密码"
				/>
			</div>
		</div>
		<!-- submit button -->
		<div
			@click="login"
			class="
				w-10/12
				h-14
				shadow-md
				self-center
				flex flex-row
				justify-center
				items-center
				mt-8
				rounded-full
				bg-gradient-to-r
				from-purple-300
				via-purple-400
				to-purple-500
			"
		>
			<p class="text-white text-base font-medium">登录</p>
		</div>
		<!-- bottom action -->
		<div class="flex flex-row justify-center items-center mt-8 divide-x divide-gray-300">
			<p class="pr-5 text-gray-400 text-sm">找回密码</p>
			<p class="pl-5 text-gray-400 text-sm">新用户注册</p>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import logoUrl from '@assets/logo.png'
import { Notify } from 'vant'
import { useRouter } from 'vue-router'

export default defineComponent({
	name: 'Login',
	setup() {
		const userName = ref('')
		const passWord = ref('')
		const route = useRouter()

		const login = () => {
			if (userName.value === '') {
				Notify({
					type: 'warning',
					message: '用户名不能为空',
					color: '#fff',
					background: '#a78bfa'
				})
				return
			}
			if (passWord.value === '') {
				Notify({
					type: 'warning',
					message: '密码不能为空',
					color: '#fff',
					background: '#a78bfa'
				})
				return
			}
			localStorage.setItem('IS_LOGIN', 'true')
			route.replace({ name: 'Index' })
		}

		return {
			logoUrl,
			userName,
			passWord,
			login
		}
	}
})
</script>
