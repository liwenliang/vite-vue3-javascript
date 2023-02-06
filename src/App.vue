<template>
  <router-view></router-view>
</template>

<script setup>
import { getUserInfo } from '@/api/login'

getUserInfo().then(res => {
  console.log('---------res----------')
  console.log(res)
  console.log('-----------res--------')
})
</script>
