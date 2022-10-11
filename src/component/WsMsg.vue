<template>
  <div class="ws-msg">
    <p class="w-[200px]">{{dataFomate(new Date())}}</p>
    <p class="w-[110px]" 
      :class="[{'text-acent-server':logMsg.type === LogMsgType.SERVER},
      {'text-acent-client':logMsg.type === LogMsgType.CLIENT},
      {'text-acent-error':logMsg.type === LogMsgType.ERROR ||logMsg.type === LogMsgType.WARN}]"
    >{{ logMsg.title }}</p>
    <p class="log-msg w-[60%] text-grey">{{ logMsg.message }}</p>
  </div>
</template>
  
<script setup lang="ts">
import { LogMsg, LogMsgType } from "../type/log";
import useMoment from '../compasable/useMoment'
defineProps<{
  logMsg: LogMsg;
}>();
const { dataFomate } = useMoment()
</script>