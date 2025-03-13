<template>
    <h1>{{ t('playerstatus.welcome') }}</h1>
    <h2>{{ t('playerstatus.wwsMe') }}</h2>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>