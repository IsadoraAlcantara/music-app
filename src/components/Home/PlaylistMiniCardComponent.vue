<script setup></script>
<template>
    <div class="mini-playlist-container">
        <img src="https://i.ibb.co/XfPfqnBD/image.jpg" alt="">
        <p>Romantique</p>
    </div>
</template>
<style scoped>
.mini-playlist-container {
    background-color: rgba(57,57,57, 0.8);
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 4px;
    border-radius: 7px;
    width: 280px;
}

.mini-playlist-container:hover {
background-color: rgba(69,69,69, 0.8);
}

img {
    width: 3.5vw;
    border-radius: 7px;
    box-shadow: 4px 0 10px 0 rgba(0, 0, 0, 0.25);
}

p {
    font-weight: bold;
}
</style>