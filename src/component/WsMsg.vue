<template>
  <div class="ws-msg">
    <p class="w-[90px]">{{dataFomate(new Date())}}</p>
    <p class="w-[90px]">{{ logMsg.title }}</p>
    <p class="w-[85%]">{{ logMsg.message }}</p>
  </div>
</template>
  
<script setup lang="ts">
import { LogMsg } from "../type/log";
import useMoment from '../compasable/useMoment'
defineProps<{
  logMsg: LogMsg;
}>();
const { dataFomate } = useMoment()
</script>