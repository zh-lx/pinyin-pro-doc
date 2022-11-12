const sidebar = {
  '/': [
    {
      text: '指南',
      children: [
        { text: '介绍', link: '/guide/introduction.md' },
        { text: '快速开始', link: '/guide/start.md' },
      ],
    },
    {
      text: '使用',
      children: [
        { text: 'pinyin: 拼音转换', link: '/use/pinyin.md' },
        { text: 'match: 拼音汉字匹配', link: '/use/match.md' },
        { text: 'customPinyin: 自定义拼音', link: '/use/customPinyin.md' },
      ],
    },
    {
      text: '工具',
      children: [{ text: '在线运行', link: '/run/run.md' }],
    },
  ],
  // '/feature': [
  //   {
  //     text: 'React18 新特性',
  //     children: [
  //       {
  //         text: '并发渲染 —— concurrent',
  //         link: '/feature/concurrent.md',
  //       },
  //       {
  //         text: '新的 render api',
  //         link: '/feature/render-api.md',
  //       },
  //       {
  //         text: 'Suspense',
  //         link: '/feature/suspense.md',
  //       },
  //     ],
  //   },
  // ],
};

export default sidebar;
