<template>
  <div>
    <el-button type="primary">{{btnText}}</el-button>
    <el-switch v-model="value" />
  </div>
</template>

<script setup>
let btnText = ref('HomeIndex')
let value= ref(false)
</script>

<style scoped>
</style>
