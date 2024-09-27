<template>
    <section class="banner container">
        <div class="banner__info">
            <img src="/logo-2.svg" alt="logo" class="banner__logo">
            <h3>12 Октября 2024</h3>
            <a href="https://2gis.kz/almaty/firm/70000001045593602?m=76.891737%2C43.229713%2F17.3%2Fr%2F-12.43">
                <img src="/2gis.svg" class="banner__2gis">
                Розыбакиева 182а (Louvre)
            </a>
        </div>
        <div class="banner__images">
            <img src="/banner-1.png" alt="banner">
            <img src="/banner-2.png" alt="banner">
            <img src="/banner-3.png" alt="banner">
            <img src="/banner-line.png" alt="banner">
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.banner {
    padding: 24px 0;
    background: #f1f3ea;

    &__info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 16px;
        color: #19381F;
    }

    &__2gis {
        width: 40px;
        height: 40px;
        border-radius: 6px;
    }

    &__logo {
        width: 200px;
    }

    &__images {
        margin-top: 70px;
        display: flex;
        align-items: start;
        justify-content: space-between;
        position: relative;

        img {
            &:nth-child(1),
            &:nth-child(3) {
                width: 250px;
                position: relative;
                z-index: 1;
            }


            &:nth-child(2) {
                position: absolute;
                width: 450px;
                left: 50%;
                transform: translateX(-50%);
                z-index: 1;
            }

            &:nth-child(4) {
                position: absolute;
                z-index: 0;
                width: 100%;
                top: -60px;
            }
        }
    }

    h3 {
        font-size: 54px;
        line-height: 70px;
        font-weight: 400;
    }

    a {
        font-size: 42px;
        line-height: 46px;
        color: #19381F;
        text-align: center;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    @media (max-width: 1400px) {
        &__images {
            img {
                &:nth-child(4) {
                    top: -20px;
                }
            }
        }
    }

    @media (max-width: 1200px) {
        &__images {
            img {
                &:nth-child(4) {
                    top: 0px;
                }
            }
        }
    }

    @media (max-width: 992px) {
        &__images {
            img {
                &:nth-child(4) {
                    display: none;
                }
            }
        }
    }

    @media (max-width: 768px) {
        &__images {
            flex-direction: column;
            img {

                &:nth-child(2) {
                    left: auto;
                    right: 0;
                    transform: translateX(0);
                }
            }
        }
    }

    @media (max-width: 576px) {
        h3 {
            font-size: 40px;
            line-height: 40px;
        }

        a {
            font-size: 32px;
            line-height: 32px;
            flex-direction: column-reverse;
            gap: 12px;
        }

        &__images {
            gap: 200px;

            img {

                &:nth-child(2) {
                    width: 80%;
                    top: 240px;
                }
            }
        }
    }

}
</style>
