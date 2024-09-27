<template>
    <div class="card">
        <img src="/invitation-bg.png" alt="invitation">
        <h3>{{ title }}</h3>
        <p><span>{{ first }}</span>{{ text }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string
    first: string
    text: string
}>()
</script>

<style scoped lang="scss">
.card {
    position: relative;
    border-radius: 160px;
    width: 373.92px;
    height: 616.04px;
    padding: 30px 36px;

    display: flex;
    flex-direction: column;
    align-items: center;

    color: #FFFFFF;

    img {
        position: absolute;
        z-index: 0;
        width: 100%;
        top: 0;
    }

    h3 {
        line-height: 95px;
        font-size: 66px;
    }

    p {
        line-height: 34px;
        font-size: 16px;

        span {
            font-size: 46px;
        }

        @media (max-width: 576px) {
            font-size: 18px;
        }
    }
}
</style>
