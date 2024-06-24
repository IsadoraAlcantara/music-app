<script setup>
import SideBar from './components/SideBar/SideBarComponent.vue'
import NavBar from './components/NavBar/NavBarComponent.vue'
</script>

<template>
  <header>
    <nav>
      <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
      <div>
        <SideBar />
        <NavBar />
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
div {
  display: flex;
}
</style>
