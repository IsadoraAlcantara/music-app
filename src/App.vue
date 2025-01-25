<script setup>
import SideBar from './components/SideBar/SideBarComponent.vue'
import NavBar from './components/NavBar/NavBarComponent.vue'
</script>

<template>
  <header>
    <nav>
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
