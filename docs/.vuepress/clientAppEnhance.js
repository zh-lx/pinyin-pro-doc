import { defineClientAppEnhance } from '@vuepress/client';
import BasicParamsTable from './components/basic-params-table.vue';
import CodeRun from './components/code-run.vue'
import './style.css';

export default defineClientAppEnhance(({ app }) => {
  app.component('basic-params-table', BasicParamsTable);
  app.component('code-run', CodeRun);
  app.mixin({
    mounted() {
      import('./components/code-editor.vue').then((m) => {
        app.component('code-editor', m.default);
      });
    },
  });
});
