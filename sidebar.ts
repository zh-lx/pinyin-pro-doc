const sidebar = {
  '/': [
    {
      text: '起步',
      children: [
        { text: '介绍', link: '/start/introduction.md' },
        // { text: '搭建调试环境', link: '/prepare/搭建调试环境.md' },
        // {
        //   text: 'React架构',
        //   link: '/prepare/React架构.md',
        // },
        // {
        //   text: 'React内部运行过程',
        //   link: '/prepare/React内部运行过程.md',
        // },
      ],
    },
    {
      text: '使用',
      children: [
        { text: 'pinyin: 拼音转换', link: '/use/basic.md' },
        // { text: '搭建调试环境', link: '/prepare/搭建调试环境.md' },
        // {
        //   text: 'React架构',
        //   link: '/prepare/React架构.md',
        // },
        // {
        //   text: 'React内部运行过程',
        //   link: '/prepare/React内部运行过程.md',
        // },
      ],
    },
    // {
    //   text: '基础理念',
    //   children: ['/basic/jsx语法.md', '/basic/类组件.md', '/basic/ReactDOM.md'],
    // },
    {
      // text: '核心原理',
      // children: [
      //   { text: 'createRoot', link: '/core/createRoot.md' },
      //   {
      //     text: 'fiber',
      //     link: '/core/fiber/main.md',
      //     collapsible: true,
      //     children: [
      //       {
      //         text: 'fiber 的概念与结构',
      //         link: '/core/fiber/深入理解fiber.md',
      //       },
      //       {
      //         text: 'fiberRoot 与 rootFiber',
      //         link: '/core/fiber/fiberRoot与rootFiber.md',
      //       },
      //       '/core/fiber/fiber树创建与更新.md',
      //     ],
      //   },
      //   { text: 'jsx 的转换', link: '/core/jsx转换.md' },
      //   { text: '触发及创建更新', link: '/core/update/main.md' },
      //   {
      //     text: 'scheduler',
      //     link: '/core/scheduler/main.md',
      //     collapsible: true,
      //     children: [
      //       {
      //         text: '选择不同调度规则',
      //         link: '/core/scheduler/执行不同调度.md',
      //       },
      //       {
      //         text: '多任务的管理',
      //         link: '/core/scheduler/多任务的管理.md',
      //       },
      //       {
      //         text: '选择调度类型',
      //         link: '/core/scheduler/选择调度类型.md',
      //       },
      //     ],
      //   },
      //   {
      //     text: 'render',
      //     collapsible: true,
      //     children: [
      //       '/core/render/创建更新.md',
      //       {
      //         text: 'reconciler',
      //         children: ['/core/render/reconciler/创建更新.md'],
      //       },
      //     ],
      //   },
      // ],
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
