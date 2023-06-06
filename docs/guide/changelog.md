# 更新日志

## 3.15.0

- 【feat】 新增 `html` API，用于获取带拼音汉字的 HTML 字符串
- 【feat】 新增 `polyphonic` API，用于汉字的全部读音
- 【feat】 重写 `match` API，增加参数控制匹配规则
- 【patch】校正部分汉字及词汇的拼音：
  - 屏: `bīng píng bǐng` -> `píng bǐng bīng`
  - 呒: `ḿ` -> `fǔ ḿ`
  - 吋: `cùn yīngcùn` -> `cùn dòu`
  - 呎: `chǐ yīngchǐ` -> `chǐ`
  - 蝊: `uu` -> `dìng`
  - 噷: `hm hěn xīn hèn` -> `xīn hěn hèn`
  - 唡: `liǎng yīngliǎng` -> `liǎng`
  - 曢: `uu` -> `liǎo`
  - 呣: `ḿ m̀` -> `ḿ m̀ móu`
  - 聁: `uu` -> `pàn`
  - 闧: `uu` -> `tā`
  - 屗: `uu` -> `wěi`
  - 虲: `uu` -> `xiā`
  - 屏气吞声: `píng qì tūn shēng` -> `bǐng qì tūn shēng`
  - 敛声屏息: `liǎn shēng píng xī` -> `liǎn shēng bǐng xī`
  - 删除以下字词：
    - 瓸: 'bǎiwǎ'
  - 增加以下词语：
    - 好好: `hǎo hǎo`

## 3.14.0

- 【refactor】使用 [AC 自动机算法](https://en.wikipedia.org/wiki/Aho–Corasick_algorithm)优化拼音匹配速度，性能提升近 50 倍！
- 【patch】校正部分汉字及词汇的拼音：
  - 种: `zhòng zhǒng chóng` -> `zhǒng zhòng chóng`
  - 去掉 `种(zhǒng)` 相关的多余词语
  - 增加以下词语：
    - 耕种: `gēng zhòng`
    - 种地: `zhòng dì`
    - 种菜: `zhòng cài`
    - 栽种: `zāi zhòng`
    - 接种: `jiē zhòng`
    - 垦种: `kěn zhòng`
    - 种殖: `zhòng zhí`
    - 种瓜: `zhòng guā`
    - 种豆: `zhòng dòu`
    - 种树: `zhòng shù`
    - 睡着: `shuì zháo`
    - 笼子: `lóng zi`
    - 厦门: `xià mén`
    - 东莞: `dōng guǎn`

## 3.13.2

- 【patch】修正部分读音
  - 皇甫: `huáng pǔ` -> `huáng fǔ`
  - 一丁点儿: `yī dīng diǎnr` -> `yī dīng diǎn er`

## 3.13.1

- 【fix】<b>pinyin</b>：修复 options 参数 `multiple` 与 `surname` 同时使用时冲突问题
- 【patch】修正部分儿化字读音

## 3.13.0

- 【fix】<b>pinyin</b>：修复 options 参数 `multiple: true` 和 `toneType: 'none'` 同时使用时，可能存在重复拼音的问题

## 3.12.0

- 【feat】<b>pinyin</b>：`options.pattern` 参数新增可选值获取韵头(`finalHead`)、韵腹(`finalBody`)、韵尾(`finalTail`)的功能。 [去看看](/use/pinyin.html#韵头-介音-韵腹-韵尾)
- 【feat】<b>pinyin</b>：`options.type` 参数新增可选值 `all` 获取拼音相关完整的信息。 [去看看](/use/pinyin.html#完整内容)
- 【fix】<b>pinyin</b>：修复 `text` 参数中包含空格且 `options.type` 参数为 `array` 时输出结果错误的问题

## 3.11.0

- 【perf】优化拼音词库，提升拼音识别准确率
- 【perf】包体积优化约 10%
- 【feat】<b>match</b>：新增支持中文匹配、中文及拼音混合匹配

## 3.10.2

- 【patch】修正部分读音:
  - 责: `zhài` -> `zé zhài`
  - 朝阳: `zhāo cháo yáng` -> `cháo yáng`
  - 假发: `jiǎ fā` -> `jiǎ fà`
- 【perf】优化 typescript 提示

## 3.10.1

- 【patch】修正部分读音:
  - 哼: `hng` -> `hēng hng`

## 3.10.0

- 【perf】包体积优化约 30%

## 3.9.0

- 【feat】<b>pinyin</b>：`options` 参数增加 `v` 可选属性，`options.v = true` 可将拼音中的 `ü` 替换为 `v`。[去看看](/use/pinyin.html#拼音-u-替换为-v)

## 3.8.3

- 【patch】修正部分读音:
  - 查岗: `zhā gǎng` -> `chá gǎng`
  - 查核: `zhā hé` -> `chá hé`
  - 查缉: `zhā jī` -> `chá jī`
  - 查检: `zhā jiǎn` -> `chá jiǎn`
  - 查看: `zhā kàn` -> `chá kàn`
  - 查勤: `zhā qín` -> `chá qín`
  - 查帐: `zhā zhàng` -> `chá zhàng`
  - 查照: `zhā zhào` -> `chá zhào`

## 3.8.2

- 【fix】<b>pinyin</b>：再次修复双字节 unicode 编码的文字返回默认值不正确的问题

## 3.8.1

- 【fix】<b>pinyin</b>：修复双字节 unicode 编码的文字返回默认值不正确的问题

## 3.8.0

- 【feat】<b>pinyin</b>：`options` 参数新增 `nonZh` 可选属性，用于配置非中文字符串的输出规则。[去看看](/use/pinyin.html#非汉字字符处理)

## 3.7.2

- 【patch】修正部分读音:
  - 物美价廉: `jià lián wù měi` -> `wù měi jià lián`

## 3.7.1

- 【fix】<b>pinyin</b>：修复 “嗯” 在 `options.toneType = none` 时拼音转换错误的问题

## 3.7.0

- 【perf】支持 esm 动态引入

## 3.6.2

- 【fix】<b>pinyin</b>：修复 `customPinyin` API 和 `options.mode = surname` 同时使用时没有优先匹配自定义拼音的问题
- 【fix】<b>pinyin</b>：修复部分姓氏拼音不正确的问题

## 3.6.1

- 【fix】<b>pinyin</b>：修复 `options.removeNonZh = true` 且输入字符串全部为非汉字时的内存溢出问题

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
  - 褚: `zhǔ` -> `chǔ zhǔ`
  - 俞: `yù` -> `yú yù`
  - 臧: `zàng` -> `zāng`
  - 贲: `bì` -> `bēn bì`
  - 莘: `xīn` -> `shēn xīn`
  - 郦: `zhí` -> `lì zhí`

## 3.3.1

- 【fix】修复文本过长时堆栈溢出问题

## 3.3.0

- 【perf】优化拼音转换速度，提升近 30 倍！

## 3.2.3

- 【perf】优化 typescript 提示
- 【perf】优化拼音转换算法，提高转换速度

## 3.2.2

- 【fix】<b>pinyin</b>：修复 options 为 `{ multiple: true, type: 'array' }` 时若未找到多音字结果的报错问题

## 3.2.1

- 【patch】修复部分读音
  - 艾: `yì` -> `ài yì`
  - 吽: `ōu` -> `hōng hǒu ōu`

## 3.2.0

- 【perf】根据单字的使用频率调整字典顺序以提升性能，长句的转换时间只需之前版本 50% 左右的时间
- 【patch】修复部分读音：
  - 啊: `ā` -> `a`
  - 阿: `ē` -> `ā`
- 【perf】支持 `<script />` 链接使用

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

- 【refactor】使用 typescript + rollup 重构了项目
