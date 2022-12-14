import { webpackBundler } from '@vuepress/bundler-webpack';
import { defineUserConfig } from '@vuepress/cli';
import WriteTheme from './node_modules/vuepress-theme-write';
import sidebar from './sidebar';
import { getDirname, path } from '@vuepress/utils';

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  title: 'pinyin-pro',
  description:
    'js汉字转拼音库。获取中文拼音、韵母、声母、声调、首字母，支持拼音匹配',
  theme: WriteTheme({
    logo: '/images/pinyin-logo.png',
    type: 'docs',
    sidebar,
    sidebarDepth: 6,
  }),
  alias: {
    NavbarExtra: path.resolve(__dirname, './components/navbar-extra.vue'),
  },
  clientConfigFile: path.resolve(__dirname, './components/app.ts'),
  bundler: webpackBundler({}),
  define: {
    $Site: {
      title: '',
      description: '',
      start: '快速上手',
      startPath: '/guide/start.md',
      type: 'docs',
      hidePageMeta: true,
      homeImg: '/images/pinyin.png',
    },
    $HomeItems: [
      {
        title: '功能丰富',
        text: '支持获取拼音/声母/韵母/音调/首字母、多音字模式、人名姓氏模式、拼音匹配等多种功能',
        img: '/images/function.png',
      },
      {
        title: '性能优异',
        text: '底层优异的单字转换算法 + 经过热度排序的词语库，具备优异的拼音转换性能',
        img: '/images/rocket.png',
      },
      {
        title: '识别准确',
        text: '专业的贪心算法 + 经过完善处理的词语拼音库，拼音识别准确率远超市面竞品',
        img: '/images/arrow.png',
      },
    ],
  },
});
