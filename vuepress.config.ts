import { webpackBundler } from '@vuepress/bundler-webpack';
import { defineUserConfig } from '@vuepress/cli';
// import WriteTheme from './node_modules/vuepress-theme-write';
import WriteTheme from './vuepress-theme-write/lib/node/index';
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
    langs: [
      { path: '/', title: '首页' },
      { path: '/en', title: 'Home' },
    ],
  }),
  bundler: webpackBundler({}),
  alias: {
    NavbarExtra: path.resolve(__dirname, './components/navbar-extra.vue'),
  },
  clientConfigFile: path.resolve(__dirname, './components/app.ts'),
  define: {
    $Site: {
      title: 'pinyin-pro',
      description: '一个识别准确、性能优异的专业的汉字拼音转换库',
      start: '快速上手',
      startPath: '/guide/start.md',
      type: 'docs',
      hidePageMeta: true,
      // homeImg: '/images/pinyin.png',
    },
    $Langs: [
      {
        label: '简体中文',
        prefix: '/',
        description: '一个识别准确、性能优异的专业的汉字拼音转换库',
        start: '快速上手',
        items: [
          {
            title: '功能丰富',
            text: '具备中文拼音转换、中文拼音匹配、带拼音中文格式 HTML 字符串转换等丰富的功能',
            img: '/images/function.png',
          },
          {
            title: '性能优异',
            text: '应用 AC 自动机 + 贪心算法 + 散列函数等多种算法，具备每秒数百万字的优异的拼音转换性能',
            img: '/images/rocket.png',
          },
          {
            title: '识别准确',
            text: '通过海量数据处理后的中文拼音词库，拥有极高的、远超同类产品的拼音转换准确率',
            img: '/images/arrow.png',
          },
        ],
      },
      {
        label: 'English',
        prefix: '/en',
        description:
          'A professional Chinese Pinyin conversion library with high accuracy and excellent performance',
        start: 'Get Started',
        items: [
          {
            title: 'Rich Functionality',
            text: 'Rich and diverse functions, including but not limited to Chinese Pinyin conversion, Chinese Pinyin matching, and Chinese Pinyin HTML strings.',
            img: '/images/function.png',
          },
          {
            title: 'Excellent Performance',
            text: 'By applying algorithms such as AC automata, greedy algorithm, and hash function optimization, the performance is greatly excellent.',
            img: '/images/rocket.png',
          },
          {
            title: 'High Accuracy',
            text: 'Having a massive data processed Chinese Pinyin database, the accuracy of pinyin conversion is extremely high.',
            img: '/images/arrow.png',
          },
        ],
      },
    ],
  },
});
