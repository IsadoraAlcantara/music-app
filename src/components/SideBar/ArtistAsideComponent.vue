<script setup></script>
<template>
  <div class="container">
    <div class="header">
      <h2>Romantique</h2>
    </div>
    <img src="https://i.ibb.co/BHJyftbC/ab67616d0000b27359ae8cf65d498afdd5585634.jpg" alt="">
    <div class="song-info">
      <p class="title">Peppers (feat. Tommy Genesis)</p>
      <p class="artist">Lana Del Rey, Tommy Genesis</p>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 20vw;
  background-color: var(--light-black);
  border-radius: 7px;
  height: 485px;
  margin-right: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;

  & img {
    width: 100%;
    border-radius: 7px;
  }
}

.header {
  color: #E6E8EE;

  & h2 {
    margin-bottom: 15px;
    font-size: 18px;
  }
}

.song-info {
  margin: 10px 0;

  & .title {
    color: #E6E8EE;
    font-weight: 600;
    font-size: 22px;
  }

  & .artist {
    color: #a0a0aa;
    font-weight: 600;
  }
}
</style>
