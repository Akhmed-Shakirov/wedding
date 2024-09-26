<template>
    <section class="invitation container">
        <img src="/dote.svg" alt="dote" class="invitation__dote">
        {{  }}
        <h2>Приглашаем вас
            <template v-if="$route.query?.name">
                {{ `${$route.query?.name} ${$route.query?.name2 ? 'и ' + $route.query?.name2 : '' }` }}
            </template> присодеиниться <br>
            к нашему свадебному торжеству</h2>
        <div class="invitation__info breakout">
            <UiCard
                title="1"
                first="П"
                text="риглашаем Вас на торжество, посвященное бракосочетанию и соединению двух любящих сердец. Нам будет очень приятно, если вы сможете присутствовать на нашем первом семейном празднике, где будут соединены наши судьбы и сердца не только перед законом, но и с благословления Всевышнего."
            />
            <img src="/invitation-1.png" alt="invitation">
            <UiCard
                title="2"
                first="Н"
                text="ам очень хотелось бы, чтобы Вы смогли стать свидетелем этого важного для нас события и разделить с нами радостные моменты в волнующей атмосфере любви и счастья! Нам будет очень приятно, если Вы разделите с нами лучшие минуты этого счастливого дня и сохраните о нем в сердце самые теплые воспоминания."
            />
            <img src="/invitation-2.png" alt="invitation">
        </div>
    </section>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.invitation {
    padding: 340px 0 100px;
    background: #19381F;
    position: relative;

    h2 {
        font-size: 54px;
        line-height: 80px;
        font-weight: 400;
        color: #FFFFFF;
        text-align: center;
    }

    &__info {
        margin-top: 70px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 60px;
    }

    .card, img {
        width: 100%;
    }

    &__dote {
        position: absolute;
        z-index: 0;
        top: 20%;
        left: -10%;
        width: 500px !important;
    }

    @media (max-width: 1480px) {
        &__info {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
        }

        .card, img {
            width: 350px;
        }
    }

    @media (max-width: 576px) {
        padding: 70px 0 70px;


        &__info {
            margin-top: 50px;
            gap: 40px;
        }

        h2 {
            font-size: 34px;
            line-height: 40px;
        }

        &__dote {
            display: none;
        }
    }
}
</style>
