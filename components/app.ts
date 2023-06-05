import { defineClientConfig } from '@vuepress/client';
import BasicParamsTable from './basic-params-table.vue';
import CodeRun from './code-run.vue';
import HTMLBasicDemo from './html-basic-demo.vue';
import HTMLStyleDemo from './html-style-demo.vue';
import HTMLNoToneDemo from './html-no-tone-demo.vue';

export default defineClientConfig({
  enhance({ app }) {
    app.component('basic-params-table', BasicParamsTable);
    app.component('html-basic-demo', HTMLBasicDemo);
    app.component('html-style-demo', HTMLStyleDemo);
    app.component('html-no-tone-demo', HTMLNoToneDemo);
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
