<script setup>
import { Magnify, HomeOutline } from '../../icons'
</script>
<template>
  <div>
    <!-- perguntar se ta certo, div usada para que o padding não afete o tamanho da tela -->
    <nav>
      <div class="container">
        <HomeOutline size="30" />
        <div class="search">
          <Magnify />
          <input type="text" placeholder="Pesquisar" />
        </div>
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
  }
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
