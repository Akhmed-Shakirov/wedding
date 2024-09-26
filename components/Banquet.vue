<template>
    <section class="banquet container">
        <div class="banquet__info">
            <h2>Louvre Ball Room</h2>
            <p>Ресторан находится по адресу Розыбакиева 182а</p>
        </div>
        <div class="banquet__images">
            <img src="/restik-1.png" alt="restik">
            <img src="/restik-2.png" alt="restik">
            <img src="/restik-3.png" alt="restik">
            <img src="/restik-4.png" alt="restik">
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.banquet {
    padding: 60px 0 100px;
    background: #F8F8F8;

    &__info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #19381F;
        gap: 16px;
    }

    h2 {
        font-size: 76px;
        font-weight: 400;
    }

    p {
        font-size: 24px;
    }

    &__images {
        margin-top: 70px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 80px;

        img {
            width: 100%;
        }
    }


    @media (max-width: 1480px) {
        &__images {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
        }

        img {
            width: 350px;
        }
    }

    @media (max-width: 576px) {
        padding: 70px 0;


        h2 {
            font-size: 45px;
        }

        p {
            font-size: 26px;
            text-align: center;
        }

        &__images {
            margin-top: 50px;
            gap: 40px;

            img {
                width: 40%;
            }
        }
    }
}
</style>
