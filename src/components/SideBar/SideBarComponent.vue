<script setup>
import TextComponent from './TextComponent.vue'
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
    <TextComponent>
      <template v-slot:text> <HomeOutline /> Início </template>
    </TextComponent>
    <TextComponent>
      <template v-slot:text> <HeartOutline /> Gêneros </template>
    </TextComponent>
  </main>
</template>
<style scoped>
main {
  background-color: var(--sidebar-backgroud-color);
  border-right: 1px solid var(--line-color);
  height: 62vw;
  width: 20%;
  display: flex;
  flex-direction: column;
  padding: 1.5vw;
}

.logo img {
  width: 12vw;
}
</style>
