<script setup>
import { PlaylistMiniCardComponent } from '@/components';
</script>
<template>
  <div class="container">
    <h1>Bom dia, Isadora</h1>
    <div class="buttons">
      <button class="selected">Tudo</button>
      <button class="default">Músicas</button>
      <button class="default">Podcasts</button>
    </div>
  <PlaylistMiniCardComponent />
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  background-color: #1e1e1e;
  margin-right: 10px;
  width: 100%;
  height: 750px;
  border-radius: 7px;
  color: #e6e8ee;
  overflow-y: scroll;
  overflow: hidden;
  max-width: 63.8vw;
}

.buttons {
  display: flex;
  gap: 7px;

  & button {
    height: 30px;
    width: 80px;
    border-radius: 7px;
    font-weight: 600;
  }

  & .selected {
    background-color: #e6e8ee;
    color: #0d0d0d;
    border: none;
  }

  & .default {
    border: #505050 solid 1px;
    background-color: transparent;
    color: #e6e8ee;
  }

  & .default:hover {
    background-color: var(--darker-grey);
  }
}
</style>
