<template>
  <div class="flex justify-center gap-x-[48px]">
    <a class="logo" href="https://vitejs.dev" target="_blank">
      <SvgIcon name="vite" />
    </a>
    <a class="logo" href="https://vuejs.org/" target="_blank">
      <svg-icon class="vue" name="vue" />
    </a>
    <a class="logo" href="https://github.com/vbenjs/vite-plugin-svg-icons/blob/main/README.zh_CN.md" target="_blank">
      <SvgIcon name="svg-icon" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue + Pinia + windicss + SvgIcon" />
  <el-button type="primary" @click="toAboutPage">About</el-button>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const toAboutPage = () => {
  router.push({ name: 'About' })
}
</script>

<style lang="scss" scoped>
.logo {
  font-size: 68px;
}
</style>
