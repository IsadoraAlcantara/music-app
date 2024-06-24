<script setup>
import SideBar from './components/SideBar/SideBarComponent.vue';
</script>

<template>
  <header>
      <nav>
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
        <SideBar />
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
