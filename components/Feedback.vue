<template>
    <section class="feedback container">
        <h2>RSVP</h2>
        <div class="feedback__info">
            <p><span>Я,</span> <UiInput v-model="name" placeholder="Ваше имя" /> <UiSelect v-model="turnout" :selects="turnoutes" /> на торжестве.</p>
            <template v-if="turnout === 'буду присутсвовать'">
                <p>В моем ответе упоминается, что я буду <UiSelect v-model="withs" :selects="withes" /></p>
                <p>Вы увидите меня на танцполе, когда заиграет <UiInput v-model="muzik" placeholder="Название песни" /></p>
            </template>
        </div>
        <button :disabled="isLoading" @click="sendEmail">
            <UiIcon icon="loader" class="spin" v-if="isLoading" style="width: 22px; height: 22px;" />
            {{ isLoading ? 'Отправка' : 'Отправить' }}
        </button>

        <!-- <p v-if="isGood">Заявка отправлена!</p> -->
    </section>
</template>

<script setup lang="ts">

const name = ref(null)
const muzik = ref(null)

const turnout = ref('буду присутсвовать')
const turnoutes = ref([
    { name: 'буду присутсвовать', value: 'буду присутсвовать' },
    { name: 'не смогу присутсвовать', value: 'не смогу присутсвовать' },
])


const withs = ref('с супругом/супругой')
const withes = ref([
    { name: 'с супругом/супругой', value: 'с супругом/супругой' },
    { name: 'один/одна', value: 'один/одна' },
])


const isLoading = ref(false);
const isGood = ref(false);

const sendEmail = async () => {
    if (!name.value) {
        alert('Заполните Имя')
        return
    }

    isLoading.value = true;
    isGood.value = false;
    try {
        await fetch("/api/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name.value,
                muzik: muzik.value,
                turnout: turnout.value,
                withs: withs.value,
            }),
        });
        isGood.value = true;
        alert('Заявка отправлена')
    } catch (error) {
        isGood.value = false;
        alert('Ошибка сервера')
    } finally {
        isLoading.value = false;
    }
}

</script>

<style scoped lang="scss">
.feedback {
    padding: 100px 0;
    background: #19381F;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 60px;

    h2 {
        color: #FFFFFF;
        font-weight: 400;
        font-size: 96px;
    }

    p {
        color: #FFFFFF;
        font-size: 28px;
        line-height: 46px;
        text-align: center;
        font-weight: 300;

        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;

        span {
            font-size: 60px;
        }
    }

    button {
        font-size: 22px;
        color: #19381F;
        background: #FFC700;
        border-radius: 35px;
        padding: 14px 45px;
        font-family: Poppins;
        border: none;

        &:disabled {
            opacity: .6;
        }

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;

        i {
            width: 22px;
            height: 22px;
        }
    }

    &__info {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
    }

    @media (max-width: 576px) {
        padding: 70px 0;
        gap: 40px;

        h2 {
            font-size: 60px;
        }


        &__info {
            padding: 20px;
            gap: 40px;
        }

        p {
            align-items: center;
            justify-content: center;
            font-size: 22px;
            line-height: 30px;

            span {
                font-size: 40px;
            }
        }
    }
}
</style>
