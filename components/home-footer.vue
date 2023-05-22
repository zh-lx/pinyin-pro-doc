<template>
  <div class="site-info">
    <a class="site-code" href="https://beian.miit.gov.cn/"
      >鲁ICP备20023182号-2</a
    >
    <a class="copy-right" href="javascript:;">CopyRight@2023</a>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.site-info {
  width: 100%;
  height: 68px;
  margin-top: 20px;
  border-top: var(--wc-border-light);
  display: flex;
  justify-content: center;
  align-items: center;
  .site-code {
    color: var(--wc-text-primary);
    &:hover {
      color: var(--wc-text-brand) !important;
    }
  }
  .copy-right {
    color: var(--wc-text-primary);
    border-left: var(--wc-border-primary);
    padding-left: 12px;
    margin-left: 12px;
  }
}
</style>
