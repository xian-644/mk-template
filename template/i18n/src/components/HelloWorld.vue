<template>
  <div class="hello-world">
    <h2>{{ msg }}</h2>
    <div class="counter-demo">
      <h3>{{ t('counter.title') }}</h3>
      <p>{{ t('counter.current') }}: {{ counterStore.count }}</p>
      <p>{{ t('counter.double') }}: {{ counterStore.doubleCount }}</p>
      <div class="buttons">
        <el-button type="primary" @click="counterStore.increment">{{
          t('counter.increment')
        }}</el-button>
        <el-button type="danger" @click="counterStore.decrement">{{
          t('counter.decrement')
        }}</el-button>
        <el-button @click="counterStore.reset">{{ t('counter.reset') }}</el-button>
      </div>
    </div>

    <div class="counter-demo">
      <h3>{{ t('user.title') }}</h3>
      <p>
        {{ t('user.current') }}: {{ userStore.user ? userStore.user.name : t('user.notLoggedIn') }}
      </p>
      <div class="buttons">
        <el-button v-if="!userStore.isLoggedIn" type="success" @click="login">{{
          t('user.login')
        }}</el-button>
        <el-button v-else type="warning" @click="userStore.logout">{{
          t('user.logout')
        }}</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '../store/counter'
import { useUserStore } from '../store/user'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

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
