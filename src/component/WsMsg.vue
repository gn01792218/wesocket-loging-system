<template>
  <div class="ws-msg">
    <p>{{new Date()}}</p>
    <p>{{ logMsg.title }}</p>
    <p>{{ logMsg.message }}</p>
  </div>
</template>
  
<script setup lang="ts">
import { LogMsg } from "../type/log";
defineProps<{
  logMsg: LogMsg;
}>();
</script>