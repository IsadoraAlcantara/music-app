<template>
  <div class="card">
    <img class="playlist-img" src="https://i.ibb.co/XfPfqnBD/image.jpg" alt="" />
    <div class="blur">
      <Play size="70" />
    </div>
    <p>Lana Del Rey, Lady Gaga e mais</p>
  </div>
</template>
<style scoped>
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
}

.card:hover {
  background-color: var(--darker-grey);
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
</style>
