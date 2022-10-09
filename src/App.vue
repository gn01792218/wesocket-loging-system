<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<script setup lang="ts">
import { createSocket } from "./webSocket";

createSocket(); //創建websocket 連線

</script>
