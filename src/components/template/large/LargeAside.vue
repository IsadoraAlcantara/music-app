<script setup>
import { HomeOutline, HeartOutline, PlaylistPlus } from '../../icons'
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
      <div class="line">
        <HomeOutline />
        <p>Início</p>
      </div>
      <div class="line">
        <HeartOutline />
        <p>Gêneros</p>
      </div>
    </div>
    <div class="navigation">
      <h2>Biblioteca</h2>
      <div class="line">
        <p>Descobrir</p>
      </div>
      <div class="line">
        <p>Playlists</p>
      </div>
      <div class="line">
        <p>Faixas</p>
      </div>
      <div class="line">
        <p>Artistas</p>
      </div>
      <div class="line">
        <p>Álbuns</p>
      </div>
      <div class="line">
        <p>Importar músicas</p>
      </div>
    </div>
    <div class="navigation">
      <h2>Playlists</h2>
      <div class="line">
        <PlaylistPlus />
        <p>Criar playlist</p>
      </div>
      <div class="line">
        <p>Phonk</p>
      </div>
      <div class="line">
        <p>Triste</p>
      </div>
    </div>
  </main>
</template>
<style scoped>
main {
  background-color: var(--black-200);
  border-right: 1px solid var(--grey-200);
  height: 100vh;
  width: 250px;
  display: flex;
  flex-direction: column;
  padding: 1.5vw;
  position: sticky;
  top: 0;
}

.logo img {
  width: 150px;
}

.navigation {
  margin: 10px 0;
}

.line {
  color: var(--grey-200);
  font-weight: 500;
  display: flex;
  gap: 15px;
  margin: 10px 0;
}

.line:hover {
  color: var(--green);
}

h2 {
  color: var(--white);
  font-size: 16px;
  font-weight: 500;
}
</style>
