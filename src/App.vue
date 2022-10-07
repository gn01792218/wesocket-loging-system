<template>
  <router-view/>
</template>

<script setup lang="ts">
import { createSocket } from "./webSocket";
createSocket(); //創建websocket 連線

</script>

<style>

</style>
