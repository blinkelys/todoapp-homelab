<template>
  <div class="flex flex-col h-screen">
    <TopBar />
    <div class="flex flex-1">
      <SideBar />
      <router-view />
    </div>
  </div>
</template>

<script>
  import SideBar from './components/layout/sideBar.vue';
import TopBar from './components/layout/topBar.vue'

  export default {
    components: {
      TopBar,
      SideBar
    }
  }
</script>