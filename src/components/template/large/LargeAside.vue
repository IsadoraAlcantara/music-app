<script setup>
import { ref } from 'vue'
import { PlaylistMusic, MicrophoneVariant, PlaylistPlus, Album, FolderPlayOutline } from '../../icons'
import { ModalComponent } from '@/components';

const showModal = ref(false)
</script>
<template>
  <main>
    <div class="logo">
      <img
        src="https://accounts.spicysparks.com/images/logos/eSoundLogo_WhiteTransparent.png"
        alt=""
      />
    </div>
    <div class="navigation">
      <h2>Biblioteca</h2>
      <router-link to="/playlist" class="line">
        <PlaylistMusic size="20" />
        <p>Playlists</p>
      </router-link>
      <router-link to="/artist" class="line">
        <MicrophoneVariant size="20" />
        <p>Artistas</p>
      </router-link>
      <router-link to="/album" class="line">
        <Album size="20" />
        <p>Álbuns</p>
      </router-link>
      <router-link to="/gender-list" class="line">
        <FolderPlayOutline size="20" />
        <p>Gêneros</p>
      </router-link>
    </div>
    <div class="navigation">
      <h2>Playlists</h2>
      <div class="line" @click="showModal = !showModal">
        <PlaylistPlus size="23" />
        <p>Criar playlist</p>
        <ModalComponent v-if="showModal" @close="showModal = !showModal" />
      </div>
      <div class="scroll">
        <router-link to="/song-list" class="playlist">
          <img src="https://i.ibb.co/XfPfqnBD/image.jpg" alt="" />
          <p>Romantique</p>
        </router-link>
        <div class="playlist">
          <img
            src="https://i.ibb.co/Jw8vbxVg/Ethereal-Hues-Vintage-Floral-Canvas-Wall-Art.jpg"
            alt=""
          />
          <p>Romantique</p>
        </div>
        <div class="playlist">
          <img src="https://i.ibb.co/XfPfqnBD/image.jpg" alt="" />
          <p>Romantique</p>
        </div>
        <div class="playlist">
          <img src="https://i.ibb.co/XfPfqnBD/image.jpg" alt="" />
          <p>Romantique</p>
        </div>
        <div class="playlist">
          <img src="https://i.ibb.co/XfPfqnBD/image.jpg" alt="" />
          <p>Romantique</p>
        </div>
        <div class="playlist">
          <img src="https://i.ibb.co/XfPfqnBD/image.jpg" alt="" />
          <p>Romantique</p>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
main {
  background-color: var(--light-black);
  border-radius: 7px;
  margin: 10px;
  width: 270px;
  height: 800px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: sticky;
  top: 0;
}

.logo img {
  width: 150px;
  margin: 10px 0 20px 0;
  display: flex;
  justify-self: center;
}

.navigation {
  margin: 18px 0;

  & p,
  span {
    color: #e6e8ee;
  }

  & h2 {
    color: #a0a0a0;
    font-size: 16px;
    font-weight: 500;
    padding: 3% 17px;
  }

  & .playlist {
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 15px 0;

    & img {
      width: 50px;
      height: 50px;
      border-radius: 7px;
    }
  }
}

.line {
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 0 25px;
  height: 45px;
  margin: 5px 0;
  border-radius: 7px;

  & span {
    display: flex;
    justify-content: center;
  }
}

.line:hover {
  background-color: var(--darker-gray);
}

.playlist {
  padding: 5px 25px;
  border-radius: 7px;
  text-decoration: none;
}

.playlist:hover {
  background-color: var(--darker-gray);
}

.scroll {
  overflow-y: scroll;
  max-height: 300px;
}
</style>
