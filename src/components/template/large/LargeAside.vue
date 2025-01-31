<script setup>
import { HomeOutline, MicrophoneVariant, PlaylistPlus, Album, FolderPlayOutline } from '../../icons'
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
      <div class="line">
        <HomeOutline size="20" />
        <p>Playlists</p>
      </div>
      <div class="line">
        <MicrophoneVariant size="20" />
        <p>Artistas</p>
      </div>
      <div class="line">
        <Album size="20" />
        <p>Álbuns</p>
      </div>
      <div class="line">
        <FolderPlayOutline size="20" />
        <p>Gêneros</p>
      </div>
    </div>
    <div class="navigation">
      <h2>Playlists</h2>
      <div class="line">
        <PlaylistPlus size="23" />
        <p>Criar playlist</p>
      </div>
      <div class="playlist">
        <img src="https://i.ibb.co/XfPfqnBD/image.jpg" alt="">
        <p>Romantique</p>
      </div>
      <div class="playlist">
        <img src="https://i.ibb.co/Jw8vbxVg/Ethereal-Hues-Vintage-Floral-Canvas-Wall-Art.jpg" alt="">
        <p>Romantique</p>
      </div>
      <div class="playlist">
        <img src="https://i.ibb.co/XfPfqnBD/image.jpg" alt="">
        <p>Romantique</p>
      </div>
      <div class="playlist">
        <img src="https://i.ibb.co/XfPfqnBD/image.jpg" alt="">
        <p>Romantique</p>
      </div>
    </div>
  </main>
</template>
<style scoped>
main {
  background-color: #1e1e1e;
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

  & p, span {
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
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 15px;
  color: red;
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
  background-color: #393939;
}

.playlist {
  padding: 5px 25px;
  border-radius: 7px;
}

.playlist:hover {
  background-color: #393939;
}
</style>
