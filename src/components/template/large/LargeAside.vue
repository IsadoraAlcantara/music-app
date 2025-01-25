<script setup>
import HomeOutline from 'vue-material-design-icons/HomeOutline.vue'
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue'
</script>
<template>
  <main>
    <div class="logo">
      <img
        src="https://accounts.spicysparks.com/images/logos/eSoundLogo_WhiteTransparent.png"
        alt=""
      />
    </div>
    <HomeOutline />
    <HeartOutline />
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
</style>
