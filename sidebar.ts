const sidebar = {
  '/': [
    {
      text: '指南',
      children: [
        { text: '介绍', link: '/guide/compare.md' },
        { text: '快速开始', link: '/guide/start.md' },
        { text: '更新日志', link: '/guide/changelog.md' },
      ],
    },
    {
      text: 'API及示例',
      children: [
        { text: 'pinyin: 拼音转换', link: '/use/pinyin.md' },
        { text: 'match: 拼音汉字匹配', link: '/use/match.md' },
        { text: 'customPinyin: 自定义拼音', link: '/use/customPinyin.md' },
        { text: 'html: HTML字符串', link: '/use/html.md' },
        { text: 'polyphonic: 全部读音', link: '/use/polyphonic.md' },
      ],
    },
    {
      text: '工具',
      children: [{ text: '在线运行', link: '/run/run.md' }],
    },
    {
      text: '更多',
      children: [{ text: '交流', link: '/more/contact.md' }],
    },
  ],
  '/en/': [
    {
      text: 'Guide',
      children: [
        { text: 'Introduction', link: '/en/guide/compare.md' },
        { text: 'Get Started', link: '/en/guide/start.md' },
        { text: 'ChangeLog', link: '/en/guide/changelog.md' },
      ],
    },
    {
      text: 'API and Example',
      children: [
        { text: 'pinyin', link: '/en/use/pinyin.md' },
        { text: 'match', link: '/en/use/match.md' },
        { text: 'customPinyin', link: '/en/use/customPinyin.md' },
        { text: 'html', link: '/en/use/html.md' },
      ],
    },
    {
      text: 'Tools',
      children: [{ text: 'Run Online', link: '/en/run/run.md' }],
    },
    {
      text: 'More',
      children: [{ text: 'Contact', link: '/en/more/contact.md' }],
    },
  ],
};

export default sidebar;
