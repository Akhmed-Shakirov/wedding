<template>
    <Header />

    <main class="main">

        <Banner />

        <Invitation />

        <Information />

        <Banquet />

        <Feedback />

    </main>

    <Footer />

    <UiMusic />
</template>

<script setup lang="ts">
import { useTitle, useFavicon } from '@vueuse/core'

const icon = useFavicon()

const title = useTitle()
title.value = 'A&D Wedding'


const updateFavicon = (theme: string) => {
    if (theme === 'dark') {
        icon.value = '/logo-l.svg'
    } else {
        icon.value = '/logo.svg'
    }
};

onMounted(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    updateFavicon(mediaQuery.matches ? 'dark' : 'light');

    mediaQuery.addEventListener('change', (e) => {
        updateFavicon(e.matches ? 'dark' : 'light');
    });
})
</script>
