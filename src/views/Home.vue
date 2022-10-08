<template>
  <div class="flex items-center h-screen">
    <form class="primary-form mx-auto">
      <input class="primary-input" type="text" placeholder="請輸入遊戲Token" v-model="userToken" @keypress.enter="loginRequest(userToken)">
      <button class="primary-btn" @click="loginRequest(userToken)">登入</button>
    </form>
  </div>
</template>
<script setup lang="ts">
import { useStore } from 'vuex'
import useLogin from '../compasable/useLogin'
const store = useStore()
const { userToken, loginRequest } = useLogin(store)

</script>
