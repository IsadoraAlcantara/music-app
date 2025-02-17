<script setup>
import { Play, Shuffle, Sync, SkipNext } from '../../icons'
</script>
<template>
  <footer>
    <div class="song-container">
      <img src="https://i.ibb.co/j9khvjd8/Lady-Gaga-Bad-Romance.jpg" alt="" />
      <div>
        <p>Bad romance</p>
        <p class="name">Lady Gaga</p>
      </div>
    </div>
    <div class="player-container">
      <div class="bt-player">
        <Shuffle size="25" />
        <SkipNext size="30" />
        <Play size="35" />
        <SkipNext size="30" />
        <Sync size="25" />
      </div>
      <div class="player">
        <p>0:36</p>
        <div>
          <div class="grey"></div>
          <div class="white"></div>
        </div>
        <p>4:00</p>
      </div>
    </div>
  </footer>
</template>
<style scoped>
footer {
  padding: 12px;
  color: #e6e8ee;
  display: flex;
  position: relative;
  z-index: 4;
}

.song-container {
  display: flex;
  align-items: center;
  gap: 20px;
}

.name {
  color: #a0a0a0;
  font-size: 14px;
}

img {
  width: 70px;
  height: 70px;
  border-radius: 7px;
}

.player-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;

  & p {
    font-size: 12px;
  }

  & .player {
    display: flex;
    gap: 10px;
    align-items: center;

    & .white {
      background-color: #e6e8ee;
      width: 150px;
      height: 4px;
      z-index: 2;
      position: relative;
      bottom: 4px;
    }

    & .grey {
      background-color: #515151;
      width: 30vw;
      height: 4px;
      border-radius: 2px;
    }
  }
}

.bt-player {
    display: flex;
    align-items: center;
    gap: 5px;
}
</style>
