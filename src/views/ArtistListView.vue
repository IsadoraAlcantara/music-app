<script setup>
import { ArtistAsideComponent, MainArtistComponent, AlbumAsideComponent } from '@/components'
</script>
<template>
  <div class="container">
    <MainArtistComponent />
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
