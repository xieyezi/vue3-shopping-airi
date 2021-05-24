<template>
	<div class="container mx-auto">
		<!-- head logo -->
        <div class="flex max-h-40 justify-items-center items-center">
            <div class="shadow-sm">
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
