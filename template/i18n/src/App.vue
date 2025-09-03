<template>
  <div class="app">
    <el-config-provider>
      <router-view />
    </el-config-provider>
  </div>
</template>

<script setup>
// 在<script setup>中不需要显式导出组件
// App.vue通常不需要太多逻辑，所以这里保持简洁
</script>

<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
