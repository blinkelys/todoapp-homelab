<template>
  <div class="w-full h-fit py-5 bg-gray-950 text-white flex justify-between items-center px-20">
    <h1 class="text-2xl font-light">Welcome, User</h1>
    <p class="text-2xl font-light">{{ time }}</p>
    <p class="text-2xl font-light">{{ date }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const time = ref('')
const date = ref(new Date().toLocaleDateString())

const updateTime = () => {
  const now = new Date()
  time.value = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
}

let interval

onMounted(() => {
  updateTime()
  interval = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>
