<template>
  <div>
    <el-button type="primary">{{ btnText }}</el-button>
    <el-switch v-model="value" />
    <div class="redClass">Hello Home</div>
    <div class="text-green-600 font-bold">windicss</div>
  </div>
</template>

<script setup>
const btnText = ref('HomeIndex')
const value = ref(false)
</script>

<style lang="scss" scoped>
.redClass {
  width: 120px;
  height: 120px;
  color: red;
  line-height: 120px;
  text-align: center;
  background: blue;
}
</style>
