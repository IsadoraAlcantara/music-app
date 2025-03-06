<script setup>
import { genders } from './index'
</script>
<template>
  <div class="container">
    <h1>Gêneros</h1>
    <div class="buttons">
      <button class="selected">Tudo</button><button class="default">Favoritos</button>
    </div>
    <div class="cards">
      <div class="card" v-for="gender in genders" :style="{backgroundColor: gender.color}">
        {{ gender.name }}
        <div class="cards-image" :style="{backgroundImage: 'url(' + gender.image +')'}"></div>
      </div>
    </div>
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

.cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;

  & .card {
    width: 14.5vw;
    height: 8vw;
    border-radius: 7px;
    padding: 15px;
    font-weight: 900;
    font-size: 23px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
  }

  & .cards-image {
    background-image: inherit;
    position: absolute;
    border-radius: 7px;
    right: -13px;
    bottom: -24px;
    background-repeat: no-repeat;
    background-size: cover;
    width: 7.3vw;
    height: 7.3vw;
    transform: rotate(25deg);
  }
}
</style>
