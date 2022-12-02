<template>
  <h1>{{ msg }}</h1>

  <div class="m-4 flex gap-2 justify-center">
    <button type="button" @click="onCountClicked">
      当前数量是 {{ count }}
    </button>
    <button type="button" @click="reset">重置</button>
  </div>

  <p>
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">{{ $t("common.details") }}</p>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/store/modules/counter'
const countStore = useCounterStore()

defineProps({
  msg: String
})

const { count } = storeToRefs(countStore)

const onCountClicked = () => {
  countStore.accumulate()
}

const reset = () => {
  countStore.$reset()
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
