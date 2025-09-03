<template>
  <div class="hello-world">
    <h2>{{ msg }}</h2>
    <div class="counter-demo">
      <h3>计数器示例</h3>
      <p>当前计数: {{ counterStore.count }}</p>
      <p>双倍计数: {{ counterStore.doubleCount }}</p>
      <div class="buttons">
        <el-button type="primary" @click="counterStore.increment">增加</el-button>
        <el-button type="danger" @click="counterStore.decrement">减少</el-button>
        <el-button @click="counterStore.reset">重置</el-button>
      </div>
    </div>

    <div class="counter-demo">
      <h3>用户示例</h3>
      <p>当前用户: {{ userStore.user ? userStore.user.name : '未登录' }}</p>
      <div class="buttons">
        <el-button v-if="!userStore.isLoggedIn" type="success" @click="login">登录</el-button>
        <el-button v-else type="warning" @click="userStore.logout">退出登录</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '../store/counter'
import { useUserStore } from '../store/user'

// 定义props
defineProps({
  msg: {
    type: String,
    default: '欢迎使用 Vue3 组件'
  }
})

// 使用store
const counterStore = useCounterStore()
const userStore = useUserStore()

// 登录方法
const login = () => {
  userStore.login({ username: 'demo', password: 'password' })
}
</script>

<style scoped>
.hello-world {
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.counter-demo {
  margin: 20px 0;
  padding: 15px;
  border: 1px dashed #ccc;
  border-radius: 4px;
}

.buttons {
  margin-top: 10px;
  display: flex;
  gap: 10px;
  justify-content: center;
}
</style>
