<script setup>
  import LargeHeader from '../components/template/large/LargeHeader.vue';
  import LargeAside from '../components/template/large/LargeAside.vue';
  import LargeFooter from '../components/template/large/LargeFooter.vue';
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
    <footer>
      <large-footer />
    </footer>
  </div>
</template>
<style scoped>
#layout-large {
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'aside header'
    'aside main'
    'footer footer';
}

header {
  display: flex;
  grid-area: header;
}

aside {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-area: aside;
}

main {
  min-height: 80%;
  grid-area: main;
}

footer {
  align-items: center;
  grid-area: footer;
}
</style>