<script setup>
import { Play, DotsHorizontal, Shuffle, FormatListBulleted } from '../icons'
import { SearchComponent } from '@/components'
</script>
<template>
  <main>
    <div class="playlist-details">
      <img class="playlist-image" src="https://i.ibb.co/XfPfqnBD/image.jpg" alt="" />
      <div class="playlist-info">
        <p>41 músicas - 2h 30m</p>
        <h1>Romantique</h1>
        <div>
          <img class="user-image" src="https://i.ibb.co/35VrvVLd/transferir-2.jpg" alt="" />
          <p>Isadora Alcantara</p>
        </div>
      </div>
    </div>
    <div class="functions">
      <div class="buttons-left">
        <Play class="play" size="100" />
        <Shuffle />
        <DotsHorizontal />
      </div>
      <div class="buttons-right">
        <SearchComponent />
        <FormatListBulleted />
      </div>
    </div>
    <table class="list-info">
        <tr class="col">
          <th>#</th>
          <th>Título</th>
          <th>Artista</th>
          <th>Álbum</th>
          <th>Duração</th>
        </tr>
        <tr>
          <th>1</th>
          <th>
            <div class="title">
              <img
                class="music-img"
                src="https://i.ibb.co/zVbqkzLm/ab67616d0000b27359ae8cf65d498afdd5585634.jpg"
                alt=""
              />Peppers (feat. Tommy Genesis)
            </div>
          </th>
          <th>Lana Del Rey, Tommy Genesis</th>
          <th>Ultraviolence (Deluxe)</th>
          <th>4:00</th>
        </tr>
    </table>
  </main>
</template>
<style scoped>
main {
  background: rgb(39, 64, 38);
  background: linear-gradient(180deg, rgba(39, 64, 38, 1) 10%, rgba(30, 30, 30, 1) 54%);
  margin-right: 10px;
  width: 100%;
  height: 750px;
  border-radius: 7px;
}

.playlist-details {
  background-color: #274026;
  border-radius: 7px;
  height: 13vw;
  padding: 15px;
  color: #e6e8ee;
  display: flex;
  align-items: end;
  gap: 20px;

  & .playlist-image {
    width: 11.5vw;
    border-radius: 7px;
  }

  & .playlist-info {
    & h1 {
      font-size: 5em;
    }

    & .user-image {
      width: 25px;
      border-radius: 20px;
    }

    & div {
      display: flex;
      gap: 10px;
    }
  }
}

.functions {
  color: #a0a0a0;
  padding: 20px;
  display: flex;
  justify-content: space-between;

  & .buttons-left {
    display: flex;
    align-items: center;
    gap: 20px;

    & span {
      margin-right: 20px;
    }

    & .play {
      color: #e6e8ee;
      margin: 0;
    }
  }

  & .buttons-right {
    display: flex;
    align-items: center;
    gap: 25px;

    & span {
      display: flex;
      align-items: center;
    }
  }
}

.list-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a0a0a0;

  & .col {
    border-bottom: 1px solid rgba(81,81,81, 0.7);
    width: 100%;
  }

  & .title {
    color: #E6E8EE;
    display: flex;
    align-items: center;
    gap: 18px;
  }

  & .music-img {
    width: 50px;
    border-radius: 7px;
  }

}

table {
  width: 95%;
  display: flex;
  justify-self: center;
}
</style>
