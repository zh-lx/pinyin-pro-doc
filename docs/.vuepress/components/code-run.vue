<template>
  <code-editor v-if="delayShow" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
const delayShow = ref(false);

onMounted(() => {
  setTimeout(() => {
    delayShow.value = true;
  }, 100);
});
</script>
