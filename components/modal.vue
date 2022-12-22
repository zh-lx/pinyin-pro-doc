<template>
  <div
    class="pinyin-modal-mask"
    :style="{ display: visible ? 'flex' : 'none' }"
    @click="close"
  >
    <div class="pinyin-modal" @click="(e) => e.stopPropagation()">
      <div class="pinyin-modal-header">
        <div class="pinyin-modal-title">{{ props.title }}</div>
        <div class="close-icon" @click="close">
          <svg
            t="1669624070062"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2668"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="16"
            height="16"
          >
            <path
              d="M557.312 513.248l265.28-263.904c12.544-12.48 12.608-32.704 0.128-45.248-12.512-12.576-32.704-12.608-45.248-0.128l-265.344 263.936-263.04-263.84C236.64 191.584 216.384 191.52 203.84 204 191.328 216.48 191.296 236.736 203.776 249.28l262.976 263.776L201.6 776.8c-12.544 12.48-12.608 32.704-0.128 45.248 6.24 6.272 14.464 9.44 22.688 9.44 8.16 0 16.32-3.104 22.56-9.312l265.216-263.808 265.44 266.24c6.24 6.272 14.432 9.408 22.656 9.408 8.192 0 16.352-3.136 22.592-9.344 12.512-12.48 12.544-32.704 0.064-45.248L557.312 513.248z"
              p-id="2669"
            ></path>
          </svg>
        </div>
      </div>
      <div class="pinyin-modal-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, watch, defineEmits, onMounted, ref } from 'vue';
const props = defineProps<{ visible: boolean; title: string }>();
const emit = defineEmits(['update:visible']);
const isMounted = ref(false);

const close = () => {
  emit('update:visible', false);
};

onMounted(() => {
  isMounted.value = true;
});

watch(
  () => props.visible,
  (val) => {
    if (!isMounted.value) {
      return;
    }
    if (val) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  },
  {
    immediate: true,
  }
);
</script>

<style scoped lang="scss">
.pinyin-modal-mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
}

.pinyin-modal {
  width: 800px;
  max-width: 80vw;

  background-color: #fff;
  border-radius: 8px;
  box-shadow: var(--hover-box-shadow);
  .pinyin-modal-header {
    display: flex;
    padding: 12px 16px;
    font-weight: 600;
    position: relative;
    border-bottom: 1px solid #ccc;
    .pinyin-modal-title {
      height: 24px;
      line-height: 24px;
    }
    .close-icon {
      position: absolute;
      top: 12px;
      right: 16px;
      width: 24px;
      height: 24px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .pinyin-modal-content {
    max-height: 70vh;
    padding: 16px;
    overflow: auto;
  }
}
</style>
