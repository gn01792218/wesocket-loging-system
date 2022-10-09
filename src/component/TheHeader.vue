<template>
    <div>
        <button class="primary-btn" @click="betRequest(1,2)">下注</button>
    </div>
</template>
  
<script setup lang="ts">
  import { useStore } from 'vuex'
  import useBet from '../compasable/useBet'
  const store = useStore()
  const { betRequest } = useBet(store)
  
</script>