<script setup>
import { ArtistAsideComponent, MainSongListComponent, AlbumAsideComponent } from '@/components'
</script>
<template>
  <div class="container">
    <MainSongListComponent />
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
