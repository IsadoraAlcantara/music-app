<script setup>
import { SearchComponent, CardAlbumComponent } from '../index'
import { Menu } from '../icons'
</script>
<template>
  <div class="container">
    <h1>Álbuns</h1>
    <div class="top">
      <button class="selected">Favoritos</button>
      <div class="functions">
        <SearchComponent />
        <Menu size="30" />
      </div>
    </div>
    <div class="cards">
      <CardAlbumComponent />
      <CardAlbumComponent />
      <CardAlbumComponent />
      <CardAlbumComponent />
      <CardAlbumComponent />
      <CardAlbumComponent />
      <CardAlbumComponent />
      <CardAlbumComponent />
      <CardAlbumComponent />
      <CardAlbumComponent />
      <CardAlbumComponent />
      <CardAlbumComponent />
      <CardAlbumComponent />
      <CardAlbumComponent />
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  background-color: var(--light-black);
  margin-right: 10px;
  width: 100%;
  height: 750px;
  border-radius: 7px;
  color: #e6e8ee;
  overflow-y: scroll;
  overflow-x: hidden;
  max-width: 63.8vw;
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .selected {
    background-color: #e6e8ee;
    color: #0d0d0d;
    border: none;
    height: 30px;
    width: 80px;
    border-radius: 7px;
    font-weight: 600;
  }

  & .functions {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
