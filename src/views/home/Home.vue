

<template >
   <div class="bg-white h-screen dark:bg-black">
    <button type="button" @click="toggleDark" class="bg-white dark:bg-grey"> 切换模式</button>
    <p class="text-gray-500 dark:text-white">测试tailwind 黑夜模式</p>
    <span class="text-gray-500 dark:text-white">{{ isDark ? 'Dark': 'Light' }}</span>
   </div>
</template>

<script lang="ts"> 
import { defineComponent } from 'vue'
import { useDark, useToggle } from '@vueuse/core'


    
 export default defineComponent({
    name:'Home',
    setup() {
        const isDark = useDark()
        const toggleDark = useToggle(isDark)

        return {
            isDark,
            toggleDark
        }
    }
  })

</script>
