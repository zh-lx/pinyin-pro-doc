import { defineClientConfig } from '@vuepress/client';
import BasicParamsTable from './basic-params-table.vue';
import CodeRun from './code-run.vue';

export default defineClientConfig({
  enhance({ app }) {
    app.component('basic-params-table', BasicParamsTable);
    app.component('code-run', CodeRun);
    app.mixin({
      mounted() {
        import('./code-editor.vue').then((m) => {
          app.component('code-editor', m.default);
        });
      },
    });
  },
});
