<script setup>
import { HomeOutline } from '../../icons'
import { SearchComponent } from '@/components'
</script>
<template>
  <div>
    <!-- perguntar se ta certo, div usada para que o padding não afete o tamanho da tela -->
    <nav>
      <div class="container">
        <HomeOutline size="30" />
        <SearchComponent />
      </div>
      <button class="bt-user">
        <img src="https://i.ibb.co/YBBpLQsg/transferir-2.jpg" alt="" />
      </button>
    </nav>
  </div>
</template>
<style scoped>
nav {
  padding: 10px;
  display: flex;
  justify-content: space-between;
}

div {
  width: 86.1vw;
  position: sticky;
  top: 0;
}

.container {
  display: flex;
  color: #a0a0a0;
  align-items: center;
  gap: 20px;
}

.bt-user {
  display: flex;
  align-items: center;
  border: none;
  border-radius: 20px;

  & img {
    width: 40px;
    border-radius: 20px;
  }
}
</style>
