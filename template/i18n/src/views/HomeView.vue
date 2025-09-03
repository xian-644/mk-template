<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ t('home.welcome') }}</h1>
    <p>{{ t('home.description') }}</p>
    <ul>
      <li>{{ t('home.techStack.vue') }}</li>
      <li>{{ t('home.techStack.router') }}</li>
      <li>{{ t('home.techStack.pinia') }}</li>
      <li>{{ t('home.techStack.elementPlus') }}</li>
      <li>{{ t('home.techStack.axios') }}</li>
      <li>{{ t('home.techStack.lodash') }}</li>
      <li>{{ t('home.techStack.i18n') }}</li>
    </ul>
    <div class="buttons">
      <el-button type="primary" @click="$router.push('/about')">{{ t('nav.about') }}</el-button>
      <el-button type="success" @click="$router.push('/login')">{{ t('nav.login') }}</el-button>
      <el-button type="warning" @click="$router.push('/non-existent')">{{
        t('notFound.title')
      }}</el-button>
    </div>
    <div class="language-switcher">
      <el-button @click="switchLanguage('zh-CN')">中文</el-button>
      <el-button @click="switchLanguage('en-US')">English</el-button>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

// 切换语言
const switchLanguage = lang => {
  locale.value = lang
  localStorage.setItem('locale', lang)
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

li {
  background-color: #f0f0f0;
  padding: 8px 16px;
  border-radius: 4px;
  margin: 5px;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}
</style>
