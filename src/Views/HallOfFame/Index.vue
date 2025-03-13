<template>
    <h1>{{ t('halloffame.welcome') }}</h1>
    <h2>{{ t('halloffame.LyricsAlpha') }}</h2>
    <h2>{{ t('halloffame.LyricsBarvo') }}</h2>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>