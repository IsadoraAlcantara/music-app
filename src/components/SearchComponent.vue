<script setup>
import { Magnify } from './icons'
</script>
<template>
  <div class="search">
    <Magnify size="20"/>
    <input type="text" placeholder="Pesquisar" />
  </div>
</template>
<style scoped>
.search {
  background-color: var(--darkest-gray);
  width: 300px;
  color: var(--dark-white);
  border-radius: 12px;
  padding: 8px 20px;
  display: flex;
  align-items: center;
  gap: 10px;

  & span {
    display: flex;
  }

  & input {
    font-weight: 500;
    background-color: transparent;
    border: none;
    font-size: 15px;
    outline: none;
  }

  & input::placeholder, input {
    color: var(--dark-white);
    opacity: 1;
  }
}
</style>
