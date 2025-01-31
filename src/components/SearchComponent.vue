<script setup>
import { Magnify } from './icons'
</script>
<template>
  <div class="search">
    <Magnify />
    <input type="text" placeholder="Pesquisar" />
  </div>
</template>
<style scoped>
.search {
  background-color: rgba(128, 128, 128, 0.3);
  width: 300px;
  color: #a0a0a0;
  border-radius: 20px;
  padding: 8px 20px;
  display: flex;
  align-items: center;
  gap: 10px;

  & span {
    display: flex;
  }

  & input {
    background-color: transparent;
    border: none;
    font-size: 15px;
    outline: none;
  }
}
</style>
