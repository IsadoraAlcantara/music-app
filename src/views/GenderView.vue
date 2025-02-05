<script setup>
import { ArtistPlaylist, MainGender, AlbumPlaylist } from '@/components'
</script>
<template>
  <div class="container">
    <MainGender />
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
