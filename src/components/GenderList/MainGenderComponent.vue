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
    background-color: var(--darker-gray);
  }
}

.cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;

  & .card {
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
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
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
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
