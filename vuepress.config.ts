import sidebar from './sidebar';
import path from 'path';

module.exports = {
  title: 'pinyin-pro',
  description:
    'js汉字转拼音库。获取中文拼音、韵母、声母、声调、首字母，支持拼音匹配',
  theme: 'vuepress-theme-write',
  themeConfig: {
    logo: 'https://i.ibb.co/yfpmW9d/pinyin-logo.png',
    type: 'docs',
    sidebar,
    alias: {
      NavbarExtra: path.resolve(__dirname, './components/navbar-extra.vue'),
    },
  },
  bundler: '@vuepress/bundler-webpack',
  markdown: {
    extractHeaders: {
      level: [2, 3, 4, 5, 6],
    },
  },
  define: {
    SITE_INFO: {
      title: 'pinyin-pro',
      description: '专业的 javascript 汉字转拼音库',
      start: '快速上手',
      startPath: '/guide/start.md',
      type: 'docs',
      hidePageMeta: true,
      homeImg: 'https://i.ibb.co/26fJ5vF/pinyin-logo.png',
    },
    HOME_ITEMS: [
      {
        title: '功能丰富',
        text: '支持获取拼音/声母/韵母/音调/首字母、多音字模式、人名姓氏模式、拼音匹配等多种功能',
      },
      {
        title: '性能优异',
        text: '底层优异的单字转换算法 + 经过热度排序的词语库，具备优异的拼音转换性能',
      },
      {
        title: '识别准确',
        text: '专业的贪心算法 + 经过完善处理的词语拼音库，拼音识别准确率远超市面竞品',
      },
    ],
  },
};
