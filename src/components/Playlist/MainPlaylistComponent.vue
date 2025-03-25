<script setup>
import { ref } from 'vue'
import { Play, PlaylistPlus } from '../icons'
import { PlaylistCard, ModalComponent } from '@/components'

const showModal = ref(false)
</script>
<template>
  <div class="container">
    <h1>Suas playlists</h1>
    <div class="buttons">
      <button class="selected">Tudo</button>
      <button class="default">Música</button>
      <button class="default">Podcast</button>
    </div>
    <div class="cards">
      <div class="create-card" @click="showModal = !showModal">
        <PlaylistPlus size="70" />
        <p>Criar playlist</p>
      </div>
      <ModalComponent v-if="showModal" @close="showModal = !showModal" />
      <div class="card">
        <img class="playlist-img" src="https://i.ibb.co/XfPfqnBD/image.jpg" alt="" />
        <div class="blur">
          <Play size="70" />
        </div>
        <h2>Romantique</h2>
        <div class="user">
          <img src="https://i.ibb.co/YBBpLQsg/transferir-2.jpg" alt="" />
          <p>Isadora Alcantara</p>
        </div>
      </div>
      <div class="card">
        <img class="playlist-img" src="https://i.ibb.co/XfPfqnBD/image.jpg" alt="" />
        <div class="blur">
          <Play size="70" />
        </div>
        <h2>Romantique</h2>
        <div class="user">
          <img src="https://i.ibb.co/YBBpLQsg/transferir-2.jpg" alt="" />
          <p>Isadora Alcantara</p>
        </div>
      </div>
      <div class="card">
        <img class="playlist-img" src="https://i.ibb.co/XfPfqnBD/image.jpg" alt="" />
        <div class="blur">
          <Play size="70" />
        </div>
        <h2>Romantique</h2>
        <div class="user">
          <img src="https://i.ibb.co/YBBpLQsg/transferir-2.jpg" alt="" />
          <p>Isadora Alcantara</p>
        </div>
      </div>
      <div class="card">
        <img class="playlist-img" src="https://i.ibb.co/XfPfqnBD/image.jpg" alt="" />
        <div class="blur">
          <Play size="70" />
        </div>
        <h2>Romantique</h2>
        <div class="user">
          <img src="https://i.ibb.co/YBBpLQsg/transferir-2.jpg" alt="" />
          <p>Isadora Alcantara</p>
        </div>
      </div>
      <div class="card">
        <img class="playlist-img" src="https://i.ibb.co/XfPfqnBD/image.jpg" alt="" />
        <div class="blur">
          <Play size="70" />
        </div>
        <h2>Romantique</h2>
        <div class="user">
          <img src="https://i.ibb.co/YBBpLQsg/transferir-2.jpg" alt="" />
          <p>Isadora Alcantara</p>
        </div>
      </div>
      <div class="card">
        <img class="playlist-img" src="https://i.ibb.co/XfPfqnBD/image.jpg" alt="" />
        <div class="blur">
          <Play size="70" />
        </div>
        <h2>Romantique</h2>
        <div class="user">
          <img src="https://i.ibb.co/YBBpLQsg/transferir-2.jpg" alt="" />
          <p>Isadora Alcantara</p>
        </div>
      </div>
      <div class="card">
        <img class="playlist-img" src="https://i.ibb.co/XfPfqnBD/image.jpg" alt="" />
        <div class="blur">
          <Play size="70" />
        </div>
        <h2>Romantique</h2>
        <div class="user">
          <img src="https://i.ibb.co/YBBpLQsg/transferir-2.jpg" alt="" />
          <p>Isadora Alcantara</p>
        </div>
      </div>
      <div class="card">
        <img class="playlist-img" src="https://i.ibb.co/XfPfqnBD/image.jpg" alt="" />
        <div class="blur">
          <Play size="70" />
        </div>
        <h2>Romantique</h2>
        <div class="user">
          <img src="https://i.ibb.co/YBBpLQsg/transferir-2.jpg" alt="" />
          <p>Isadora Alcantara</p>
        </div>
      </div>
      <div class="card">
        <img class="playlist-img" src="https://i.ibb.co/XfPfqnBD/image.jpg" alt="" />
        <div class="blur">
          <Play size="70" />
        </div>
        <h2>Romantique</h2>
        <div class="user">
          <img src="https://i.ibb.co/YBBpLQsg/transferir-2.jpg" alt="" />
          <p>Isadora Alcantara</p>
        </div>
      </div>
      <div class="card">
        <img class="playlist-img" src="https://i.ibb.co/XfPfqnBD/image.jpg" alt="" />
        <div class="blur">
          <Play size="70" />
        </div>
        <h2>Romantique</h2>
        <div class="user">
          <img src="https://i.ibb.co/YBBpLQsg/transferir-2.jpg" alt="" />
          <p>Isadora Alcantara</p>
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
  border: solid 1px #505050;
  border-radius: 7px;
  width: 10vw;
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 3px;
  position: relative;

  & .playlist-img {
    width: 9vw;
    height: 9vw;
    border-radius: 7px;
    align-self: center;
  }

  & .user {
    display: flex;
    gap: 10px;

    & img {
      width: 20px;
      height: 20px;
      border-radius: 30px;
    }

    & p {
      font-size: 14px;
      color: #a0a0a0;
    }
  }

  & h2 {
    font-size: 18px;
    font-weight: 400;
  }
}

.card:hover {
  background-color: var(--darker-gray);
}

.card:hover > .blur {
  display: flex;
}

.blur {
  display: none;
  position: absolute;
  z-index: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(81, 81, 81, 0.2);
  width: 9vw;
  height: 9vw;
  border-radius: 7px;
}

.create-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10vw;
  height: 100%;
  border: #505050 1px solid;
  border-radius: 7px;
}

.create-card:hover {
  color: #38abf2;
  background-color: var(--darker-gray);
}
</style>
