<template>
  <div class="code-run-container">
    <Codemirror
      v-model="code"
      :style="{ height: '400px', width: '100%' }"
      :autofocus="true"
      :indent-with-tab="true"
      :tab-size="4"
      :extensions="extensions"
    />
    <div class="code-options">
      <el-button @click="resetCode">重置</el-button>
      <el-button type="primary" class="run-btn" @click="runCode"
        >运行</el-button
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
import { pinyin, match, customPinyin } from 'pinyin-pro';
import beautify from 'json-beautify';

const extensions = [javascript(), oneDark];

// 注册全局 API
window.pinyin = pinyin;
window.match = match;
window.customPinyin = customPinyin;
const log = console.log;
console.log = (result) => {
  log(result);
  return beautify(result, [], 2, 80);
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

.code-run-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
}
.code-options {
  margin: 12px 0;
}
.result-pre {
  color: aliceblue;
  width: 100%;
}
</style>
