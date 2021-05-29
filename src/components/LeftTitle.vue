<template>
	<div class="container w-screen h-6 flex flex-row justify-start items-center mt-4 mb-4">
		<div class="h-6 w-1 bg-purple-500 bg-opacity-80"></div>
        <p class="pl-2 text-gray-800 dark:text-gray-50 text-sm dark:text-opacity-80">{{title}}</p>
	</div>
</template>

<script setup lang="ts">
import { defineProps  } from 'vue'

defineProps({
    title: String,
    color: String
})
</script>