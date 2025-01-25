<script setup>
  import LargeHeader from '../components/template/large/LargeHeader.vue';
  import LargeAside from '../components/template/large/LargeAside.vue';
</script>
<template>
  <div id="layout-large">
    <header>
      <large-header />
    </header>
    <aside>
      <large-aside />
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</template>