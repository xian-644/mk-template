<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>欢迎使用 Vue3 通用模板</h1>
    <p>这是一个基于 Vue3 + Vite 的通用模板，包含了常用的功能和配置</p>
    <ul>
      <li>Vue 3</li>
      <li>Vue Router</li>
      <li>Pinia</li>
      <li>Element Plus</li>
      <li>Axios</li>
      <li>Lodash</li>
    </ul>
    <div class="buttons">
      <el-button type="primary" @click="$router.push('/about')">关于</el-button>
      <el-button type="success" @click="$router.push('/login')">登录</el-button>
      <el-button type="warning" @click="$router.push('/non-existent')">404页面</el-button>
    </div>
  </div>
</template>

<script setup>
// 在<script setup>中不需要显式导出组件
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
