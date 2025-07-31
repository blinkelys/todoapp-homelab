<template>
  <TopBar />
  <router-view />
</template>

<script>
  import TopBar from './components/layout/topBar.vue'

  export default {
    components: {
      TopBar
    }
  }
</script>