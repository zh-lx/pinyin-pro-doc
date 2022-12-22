<template>
  <code-editor v-show="delayShow" />
</template>

<script setup lang="ts">
import { onMounted, ref, getCurrentInstance } from 'vue';
const delayShow = ref(false);

const switchShow = () => {
  // @ts-ignore
  if (window.CodeEditorMounted) {
    return;
  } else {
    delayShow.value = !delayShow.value;
    requestAnimationFrame(() => {
      switchShow();
    });
  }
};

onMounted(() => {
  switchShow();
});
</script>
