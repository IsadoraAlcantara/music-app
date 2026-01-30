<script setup>
import { HomeVariantOutline } from '../../icons'
import { SearchComponent } from '@/components'
</script>
<template>
    <nav>
      <div class="container">
        <router-link to="/">
          <HomeVariantOutline size="28" />
        </router-link>
        <SearchComponent />
      </div>
      <button class="bt-user">
        <img src="https://i.ibb.co/YBBpLQsg/transferir-2.jpg" alt="" />
      </button>
    </nav>
</template>
<style scoped>
nav {
  padding: 10px 10px 10px 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.container {
  display: flex;
  color: #a0a0a0;
  align-items: center;
  gap: 10px;
}

a {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 35%;
  height: 36px;
  aspect-ratio: 1/1;
  color: var(--dark-white);
  background-color: var(--darkest-gray);
}

.router-link-exact-active {
  background-color: var(--dark-gray);
}

.bt-user {
  display: flex;
  align-items: center;
  border: none;
  border-radius: 20px;

  & img {
    width: 40px;
    border-radius: 20px;
  }
}
</style>
