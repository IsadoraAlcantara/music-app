<script setup>
  import SmallHeader from '../components/template/small/SmallHeader.vue';
</script>

<template>
  <div id="layout-small">
    <header>
      <small-header />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>