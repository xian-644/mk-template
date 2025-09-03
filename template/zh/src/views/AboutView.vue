<template>
  <div class="about">
    <h1>关于</h1>
    <p>这是一个基于 Vue3 + Vite 的通用模板，旨在提供一个良好的开发起点。</p>
    <p>您可以根据项目需求自由定制和扩展这个模板。</p>
    <el-button @click="$router.push('/')">返回首页</el-button>
  </div>
</template>

<script setup>
// 在<script setup>中不需要显式导出组件
</script>

<style scoped>
.about {
  text-align: center;
  padding: 20px;
}
</style>
