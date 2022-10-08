<template>
    <div class="login-page">
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
      <div class="">
        <WsMsg class="mb-2" v-for="log in logArr" :key="log.message"
          :log-msg="log"
        />
      </div>
    </div>
  
  </template>
  <script setup lang="ts">
  import { computed, onMounted, ref } from 'vue'
  import { LogMsg } from '../type/log'
  import { useStore } from 'vuex'
  import useTable from '../compasable/useTable'
  import WsMsg from '../component/WsMsg.vue'
  const store = useStore()
  const { tableJoinCall,tableList } = useTable(store)

  const logArr = computed(()=>{
    return store.state.logSystem.logMsgArr
  })
  onMounted(()=>{
    let tableA = tableList.value.find((i:any)=>i.name.includes('A'))
    tableJoinCall(tableA.uuid)
  })

  
  </script>