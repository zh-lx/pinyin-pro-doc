import sidebar from './sidebar';

module.exports = {
  title: 'pinyin-pro',
  description:
    'js汉字转拼音库。获取中文拼音、韵母、声母、声调、首字母，支持拼音匹配',
  theme: 'vuepress-theme-write',
  themeConfig: {
    logo: 'https://i.ibb.co/yfpmW9d/pinyin-logo.png',
    type: 'docs',
    sidebar,
    navbar: [
      {
        text: '原理揭秘',
        link: '/start/introduction.md',
      },
    ],
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
      description: '最优秀的 javascript 拼音转汉字库',
      start: 'Get Start',
      startPath: '/start/introduction.md',
      type: 'docs',
    },
    HOME_ITEMS: [
      {
        title: 'Out of the box',
        text: 'Elegant default configrations and convention routing assist developers to get started as simple as possible, that focus all attentions on developing libraries & writting docs',
      },
      {
        title: 'For developing libraries',
        text: 'Rich Markdown extensions are not limited to rendering component demos, making component documents not only easy to write and manage, but also beautiful and easy to use',
      },
      {
        title: 'Theme system',
        text: 'Progressive custom theme capabilities, ranging from expanding your own Markdown tags to customizing complete theme packages, are up to you',
      },
    ],
    PageControl: {
      hidePageMeta: true,
    },
  },
};
