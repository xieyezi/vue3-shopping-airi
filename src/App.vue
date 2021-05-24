<template :class="isDark ? 'dark' : ''">
  <div>
    <router-view />
  </div>
   
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useDark } from '@vueuse/core'

export default defineComponent({
  name: 'App',
  setup() {
    const isDark = useDark({
      valueDark: 'dark',
      valueLight: 'light'
    })

    return {
        isDark
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
