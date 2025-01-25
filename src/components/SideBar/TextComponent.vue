<script setup></script>
<template>
  <div class="container">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <p>
      <slot name="text"></slot>
    </p>
  </div>
</template>
<style scoped>
.container {
  color: var(--grey-100);
  display: flex;
  align-items: center;
}

.icon {
  margin-top: 10px;
}

p {
  margin: 2vw;
}
</style>
