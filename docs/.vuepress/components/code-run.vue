<template>
  <div class="code-run-container" id="code-run-container">
    <Codemirror
      v-model="code"
      :style="{ height: '400px', width: '100%' }"
      :autofocus="true"
      :indent-with-tab="true"
      :tab-size="4"
      :extensions="extensions"
    />
    <div class="code-options">
      <vxe-button size="small" @click="resetCode">重置</vxe-button>
      <vxe-button size="small" class="run-btn" @click="runCode"
        >运行</vxe-button
      >
    </div>
    <pre class="result-pre">{{ result || '当前无输出结果' }}</pre>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Codemirror } from 'vue-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import beautify from 'json-beautify';
import { pinyin, match, customPinyin } from 'pinyin-pro';

const extensions = [javascript(), oneDark];

// 注册全局 API
// @ts-ignore
window.pinyin = pinyin;
//  @ts-ignore
window.match = match;
//  @ts-ignore
window.customPinyin = customPinyin;
const log = console.log;

console.log = (result) => {
  log(result);
  return beautify(result, null, 2, 80);
};

const initialCode = `const result = pinyin('汉语拼音');

console.log(result);`;

const code = ref(initialCode);

const result = ref('');

const runCode = () => {
  result.value = eval(code.value);
};

const resetCode = () => {
  code.value = initialCode;
  runCode();
};

onMounted(() => {
  runCode();
});
</script>

<style lang="scss" scoped>
:deep(.cm-focused) {
  outline: none !important;
}

#code-run-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
  * {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  :deep(.cm-scroller) {
    .cm-line {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
  }
}
.code-options {
  margin: 12px 0;
}
.result-pre {
  color: aliceblue;
  width: 100%;
}
</style>
