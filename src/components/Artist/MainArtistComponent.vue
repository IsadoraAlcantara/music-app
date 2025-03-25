<script setup>
import { BookmarkOutline } from '../icons'
</script>
<template>
  <div class="container">
    <h1>Artistas</h1>
    <div class="buttons">
      <button class="selected">Tudo</button><button class="default">Favoritos</button>
    </div>
    <div class="cards">
      <div class="card">
        <div class="img-container">
          <BookmarkOutline />
          <img
            src="https://i.ibb.co/BHJyftbC/ab67616d0000b27359ae8cf65d498afdd5585634.jpg"
            alt=""
          />
        </div>
        <div class="text">
          <p>Lana Del Rey</p>
          <button class="see-button">ver</button>
        </div>
      </div>
      <div class="card">
        <div class="img-container">
          <BookmarkOutline />
          <img
            src="https://i.ibb.co/BHJyftbC/ab67616d0000b27359ae8cf65d498afdd5585634.jpg"
            alt=""
          />
        </div>
        <div class="text">
          <p>Lana Del Rey</p>
          <button class="see-button">ver</button>
        </div>
      </div>
      <div class="card">
        <div class="img-container">
          <BookmarkOutline />
          <img
            src="https://i.ibb.co/BHJyftbC/ab67616d0000b27359ae8cf65d498afdd5585634.jpg"
            alt=""
          />
        </div>
        <div class="text">
          <p>Lana Del Rey</p>
          <button class="see-button">ver</button>
        </div>
      </div>
      <div class="card">
        <div class="img-container">
          <BookmarkOutline />
          <img
            src="https://i.ibb.co/BHJyftbC/ab67616d0000b27359ae8cf65d498afdd5585634.jpg"
            alt=""
          />
        </div>
        <div class="text">
          <p>Lana Del Rey</p>
          <button class="see-button">ver</button>
        </div>
      </div>
      <div class="card">
        <div class="img-container">
          <BookmarkOutline />
          <img
            src="https://i.ibb.co/BHJyftbC/ab67616d0000b27359ae8cf65d498afdd5585634.jpg"
            alt=""
          />
        </div>
        <div class="text">
          <p>Lana Del Rey</p>
          <button class="see-button">ver</button>
        </div>
      </div>
      <div class="card">
        <div class="img-container">
          <BookmarkOutline />
          <img
            src="https://i.ibb.co/BHJyftbC/ab67616d0000b27359ae8cf65d498afdd5585634.jpg"
            alt=""
          />
        </div>
        <div class="text">
          <p>Lana Del Rey</p>
          <button class="see-button">ver</button>
        </div>
      </div>
      <div class="card">
        <div class="img-container">
          <BookmarkOutline />
          <img
            src="https://i.ibb.co/BHJyftbC/ab67616d0000b27359ae8cf65d498afdd5585634.jpg"
            alt=""
          />
        </div>
        <div class="text">
          <p>Lana Del Rey</p>
          <button class="see-button">ver</button>
        </div>
      </div>
      <div class="card">
        <div class="img-container">
          <BookmarkOutline />
          <img
            src="https://i.ibb.co/BHJyftbC/ab67616d0000b27359ae8cf65d498afdd5585634.jpg"
            alt=""
          />
        </div>
        <div class="text">
          <p>Lana Del Rey</p>
          <button class="see-button">ver</button>
        </div>
      </div>
      <div class="card">
        <div class="img-container">
          <BookmarkOutline />
          <img
            src="https://i.ibb.co/BHJyftbC/ab67616d0000b27359ae8cf65d498afdd5585634.jpg"
            alt=""
          />
        </div>
        <div class="text">
          <p>Lana Del Rey</p>
          <button class="see-button">ver</button>
        </div>
      </div>
      <div class="card">
        <div class="img-container">
          <BookmarkOutline />
          <img
            src="https://i.ibb.co/BHJyftbC/ab67616d0000b27359ae8cf65d498afdd5585634.jpg"
            alt=""
          />
        </div>
        <div class="text">
          <p>Lana Del Rey</p>
          <button class="see-button">ver</button>
        </div>
      </div>
      <div class="card">
        <div class="img-container">
          <BookmarkOutline />
          <img
            src="https://i.ibb.co/BHJyftbC/ab67616d0000b27359ae8cf65d498afdd5585634.jpg"
            alt=""
          />
        </div>
        <div class="text">
          <p>Lana Del Rey</p>
          <button class="see-button">ver</button>
        </div>
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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
}

.card {
  border: #515151 solid 1px;
  border-radius: 7px;
  width: 11.3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-direction: column;

  & .img-container {
    position: relative;

    & span {
      display: flex;
      justify-self: end;
      position: absolute;
      z-index: 4;
      top: 7px;
      right: 3px;
    }
  }

  & img {
    width: 10vw;
    height: 9vw;
    border-radius: 7px 7px 0 0;
    object-fit: cover;
  }

  & .text {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    width: 100%;

    & .see-button {
      display: flex;
      align-items: center;
      padding: 1px 12px;
      font-weight: 600;
      border: none;
      border-radius: 10px;
      font-size: 16px;
    }

    & .see-button:hover {
      background-color: #2d4b73;
      color: #e6e8ee;
      transform: scale(1.1);
      transition: all 0.2s ease-in-out;
    }

    & p {
      font-size: 18px;
    }
  }
}

.card:hover {
  background-color: #393939;
}
</style>
