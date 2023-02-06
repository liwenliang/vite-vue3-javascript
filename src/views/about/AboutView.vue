<template>
  <div>AboutIndex</div>
  <h1>{{ count }}</h1>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/store/modules/counter'
const countStore = useCounterStore()
const { count } = storeToRefs(countStore)
</script>

<style scoped lang="scss">
h1 {
  color: red;
}
</style>
