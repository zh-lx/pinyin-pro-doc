<template>
  <div class="star-img-container">
    <img
      class="star-img"
      src="https://img.shields.io/github/stars/zh-lx/pinyin-pro?style=social"
      @click="jump2Github"
      alt="GitHub"
    />
  </div>
</template>

<script setup lang="ts">
function jump2Github() {
  window.open('https://github.com/zh-lx/pinyin-pro');
}
</script>

<style lang="scss" scoped>
.star-img-container {
  display: flex;
  align-items: center;
  .star-img {
    cursor: pointer;
  }
}
</style>
