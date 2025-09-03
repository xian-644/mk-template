<template>
  <div class="about">
    <h1>{{ t('about.title') }}</h1>
    <p>{{ t('about.description') }}</p>
    <p>{{ t('about.customization') }}</p>
    <el-button @click="$router.push('/')">{{ t('about.backToHome') }}</el-button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.about {
  text-align: center;
  padding: 20px;
}
</style>
