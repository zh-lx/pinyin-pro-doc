# ChangeLog

## 3.15.0

- 【feat】 Add `html` API to get a HTML string of Chinese characters and Pinyin
- 【feat】 Add `polyphonic` API to get all Pinyins of Chinese characters
- 【feat】 Rewrite `match` API, add parameter to control matching rules
- 【patch】Correct the Pinyin of Some Chinese characters and words:
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
  - Remove the following Chinese characters:
    - 瓸: 'bǎiwǎ'
  - Add the following Chinese words:
    - 好好: `hǎo hǎo`

## 3.14.0

- 【refactor】Using [Aho–Corasick_algorithm](https://en.wikipedia.org/wiki/Aho–Corasick_algorithm) to optimize pinyin matching speed and improve performance by nearly 50 times!
- 【patch】Correct the Pinyin of Some Chinese characters and words:
  - 种: `zhòng zhǒng chóng` -> `zhǒng zhòng chóng`
  - Remove unnecessary Chinese words related to `种(zhǒng)`
  - Add the following Chinese words：
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

- 【patch】Correct the Pinyin of Some Chinese characters and words:
  - 皇甫: `huáng pǔ` -> `huáng fǔ`
  - 一丁点儿: `yī dīng diǎnr` -> `yī dīng diǎn er`

## 3.13.1

- 【fix】<b>pinyin</b>：Fix conflicts when using both `multiple` and `name` in the `options` parameter
- 【patch】Correct the Pinyin of Some Chinese characters and words

## 3.13.0

- 【fix】<b>pinyin</b>：Fix the issue of duplicate pinyin when using `multiple: true` and `toneType: none` simultaneously in the `options` parameter

## 3.12.0

- 【feat】<b>pinyin</b>：`options.pattern` parameter adds optional values `finalHead`、`finalBody` and `finalTail`.
- 【feat】<b>pinyin</b>：`options.type` parameter adds optional value `all` to get all the data of Pinyin
- 【fix】<b>pinyin</b>：Fix the issue of incorrect output results when the `text` parameter contains spaces and `options.type` is `array`

## 3.11.0

- 【perf】Optimize the Pinyin vocabulary to improve the accuracy
- 【perf】Reduce the size of package by approximately 10%
- 【feat】<b>match</b>：New support for Chinese matching and mixed Chinese and Pinyin matching

## 3.10.2

- 【patch】Correct the Pinyin of Some Chinese characters and words:
  - 责: `zhài` -> `zé zhài`
  - 朝阳: `zhāo cháo yáng` -> `cháo yáng`
  - 假发: `jiǎ fā` -> `jiǎ fà`
- 【perf】Optimize prompts of typescript

## 3.10.1

- 【patch】Correct the Pinyin of Some Chinese characters and words:
  - 哼: `hng` -> `hēng hng`

## 3.10.0

- 【perf】Reduce the size of package by approximately 30%

## 3.9.0

- 【feat】<b>pinyin</b>：The `options` parameter adds an optional attribute of `v`. When `options.v` is `true`, the `ü` in Pinyin will ebe replaced by `v`.

## 3.8.3

- 【patch】Correct the Pinyin of Some Chinese characters and words:
  - 查岗: `zhā gǎng` -> `chá gǎng`
  - 查核: `zhā hé` -> `chá hé`
  - 查缉: `zhā jī` -> `chá jī`
  - 查检: `zhā jiǎn` -> `chá jiǎn`
  - 查看: `zhā kàn` -> `chá kàn`
  - 查勤: `zhā qín` -> `chá qín`
  - 查帐: `zhā zhàng` -> `chá zhàng`
  - 查照: `zhā zhào` -> `chá zhào`

## 3.8.2

- 【fix】<b>pinyin</b>：Fix again the issue of incorrect default values returned by double byte unicode encoded text

## 3.8.1

- 【fix】<b>pinyin</b>：Fix the issue of incorrect default values returned by double byte unicode encoded text

## 3.8.0

- 【feat】<b>pinyin</b>：The `options` parameter adds an optional attribute `nonZh` to configure the output for non Chinese Characters.

## 3.7.2

- 【patch】Correct the Pinyin of Some Chinese characters and words:
  - 物美价廉: `jià lián wù měi` -> `wù měi jià lián`

## 3.7.1

- 【fix】<b>pinyin</b>：Fix the issue of pinyin conversion errors when `options.toneType` is `none` for `嗯`

## 3.7.0

- 【perf】Support for dynamic introduction of ESM

## 3.6.2

- 【fix】<b>pinyin</b>：Fix the issue of not prioritizing matching custom pinyin when using both the `customPinyin` API and `options.mode` is `surname` simultaneously.
- 【fix】<b>pinyin</b>：Fix the issue of incorrect pinyin for some surnames.

## 3.6.1

- 【fix】<b>pinyin</b>：Fix memory overflow when `options.removeNonZh` is `true` and all input strings are non Chinese Characters.

## 3.6.0

- 【feat】<b>pinyin</b>：The `options` parameter adds an optional attribute of `removeNonZh`, when `options.removeNonZh` is `true`， output of non Chinese characters will be removed.

## 3.5.0

- 【feat】Add the `match` API to support pinyin text matching.

## 3.4.1

- 【fix】<b>pinyin</b>：Fix the issue of invalid tone acquisition when `options.toneType` is `num` and `options.pattern` is `first` or `options.pattern` is `initial`.

## 3.4.0

- 【feat】<b>pinyin</b>：The `options` parameter adds an optional attribute `mode`. When `options.mode` is `surname`, support Pinyin recognition with surname pattern.
- 【feat】Add `customPinyin` api，Support user customize pinyin.
- 【fix】Fix memory overflow issue when text is too long.
- 【patch】Correct the Pinyin of Some Chinese characters and words:
  - 褚: `zhǔ` -> `chǔ zhǔ`
  - 俞: `yù` -> `yú yù`
  - 臧: `zàng` -> `zāng`
  - 贲: `bì` -> `bēn bì`
  - 莘: `xīn` -> `shēn xīn`
  - 郦: `zhí` -> `lì zhí`

## 3.3.1

- 【fix】Fix memory overflow issue when text is too long.

## 3.3.0

- 【perf】Optimize the pinyin conversion speed, it has increased by nearly 30 times!

## 3.2.3

- 【perf】Optimize prompts of typescript.
- 【perf】Optimize pinyin conversion algorithm to improve conversion speed.

## 3.2.2

- 【fix】<b>pinyin</b>：Fix the error issue of not finding polyphonic results when options is `{ multiple: true, type: 'array ' }`

## 3.2.1

- 【patch】Correct the Pinyin of Some Chinese characters and words:
  - 艾: `yì` -> `ài yì`
  - 吽: `ōu` -> `hōng hǒu ōu`

## 3.2.0

- 【perf】Adjust the dictionary order based on the frequency of single word usage to improve performance, and increase the conversion speed of long sentences by 100%.
- 【patch】Correct the Pinyin of Some Chinese characters and words:
  - 啊: `ā` -> `a`
  - 阿: `ē` -> `ā`
- 【perf】Support the use of `<script />`

## 3.1.0

- 【feat】<b>pinyin</b>：`options.pattern` adds an optional value `first` to get the first character of Pinyin.
- 【docs】Fix the typo in Readme.

## 3.0.7

- 【perf】Remove the readme option from `package.json`

## 3.0.6

- 【docs】Fix version update document link error in Readme

## 3.0.5

- 【docs】Optimize the QR code size of `README.md` documents

## 3.0.4

- 【docs】`README.md` add QR Code

## 3.0.3

- 【lint】Add `eslintrc` specification code quality.

## 3.0.2

- 【perf】Optimize npm package quality and `README.md`

## 3.0.1

- 【fix】Fix issue with no `index.d.ts`

## 3.0.0

- 【refactor】Refactored the project using typescript + rollup
