<template>
    <div id="logPage" class="log-page scroll-auto">
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
      <div id="logBox" class="relative w-[90%] mx-auto flex flex-col justify-center">
        <img v-show="onScroll" class="fixed bottom-[10%] right-[10%] hover:opacity-70 hover:scale-95" :src="getAssetsFileURL('images/toBottom.png')" alt="向下" @click="toBottom">
        <WsMsg class="mb-1" v-for="log in logArr" :key="log.message"
          :log-msg="log"
        />
      </div>
    </div>
  
  </template>
  <script setup lang="ts">
  import WsMsg from '../component/WsMsg.vue'
  import TheHeader from '../component/TheHeader.vue'
  import { LogMsg } from '../type/log'
  import { useStore } from 'vuex'
  import useLogSystem from '../compasable/useLogSystem'
  import useUtil from '../compasable/useUtil'

  const store = useStore()
  const { logArr, toBottom, onScroll } = useLogSystem(store)
  const { getAssetsFileURL } = useUtil()
  </script>