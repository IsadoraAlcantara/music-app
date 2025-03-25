<script setup></script>
<template>
    <div class="card">
        <img src="https://i.ibb.co/bSTr8FW/Happier-Than-Ever-lbum-Billie-Eilish.png" alt="">
        <p class="name-text">Born To Die - The Paradise Edition</p>
        <p class="artist-text">Lana Del Rey - 2014</p>
    </div>
</template>
<style scoped>
.card {
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 8px;
    padding: 10px;
    width: 10.2vw;
    height: 15vw;
    border-radius: 7px;

    & img {
        border-radius: 7px;
        width: 100%;
    }
}

.card:hover {
    background-color: var(--darker-gray);
}

.name-text {
    font-weight: 500;
    font-size: 15px;
}

.artist-text {
    color: var(--light-gray);
    font-size: 13px;
}
</style>