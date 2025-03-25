<script setup>
import { defineEmits } from 'vue'
import { Close, CameraOutline } from './icons'

const emit = defineEmits(['close'])
</script>

<template>
  <div class="blur">
    <div class="modal-container">
      <div class="image">
        <img src="https://i.ibb.co/YBBpLQsg/transferir-2.jpg" alt="" />
        <CameraOutline size="70" />
      </div>
      <div class="text">
        <div class="title">
          <h2>Criar playlist</h2>
          <Close @click="$emit('close')" class="bt-close" />
        </div>
        <div class="inputs">
          <p>Nome da playlist</p>
          <input type="text" />
          <p>Descrição da playlist</p>
          <input type="text" />
        </div>
      </div>
      <button @click="$emit('close')">Salvar</button>
    </div>
  </div>
</template>
<style scoped>
.blur {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  background-color: rgba(0, 0, 0, 0.5) !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  z-index: 4 !important;
}

.modal-container {
  color: var(--white);
  background-color: var(--darker-gray);
  position: absolute;
  z-index: 5;
  padding: 18px;
  border-radius: 7px;
  display: grid;
  gap: 20px;
  grid-template-areas:
    'image text'
    'button button';
}

.inputs {
  display: flex;
  flex-direction: column;
  gap: 10px;

  & input {
    background-color: transparent;
    border: 1px solid var(--gray);
    border-radius: 5px;
    padding: 8px;
    width: 320px;
    user-select: none;
    color: var(--white);
    outline: none;
  }

  & input:focus-within {
    border: solid 1px var(--light-gray);
  }
}

.title {
  display: flex;
  justify-content: space-between;
}

.image {
  grid-area: image;
  position: relative;

  & img {
    width: 200px;
    border-radius: 7px;
  }

  & span {
    display: none;
    position: absolute;
    z-index: 1;
    align-items: center;
    justify-content: center;
  }
}

.image:hover > img {
  box-shadow: inset 250px 250px 5px 5px rgba(0, 0, 0, 1);
}

.image:hover > span {
  display: flex;
}

/* .shadow {
  display: none;
  position: absolute;
  z-index: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(81, 81, 81, 0.2);
  width: 9vw;
  height: 9vw;
  border-radius: 7px;
} */

.text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-area: text;
}

button {
  background-color: #35328c;
  border-radius: 7px;
  font-size: 22px;
  font-weight: 600;
  border: none;
  color: var(--white);
  padding: 10px;
  grid-area: button;
}
</style>
