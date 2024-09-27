<template>
    <audio ref="audio" src="/music.mp3"></audio>

    <div class="musics">
        <div class="musics__button" @click="audio?.play()">
            <UiIcon icon="music" />
            <div class="musics__wrapper" />
        </div>
    </div>
</template>

<script setup lang="ts">
const audio = ref<any>()
</script>

<style scoped lang="scss">
.musics {
    position: fixed;
    right: 50px;
    bottom: 50px;
    z-index: 20;

    @media (max-width: 576px) {
        right: 20px;
        bottom: 20px;
    }

    &__wrapper, &__button {
        width: 70px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        background: #ffc700;
    }

    &__wrapper {
        position: absolute;
        z-index: -1;
        animation: pulse 1.2s ease infinite;
    }

    i {
        width: 40px;
        height: 40px;
    }

    &__button {
        opacity: 1;
        cursor: pointer;
        user-select: none;
        transition: .2s;

        color: black;

        &:hover {
            opacity: .6;
        }
    }
}

@keyframes pulse {
    0% {
        transform: scale(1, 1);
    }
    50% {
        opacity: 0.3;
    }
    100% {
        transform: scale(1.5);
        opacity: 0;
    }
}
</style>
