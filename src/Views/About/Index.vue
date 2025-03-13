<template>
    <h1>{{ t('about.welcome') }}</h1>
    <h1>{{ t('about.authors') }}</h1>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

</script>