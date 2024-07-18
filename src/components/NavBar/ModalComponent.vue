<script setup>
import { reactive, defineEmits } from 'vue'
import ArrowLeft from 'vue-material-design-icons/ArrowLeft.vue'
import ArrowRight from 'vue-material-design-icons/ArrowRight.vue'
import Heart from 'vue-material-design-icons/Heart.vue'

const createCategory = async () => {
  await categoryStore.createCategory(category)
  emit('close')
}
</script>
<template>
  <button class="bt">OBTENHA PREMIUM</button>
  <div class="modal">
    <div class="modal-content">
      <div class="left">
        <div class="arrow">
          <ArrowLeft />
        </div>
      </div>
      <div class="center">
        <img
          class="logo"
          src="https://accounts.spicysparks.com/images/logos/eSoundLogo_WhiteTransparent.png"
          alt=""
        />
        <!-- <button @click="$emit('close')" class="btn-close">
          <i class="mdi mdi-close" />
        </button> -->
        <div class="heart">
          <Heart />
        </div>
        <button class="bt-compra-1">
          <div>Indo e voltando 2/7</div>
          <div>R$ 26.00</div>
        </button>
        <button class="bt-compra-2">
          <div>Indo e voltando</div>
          <div>R$ 0.00</div>
        </button>
        <button class="bt-modal">CONTINUAR</button>
      </div>
      <div class="right">
        <div class="arrow">
          <ArrowRight />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.arrow {
  background-color: var(--line-color);
  width: 2.5vw;
  height: 2.5vw;
  border-radius: 20px;
  color: rgb(168, 168, 168);
  display: flex;
  padding: 0.3vw;
  justify-content: center;
}

.bt-compra-1 {
  border: grey 2px solid;
  border-radius: 40px;
  background-color: transparent;
  color: white;
  width: 140%;
  padding: 1.5vw;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 16px;
}

.bt-compra-2 {
  border: var(--button-color) 2px solid;
  border-radius: 40px;
  background-color: transparent;
  color: white;
  width: 140%;
  padding: 1.5vw;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 16px;
}

.btn-close {
  background-color: transparent;
  color: white;
  border: none;
  font-size: 2.5vw;
}

.heart {
  font-size: 30px;
  color: red;
}

.logo {
  width: 8vw;
}

.teste {
  color: white;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2vw;
  flex-direction: column;
}

.modal-content {
  background-color: var(--modal-background-color);
  padding: 2vw;
  border-radius: 10px;
  color: white;
  width: 60vw;
  height: 55vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#modal.hide,
#fade.hide {
  opacity: 0;
}

h2 {
  margin-bottom: 2vw;
}

input {
  background-color: #3a3a3ab5;
  border: 1px #505050 solid;
  border-radius: 10px;
  padding: 1vw;
  outline: none;
  color: white;
  width: 57%;
}

.bt {
  display: flex;
  height: 2.5em;
  width: 220px;
  align-items: center;
  justify-content: center;
  background-color: var(--button-color);
  border-radius: 2vw;
  font-weight: bold;
  cursor: pointer;
  border: none;
  font-size: 18px;
  margin: 2vw;
  padding: 0 1vw;
}

.bt-modal {
  display: flex;
  height: 2.5em;
  width: 140%;
  align-items: center;
  justify-content: center;
  background-color: var(--button-color);
  border-radius: 2vw;
  font-weight: bold;
  cursor: pointer;
  border: none;
  font-size: 18px;
  padding: 0 1vw;
}

.bt-heart {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 25px 20px 22px;
  box-shadow: rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  background-color: #e8e8e8;
  border-color: #ffe2e2;
  border-style: solid;
  border-width: 9px;
  border-radius: 35px;
  font-size: 25px;
  cursor: pointer;
  font-weight: 900;
  color: rgb(134, 124, 124);
  font-family: monospace;
  transition:
    transform 400ms cubic-bezier(0.68, -0.55, 0.27, 2.5),
    border-color 400ms ease-in-out,
    background-color 400ms ease-in-out;
  word-spacing: -2px;
}

@keyframes movingBorders {
  0% {
    border-color: #fce4e4;
  }

  50% {
    border-color: #ffd8d8;
  }

  90% {
    border-color: #fce4e4;
  }
}

.bt-heart:hover {
  background-color: #eee;
  transform: scale(105%);
  animation: movingBorders 3s infinite;
}

.bt-heart svg {
  margin-right: 11px;
  fill: rgb(255, 110, 110);
  transition: opacity 100ms ease-in-out;
}

.filled {
  position: absolute;
  opacity: 0;
  top: 20px;
  left: 22px;
}

@keyframes beatingHeart {
  0% {
    transform: scale(1);
  }

  15% {
    transform: scale(1.15);
  }

  30% {
    transform: scale(1);
  }

  45% {
    transform: scale(1.15);
  }

  60% {
    transform: scale(1);
  }
}

.bt-heart:hover .empty {
  opacity: 0;
}

.bt-heart:hover .filled {
  opacity: 1;
  animation: beatingHeart 1.2s infinite;
}
</style>
