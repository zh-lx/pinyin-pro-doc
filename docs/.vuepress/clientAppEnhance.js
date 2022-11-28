import { defineClientAppEnhance } from '@vuepress/client';
import BasicParamsTable from './components/basic-params-table.vue';
import CodeRun from './components/code-run.vue';
import VXETable from 'vxe-table';
import 'vxe-table/lib/style.css';
import './style.css';

export default defineClientAppEnhance(({ app }) => {
  app.use(VXETable);
  app.component('basic-params-table', BasicParamsTable);
  app.component('code-run', CodeRun);
});
