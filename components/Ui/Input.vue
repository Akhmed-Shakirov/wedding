<template>
    <input type="text" v-model="modelValue" :placeholder="placeholder">
</template>

<script setup lang="ts">
const modelValue = defineModel<any>()

const props = defineProps<{
    placeholder: string
}>()
</script>

<style scoped lang="scss">
input {
    width: 320px;
    background: url('/input-bg.svg') no-repeat;
    background-size: 100% 100%;
    height: 50px;
    padding: 12px 16px;
    color: #FFFFFF;
    border: 1px solid transparent;

    border: none;
    outline: none;
    box-shadow: none;

    font-size: 28px;

    @media (max-width: 576px) {
        font-size: 22px;
    }
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
    -webkit-text-fill-color: #FFFFFF;
    -webkit-box-shadow: 0 0 0px 1000px #1a1a1a inset;
    transition: background-color 5000s ease-in-out 0s;
}

</style>
