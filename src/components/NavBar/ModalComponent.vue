<script setup>
// const openModalButton = document.querySelector("open-modal");
// const closeModalButton = document.querySelector("close-modal");
// const modal = document.querySelector("modal");
// const fade = document.querySelector("fade");

// [openModalButton, closeModalButton, fade].forEach((el) => {
//   el.addEventListener("click", () => console.log("teste"));
// })

</script>
<template>
  <button class="bt" id="open-modal">OBTENHA PREMIUM</button>
  <div id="fade" class="hide"></div>
  <div id="modal" class="hide">
    <div class="modal-header"></div>
    <h2>Escreva o seu nome</h2>
    <input type="text" placeholder="nome" />
    <button class="bt">enviar</button>

    <!-- <button class="bt-heart">
      <svg
        height="32"
        width="32"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        class="empty"
      >
        <path d="M0 0H24V24H0z" fill="none"></path>
        <path
          d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        class="filled"
      >
        <path fill="none" d="M0 0H24V24H0z"></path>
        <path
          d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"
        ></path>
      </svg>
    </button> -->
  </div>
</template>
<style scoped>
#modal {
  background-color: #1E1D22;
  height: 25vw;
  width: 27vw;
  margin: 2vw;
  border-radius: 2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}

#fade {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 5;
  width: 100%;
  height: 100%;
}

#modal.hide, #fade.hide  {
  opacity: 0;
}

h2 {
  margin-bottom: 2vw;
}

input {
  background-color: #3A3A3AB5;
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
  background-color: #09cc09;
  border-radius: 2vw;
  font-weight: bold;
  cursor: pointer;
  border: none;
  font-size: 18px; 
  margin: 2vw;
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
