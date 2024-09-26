<template>
    <section class="information container">
        <div class="information__info">
            <div class="information__info-left">
                <h3>Расписание</h3>

                <ul>
                    <template v-for="(item, index) in data" :key="item.name">
                        <li :class="{ 'active': index == active }" @click="active = index">
                            {{ item.name }}
                            <p>{{ item.date }}</p>
                        </li>
                        <div class="animation-flap" :class="{ 'animation-flap__show' : active == index }">
                            <div class="information__info-right mobail" :style="`padding: ${active == index ? 20 : 0}px`">
                                <div>
                                    <h3>{{ data[active].name }}</h3>
                                    <p>{{ data[active].text }}</p>

                                    <br>
                                    <br>
                                    <br class="mobail-hide">
                                    <br class="mobail-hide">

                                    <h4>Адрес:</h4>
                                    <p>Розыбакиева 182а (Louvre)</p>
                                    <br>
                                    <h4>Дата и время:</h4>
                                    <p>12.04.2024 ({{ data[active].date }})</p>
                                </div>
                                <!-- <img :src="data[active].img" alt="information"> -->
                            </div>
                        </div>
                    </template>
                </ul>
            </div>
            <div class="information__info-right">
                <div>
                    <h3>{{ data[active].name }}</h3>
                    <p>{{ data[active].text }}</p>

                    <br>
                    <br>
                    <br class="mobail-hide">
                    <br class="mobail-hide">

                    <h4>Адрес:</h4>
                    <p>Розыбакиева 182а (Louvre)</p>
                    <br>
                    <h4>Дата и время:</h4>
                    <p>12.04.2024 ({{ data[active].date }})</p>
                </div>
                <!-- <img :src="data[active].img" alt="information"> -->
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const active = ref(0)

const data = ref([
    {
        name: 'Ожидание гостей',
        date: '17:00 - 18:00',
        text: 'У входной зоны вы сможете посмотреть план рассадки, сделать красивые фотографии на память а так же отведать наш вкусный фуршет',
        img: '/restik-1.png'
    },
    {
        name: 'Рассадка',
        date: '18:00',
        text: 'У входной зоны вы сможете посмотреть план рассадки, сделать красивые фотографии на память а так же отведать наш вкусный фуршет',
        img: '/restik-1.png'
    },
    {
        name: 'Начало торжества',
        date: '18:10',
        text: 'У входной зоны вы сможете посмотреть план рассадки, сделать красивые фотографии на память а так же отведать наш вкусный фуршет',
        img: '/restik-1.png'
    },
    {
        name: 'Розыгрыш тайного приза',
        date: '22:30',
        text: 'У входной зоны вы сможете посмотреть план рассадки, сделать красивые фотографии на память а так же отведать наш вкусный фуршет',
        img: '/restik-1.png'
    },
    {
        name: 'After Party',
        date: '23:59',
        text: 'У входной зоны вы сможете посмотреть план рассадки, сделать красивые фотографии на память а так же отведать наш вкусный фуршет',
        img: '/restik-1.png'
    },
])
</script>

<style scoped lang="scss">
.information {
    padding: 100px 0;
    background: #F1F6EF;

    &__info {
        border: 2px solid #19381F;
        display: grid;
        grid-template-columns: 1fr 1fr;

        &-left {
            background: #19381F;
            padding: 40px 0 40px 40px;
            color: #F1F6EF;

            h3 {
                font-size: 65px;
                margin-bottom: 50px;
            }

            ul {
                display: flex;
                flex-direction: column;

                li {
                    padding: 16px 14px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-size: 32px;
                    border-bottom: 2px solid #F1F6EF;
                    margin-right: 40px;
                    cursor: pointer;
                    transition: .2s;

                    &:hover {
                        opacity: .7;
                    }
                }

                .active {
                    margin-right: 0;
                    padding-right: 55px;
                    background: #F1F6EF;
                    color: #19381F;
                    position: relative;

                    &:hover {
                        opacity: 1;
                    }

                    &::before {
                        position: absolute;
                        top: -2px;
                        left: 0;
                        width: 100%;
                        height: 2px;
                        background: #F1F6EF;
                        content: '';
                    }
                }
            }
        }

        .mobail {
            display: none;
        }

        &-right {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 30px;
            padding: 20px;
            color: #19381F;
            background: #F1F6EF;

            h3 {
                font-size: 45px;
                margin-bottom: 50px;
                font-weight: 400;
            }

            p {
                font-size: 20px;
                line-height: 26.5px;
            }

            h4 {
                font-size: 30px;
                margin-bottom: 5px;
            }
        }
    }


    @media (max-width: 1200px) {
        &__info {
            grid-template-columns: 1fr;

            &-left {
                background: #19381F;
                padding: 40px;

                ul {
                    li {
                        margin-right: 0;
                    }

                    .active {
                        padding-right: 14px;
                        border-color: #19381F;
                    }
                }
            }

            &-right {
                display: none;
            }

            .mobail {
                padding: 0;
                min-height: 0;
                display: flex;

                h3 {
                    font-size: 35px;
                    margin-bottom: 30px;
                    font-weight: 400;
                }
            }
        }
    }

    @media (max-width: 768px) {
        &__info {
            .mobail {
                flex-direction: column;

            }
        }
    }

    @media (max-width: 576px) {
        padding: 70px 0;
        // background: #19381F;

        &__info {
            border: none;

            &-left {
                border-radius: 12px;
                padding: 20px;
                // background: #F1F6EF;
                // padding: 0;
                // color: #19381F;

                h3 {
                    font-size: 45px;
                    margin-bottom: 50px;
                }

                ul {
                    li {
                        padding: 16px 14px;
                        font-size: 22px;
                        border-bottom: 2px solid #F1F6EF;
                    }
                }
            }

            .mobail {
                flex-direction: column;
                border-radius: 0 0 12px 12px;

                h3 {
                    font-size: 35px;
                    margin-bottom: 20px;
                    display: none;
                }

                p {
                    font-size: 18px;
                    line-height: 20px;
                }

                h4 {
                    font-size: 24px;
                    margin-bottom: 5px;
                }

                .mobail-hide {
                    display: none;
                }

                img {
                    width: 100%;
                }
            }
        }
    }

}
</style>
