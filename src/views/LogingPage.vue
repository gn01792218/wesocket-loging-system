<template>
    <div class="login-page">
      <TheHeader />
      <!-- 切桌 -->
      <!-- <div class="flex">
        <button class="primary-btn"
          v-for="table in tableList" :key="table.name"
          @click="tableJoinCall(table.name)"
        >
          {{table.name}}
        </button>
      </div> -->
      <!-- loging內容 -->
      <div class="w-[90%] mx-auto flex flex-col justify-center">
        <WsMsg class="mb-2" v-for="log in logArr" :key="log.message"
          :log-msg="log"
        />
      </div>
    </div>
  
  </template>
  <script setup lang="ts">
  import { onMounted } from 'vue'
  import WsMsg from '../component/WsMsg.vue'
  import TheHeader from '../component/TheHeader.vue'
  import { LogMsg } from '../type/log'
  import { useStore } from 'vuex'
  import useLogSystem from '../compasable/useLogSystem'

  const store = useStore()
  const { logArr } = useLogSystem(store)

  </script>