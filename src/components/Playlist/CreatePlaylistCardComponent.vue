<script setup>
import { ref } from "vue"
import { ModalComponent } from "@/components"
import { PlaylistPlus } from '../icons'

const showModal = ref(false)
</script>
<template>
  <div class="create-playlist-card" @click="showModal = !showModal">
    <PlaylistPlus size="70" />
    <p>Criar playlist</p>
    <ModalComponent v-if="showModal" @close="showModal = !showModal" />
  </div>
</template>
<style scoped>
.create-playlist-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10vw;
  height: 100%;
  border: var(--dark-gray) 1px solid;
  color: var(--dark-white);
  border-radius: 7px;
}

.create-playlist-card:hover {
  color: #9077ff;
  border: #9077ff 1px solid;
}
</style>
