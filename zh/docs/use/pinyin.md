# pinyin

`pinyin-pro` 内部导出了 `pinyin` 函数，可以进行拼音转换，获取相关内容。

## 示例

### 拼音

通过 `options.type` 参数设置，可以获得数组和字符串不同的返回格式，也可以通过 `options.toneType` 参数控制音调在拼音中的显示格式

```js
import { pinyin } from 'pinyin-pro';

// 获取带音调拼音
pinyin('汉语拼音'); // 'hàn yǔ pīn yīn'
// 获取不带声调的拼音
pinyin('汉语拼音', { toneType: 'none' }); // 'han yu pin yin'
// 获取声调转换为数字后缀的拼音
pinyin('汉语拼音', { toneType: 'num' }); // 'han4 yu3 pin1 yin1'
// 获取数组形式带音调拼音
pinyin('汉语拼音', { type: 'array' }); // ["hàn", "yǔ", "pīn", "yīn"]
// 获取数组形式不带声调的拼音
pinyin('汉语拼音', { toneType: 'none', type: 'array' }); // ["han", "yu", "pin", "yin"]
// 获取数组形式声调转换为数字后缀的拼音
pinyin('汉语拼音', { toneType: 'num', type: 'array' }); // ["han4", "yu3", "pin1", "yin1"]
```

### 声母

设置 `options.pattern` 为 `initial` 时，返回的结果将为拼音的声母。

```js
import { pinyin } from 'pinyin-pro';

// 获取声母
pinyin('汉语拼音', { pattern: 'initial' }); // 'h y p y'
// 获取数组形式声母
pinyin('汉语拼音', { pattern: 'initial', type: 'array' }); // ["h", "y", "p", "y"]
```

### 韵母

设置 `options.pattern` 为 `final` 时，返回的结果将为拼音的声母。

```js
import { pinyin } from 'pinyin-pro';

// 获取带音调韵母
pinyin('汉语拼音', { pattern: 'final' }); // 'àn ǔ īn īn'
// 获取不带音调韵母
pinyin('汉语拼音', { pattern: 'final', toneType: 'none' }); // 'an u in in'
// 获取音调为数字的韵母
pinyin('汉语拼音', { pattern: 'final', toneType: 'num' }); // 'an4 u3 in1 in1'
// 获取数组形式带音调韵母
pinyin('汉语拼音', { pattern: 'final', type: 'array' }); // ["àn", "ǔ", "īn", "īn"]
// 获取数组形式不带音调韵母
pinyin('汉语拼音', { pattern: 'final', toneType: 'none', type: 'array' }); // ["an", "u", "in", "in"]
// 获取数组形式音调为数字的韵母
pinyin('汉语拼音', { pattern: 'final', toneType: 'num', type: 'array' }); // ['an4', 'u3', 'in1', 'in1']
```

### 韵头(介音)/韵腹/韵尾 <Badge type="tip" text="v3.12.0+" vertical="middle" />

设置 `options.pattern` 为 `finalHead/finalBody/finalTail` 时，返回的结果将为拼音的韵头/韵腹/韵尾。

```js
import { pinyin } from 'pinyin-pro';

// 返回韵头
pinyin('村庄', { pattern: 'finalHead', type: 'array' }); // [ '', 'u' ]

// 返回韵腹
pinyin('村庄', { pattern: 'finalBody', type: 'array' }); // [ 'ū', 'ā' ]

// 返回韵尾
pinyin('村庄', { pattern: 'finalTail', type: 'array' }); // [ 'n', 'ng' ]
```

### 音调

设置 `options.pattern` 为 `num` 时，返回的结果将为拼音的音调对应的数字。

```js
import { pinyin } from 'pinyin-pro';

// 获取音调
pinyin('汉语拼音', { pattern: 'num' }); // '4 3 1 1'
// 获取数组形式音调
pinyin('汉语拼音', { pattern: 'num', type: 'array' }); // ["4", "3", "1", "1"]
```

### 首字母 <Badge type="tip" text="v3.1.0+" vertical="middle" />

设置 `options.pattern` 为 `first` 时，返回的结果将为拼音的首字母。

```js
import { pinyin } from 'pinyin-pro';

// 获取拼音首字母
pinyin('赵钱孙李额', { pattern: 'first' }); // 'z q s l é'
// 获取不带音调拼音首字母
pinyin('赵钱孙李额', { pattern: 'first', toneType: 'none' }); // 'z q s l e'
// 获取数组形式拼音首字母
pinyin('赵钱孙李额', { pattern: 'first', type: 'array' }); // ['z', 'q', 's', 'l', 'é']
// 获取数组形式不带音调拼音首字母
pinyin('赵钱孙李额', { pattern: 'first', toneType: 'none', type: 'array' }); // ['z', 'q', 's', 'l', 'e']
```

### 完整内容 <Badge type="tip" text="v3.12.0+" vertical="middle" />

设置 `options.type` 为 `all` 时，返回的结果将为拼音的全部内容的数组。

```js
const result = pinyin('汉语拼音', { type: 'all' });

/**
[
  {
    origin: '汉',
    pinyin: 'hàn',
    initial: 'h',
    final: 'àn',
    first: 'h',
    finalHead: '',
    finalBody: 'à',
    finalTail: 'n',
    num: 4,
    isZh: true,
  },
  {
    origin: '语',
    pinyin: 'yǔ',
    initial: 'y',
    final: 'ǔ',
    first: 'y',
    finalHead: '',
    finalBody: 'ǔ',
    finalTail: '',
    num: 3,
    isZh: true,
  },
  {
    origin: '拼',
    pinyin: 'pīn',
    initial: 'p',
    final: 'īn',
    first: 'p',
    finalHead: '',
    finalBody: 'ī',
    finalTail: 'n',
    num: 1,
    isZh: true,
  },
  {
    origin: '音',
    pinyin: 'yīn',
    initial: 'y',
    final: 'īn',
    first: 'y',
    finalHead: '',
    finalBody: 'ī',
    finalTail: 'n',
    num: 1,
    isZh: true,
  },
];
 */
```

### 多音字

设置 `options.multiple` 为 `true` 时，可以获取多音字的所有拼音。

只有 `text` 字段长度为 1（单个字符）时 `options.multiple` 才生效，否则不生效。

```javascript
import { pinyin } from 'pinyin-pro';

// 获取多音
pinyin('好', { multiple: true }); // 'hǎo hào'
// 获取数组形式多音
pinyin('好', { multiple: true, type: 'array' }); // ["hǎo", "hào"]
// text 不为单个字符时 multiple 不生效
pinyin('好学', { multiple: true }); // hào xué
```

### 姓氏模式 <Badge type="tip" text="v3.4.0+" vertical="middle" />

设置 `options.mode` 为 `surname` 可以开启姓氏模式，匹配到百家姓中的姓氏相关的字符将优先输出姓氏拼音。

```javascript
import { pinyin } from 'pinyin-pro';

// 不开启姓氏模式
pinyin('我叫曾小贤'); // 'wǒ jiào céng xiǎo xián'

// 开启姓氏模式
pinyin('我叫曾小贤', { mode: 'surname' }); // 'wǒ jiào zēng xiǎo xián'
```

### 自定义分隔符 <Badge type="tip" text="v3.16.0+" vertical="middle" />

使用 `options.separator` 自定义拼音之间的分隔符，仅在 `type: 'string'` 时生效：

```javascript
import { pinyin } from 'pinyin-pro';

pinyin('汉语拼音', { separator: '-' }); // 'hàn-yǔ-pīn-yīn'
```

### 非汉字字符处理 <Badge type="tip" text="v3.8.0+" vertical="middle" />

设置 `options.nonZh` ，可以处理非汉字字符的不同输出形式

```javascript
import { pinyin } from 'pinyin-pro';

// 默认非汉字字符以空格间隔输出
pinyin('我very喜欢你'); // 'wǒ v e r y xǐ huān nǐ'

// 移除非汉字字符串，options.nonZh 设置为 removed
pinyin('我very喜欢你', { nonZh: 'removed' }); // 'wǒ xǐ huān nǐ'

// 非汉字字符串之间紧凑输出，options.nonZh 设置为 consecutive
pinyin('我very喜欢你', { nonZh: 'consecutive' }); // 'wǒ very xǐ huān nǐ'
```

### 拼音 ü 替换为 v <Badge type="tip" text="v3.9.0+" vertical="middle" />

设置 `options.v` 为 `true` 之后，转换结果中的 `ü` 将会被替换为 `v` (带音调的 `ǖ,ǘ,ǚ,ǜ` 不会被转换)：

```javascript
import { pinyin } from 'pinyin-pro';

// 输出 ü
pinyin('吕布', { toneType: 'none' }); // lü bu
// 输出 v
pinyin('吕布', { toneType: 'none', v: true }); // lv bu
// 带音调的 ǖ,ǘ,ǚ,ǜ 不转换
pinyin('吕布', { v: true }); // lǚ bù
// 输出 v
pinyin('吕布', { type: 'num', v: true }); // lv3 bu4
```

## 语法及参数

### 语法

```js
import { pinyin } from 'pinyin-pro';

interface BasicOptions {
    type: 'string' | 'array' | 'all';
    toneType?: 'symbol' | 'num' | 'none';
    pattern?: 'pinyin' | 'initial' | 'final' | 'num' | 'first' | 'finalHead' | 'finalBody' | 'finalTail';
    multiple?: boolean;
    mode?: 'normal' | 'surname';
    removeNonZh?: boolean;
    nonZh?: 'spaced' | 'consecutive' | 'removed';
    v?: boolean;
}

interface AllData {
    origin: string;
    pinyin: string;
    initial: string;
    final: string;
    num: number;
    first: string;
    finalHead: string;
    finalBody: string;
    finalTail: string;
    isZh: boolean;
}

 // 返回转换后的信息
function pinyin(text: string, options?: BasicOptions): string | string[] | AllData[]
```

### 参数

- `text` (必传)：string 类型，需要进行拼音转换的字符串
- `options` (可选)：object 类型，转换输出的内容及格式，详细见下表

<basic-params-table></basic-params-table>
