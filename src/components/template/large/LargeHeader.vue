<template>
  <div>
    <!-- perguntar se ta certo, div usada para que o padding não afete o tamanho da tela -->
    <nav>
      <div class="search">
        <input type="text" placeholder="Pesquisar" />
      </div>
      <button class="bt-premium">OBTENHA PREMIUM</button>
    </nav>
  </div>
</template>
<style scoped>
nav {
  padding: 10px;
  display: flex;
}

div {
  width: 86.1vw;
  position: sticky;
  top: 0;
}

input {
  color: var(--white);
  background-color: rgba(128, 128, 128, 0.3);
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 15px;
  width: 300px;
}

.bt-premium {
  padding: 8px 20px;
  border-radius: 20px;
  border: none;
  background: rgb(40, 82, 231);
  background: linear-gradient(270deg, rgba(40, 82, 231, 1) 0%, rgba(9, 204, 9, 1) 83%);
  font-weight: bold;
}
</style>
