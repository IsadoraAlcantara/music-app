<script setup></script>
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
</style>
