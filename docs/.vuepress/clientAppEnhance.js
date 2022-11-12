import * as Icons from '@element-plus/icons-vue';
import { defineClientAppEnhance } from '@vuepress/client';
import ElementPlus from 'element-plus';
import BasicParamsTable from './components/basic-params-table.vue';
import CodeRun from './components/code-run.vue';
import 'element-plus/theme-chalk/index.css';

export default defineClientAppEnhance(({ app }) => {
  app.use(ElementPlus);
  app.component('basic-params-table', BasicParamsTable);
  app.component('code-run', CodeRun);
  // icon
  for (const icon in Icons) {
    // eslint-disable-next-line import/namespace
    app.component('ElIcon' + icon, Icons[icon]);
  }
});
