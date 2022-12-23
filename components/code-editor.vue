<template>
  <div id="tc-editor"></div>
  <div class="code-options">
    <button size="small" @click="resetCode">重置</button>
    <button
      style="margin-left: 16px"
      size="small"
      class="run-btn"
      @click="runCode"
    >
      运行
    </button>
  </div>
  <pre class="result-pre">{{ result || '当前无输出结果' }}</pre>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import beautify from 'json-beautify';
import { pinyin, match, customPinyin } from 'pinyin-pro';
import TCEditor from 'tc-editor';

const tce = ref<TCEditor>();

// 标记组件注册成功
// @ts-ignore
window.CodeEditorMounted = true;

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
  code.value = tce.value?.code() || '';
  result.value = eval(code.value);
};

const resetCode = () => {
  tce.value?.code(initialCode);
  code.value = initialCode;
  runCode();
};

onMounted(() => {
  tce.value = new TCEditor({ el: '#tc-editor', height: 300 });
  tce.value?.code(initialCode);
  runCode();
});
</script>

<style lang="scss" scoped>
#tc-editor {
  width: 100% !important;
  :deep(.code_editor) {
    padding: 10px 10px 10px 35px !important;
  }
  :deep(.code_editor_view) {
    margin: 0 !important;
    padding: 10px 10px 10px 35px !important;
  }
  :deep(.code_set_w) {
    display: none;
  }
  :deep(.code_line_w) {
    padding-top: 10px !important;
  }
}
.result-pre {
  color: aliceblue;
  width: 100%;
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
button {
  background-color: #fff;
  font-family: -apple-system, system-ui, Segoe UI, Roboto, Ubuntu, Cantarell,
    Noto Sans, sans-serif, BlinkMacSystemFont, 'Helvetica Neue', 'PingFang SC',
    'Hiragino Sans GB', 'Microsoft YaHei', Arial;
  height: 28px;
  line-height: 28px;
  padding: 0 12px;
  border: 1px solid #cfcfcf;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 4px;
  color: #333;
  &:hover {
    color: var(--blue-6);
    border-color: var(--blue-6);
  }
}
</style>
