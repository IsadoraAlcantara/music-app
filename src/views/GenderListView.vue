<script setup>
import { ArtistAsideComponent, MainGenderComponent, AlbumAsideComponent } from '@/components'
</script>
<template>
  <div class="container">
    <MainGenderComponent />
    <div class="aside">
      <ArtistAsideComponent />
      <AlbumAsideComponent />
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
}

.aside {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
