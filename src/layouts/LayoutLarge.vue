<script setup>
  import LargeHeader from '../components/template/large/LargeHeader.vue';
  import LargeAside from '../components/template/large/LargeAside.vue';
</script>
<template>
  <div id="layout-large">
    <aside>
      <large-aside />
    </aside>
    <header>
      <large-header />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>