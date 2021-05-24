<template>
	<div class="container mx-auto">
		<!-- head logo -->
        <div class="flex h-1/3 justify-items-center items-center">
            <div class="shadow w-9 h-9">
                <img :src="logoUrl" alt="airi logo">
            </div>
        </div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import logoUrl from '@assets/logo.png'

export default defineComponent({
	name: 'Login',
	setup() {
        

        return {
            logoUrl
        }
    }
})
</script>
