# 更新日志

## 3.12.0

- 【feat】<b>pinyin</b>：`options.pattern` 参数新增可选值获取韵头(`finalHead`)、韵腹(`finalBody`)、韵尾(`finalTail`)的功能。 [去看看](/use/pinyin.html#韵头-介音-韵腹-韵尾)
- 【feat】<b>pinyin</b>：`options.type` 参数新增可选值 `all` 获取拼音相关完整的信息。 [去看看](/use/pinyin.html#完整内容)
- 【fix】<b>pinyin</b>：修复 word 参数中包含空格且 `options.type` 参数为 `array` 时输出结果错误的问题

## 3.11.0

- 【perf】优化拼音词库，提升拼音识别准确率
- 【perf】包体积优化约 10%
- 【feat】<b>match</b>：新增支持中文匹配、中文及拼音混合匹配

## 3.10.2

- 【patch】修正部分读音:
  - 责: 'zhài' -> 'zé zhài'
  - 朝阳: 'zhāo cháo yáng' -> 'cháo yáng'
  - 假发: 'jiǎ fā' -> 'jiǎ fà'
- 【perf】优化 typescript 环境下参数提示

## 3.10.1

- 【patch】修正部分读音:
  - 哼: 'hng' -> 'hēng hng'

## 3.10.0

- 【perf】包体积优化约 30%

## 3.9.0

- 【feat】<b>pinyin</b>：`options` 参数增加 `v` 可选属性，`options.v = true` 可将拼音中的 `ü` 替换为 `v`。[去看看](/use/pinyin.html#拼音-u-替换为-v)

## 3.8.3

- 【patch】修正部分读音:
  - 查岗: 'zhā gǎng' -> 'chá gǎng'
  - 查核: 'zhā hé' -> 'chá hé'
  - 查缉: 'zhā jī' -> 'chá jī'
  - 查检: 'zhā jiǎn' -> 'chá jiǎn'
  - 查看: 'zhā kàn' -> 'chá kàn'
  - 查勤: 'zhā qín' -> 'chá qín'
  - 查帐: 'zhā zhàng' -> 'chá zhàng'
  - 查照: 'zhā zhào' -> 'chá zhào'

## 3.8.2

- 【fix】<b>pinyin</b>：再次修复双字节 unicode 编码的文字返回默认值不正确的问题

## 3.8.1

- 【fix】<b>pinyin</b>：修复双字节 unicode 编码的文字返回默认值不正确的问题

## 3.8.0

- 【feat】<b>pinyin</b>：`options` 参数新增 `nonZh` 可选属性，用于配置非中文字符串的输出规则。[去看看](/use/pinyin.html#非汉字字符处理)

## 3.7.2

- 【patch】修正部分读音:
  - 物美价廉: 'jià lián wù měi' -> wù měi jià lián

## 3.7.1

- 【fix】<b>pinyin</b>：修复 “嗯” 在 `options.toneType = none` 时拼音转换错误的问题

## 3.7.0

- 【perf】新增支持 esm 引入方式
- 【test】完善测试用例，测试覆盖率达 100%

## 3.6.2

- 【fix】<b>pinyin</b>：修复 `customPinyin` API 和 `options.mode = surname` 同时使用时没有优先匹配自定义拼音的问题
- 【fix】<b>pinyin</b>：修复 `options.mode = surname` 模式下部分情况姓氏拼音匹配不正确的问题

## 3.6.1

- 【fix】<b>pinyin</b>：修复 `options.removeNonZh = true` 且输入字符串全部为非汉字时的堆栈溢出问题

## 3.6.0

- 【feat】<b>pinyin</b>：`options` 参数新增 `removeNonZh` 可选属性，为 `options.removeNonZh = true` 时移除非汉字的字符

## 3.5.0

- 【feat】新增 `match` api 以支持拼音文本匹配功能。[去看看](/user/match)

## 3.4.1

- 【fix】<b>pinyin</b>：修复 `options.pattern = 'first'` 或者 `options.pattern = 'initial'` 时，指定 `options.toneType = 'num'` 获取音调失效的问题

## 3.4.0

- 【feat】<b>pinyin</b>：`options` 参数新增 `mode` 可选属性，`options.mode = 'surname'` 模式支持姓氏模式拼音识别。[去看看](/use/pinyin.html#姓氏模式)
- 【feat】新增 `customPinyin` api，支持用户自定义拼音功能。[去看看](/use/customPinyin)
- 【fix】修复文本过长时堆栈溢出问题
- 【patch】修正部分读音：
  - 褚: 'zhǔ' -> 'chǔ zhǔ'
  - 俞: 'yù' -> 'yú yù'
  - 臧: 'zàng' -> 'zāng'
  - 贲: 'bì' -> 'bēn bì'
  - 莘: 'xīn' -> 'shēn xīn'
  - 郦: 'zhí' -> 'lì zhí'

## 3.3.1

- 【fix】修复文本过长时堆栈溢出问题

## 3.3.0

- 【perf】优化拼音转换速度，经测试拼音转换速度提升近 30 倍！

## 3.2.3

- 【perf】typescript 环境下根据 `options.type` 值为 `'string'` 或者 `'array'`，自动提示结果为 `'string'` 还是 `'string[]'`
- 【perf】优化拼音转换算法，提高转换速度

## 3.2.2

- 【fix】<b>pinyin</b>：修复 options 为 `{ multiple: true, type: 'array' }` 时若未找到多音字结果的报错问题

## 3.2.1

- 【patch】修复部分读音
  - 艾: 'yì' -> 'ài yì'
  - 吽: 'ōu' -> 'hōng hǒu ōu'

## 3.2.0

- 【perf】根据单字的使用频率调整字典顺序，性能大幅提升，长句的转换时间只需之前版本 50% 左右的时间
- 【patch】修复部分读音：
  啊: ā -> a
  阿: ē -> ā
- 【perf】增加浏览器中 script 的引入方式

## 3.1.0

- 【feat】<b>pinyin</b>：`options.pattern` 新增 `first` 可选值[获取拼音首字母](/use/pinyin.html#首字母)
- 【docs】修复 readme 中音调形式参数 toneType 错写成了 tone 的错误

## 3.0.7

- 【perf】package.json 中去掉 readme 选项

## 3.0.6

- 【docs】修复 readme 中版本更新文档链接错误问题

## 3.0.5

- 【docs】优化 README.md 文档二维码大小

## 3.0.4

- 【docs】README.md 增加二维码

## 3.0.3

- 【lint】增加 eslintrc 规范代码质量

## 3.0.2

- 【perf】优化 npm 包质量和 README.md

## 3.0.1

- 【fix】修复没有 index.d.ts 类型指向的问题

## 3.0.0

- 【refactor】使用 typescript + rollup 打包重构了项目，api 使用上没有发生变化
