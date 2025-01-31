<script setup>
import { ArtistPlaylist, MainPlaylist, AlbumPlaylist } from '@/components'
</script>
<template>
  <div class="container">
    <MainPlaylist />
    <div class="aside">
      <ArtistPlaylist />
      <AlbumPlaylist />
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
