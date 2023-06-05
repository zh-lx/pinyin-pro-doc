# match

`pinyin-pro` 内部导出了 `match` 函数，可以进行文字和拼音匹配，并返回匹配的文字在字符串中的下标。

## 示例

### 常规匹配

若拼音和文本匹配，返回匹配的文本下标

```js
import { match } from 'pinyin-pro';

match('汉语拼音', 'hanyupinyin'); // [0, 1, 2, 3]
```

### 是否连续

使用 `continuous` 属性

```js
import { match } from 'pinyin-pro';

match('汉语拼音', 'hanyu'); // [0, 1]
```

### 精度

使用 `precision` 属性可以控制汉字和拼音匹配的精度

```js
import { match } from 'pinyin-pro';

// 默认首字母匹配算匹配成功
match('中文拼音', 'zwpy'); // [0, 1, 2, 3]

// every 需要每一个字符都匹配成功
match('中文拼音', 'zwpy', { precision: every }); // null
match('中文拼音', 'zhongwenpinyin', { precision: every }); // [0, 1, 2, 3]

// start 只要开头任意个字母匹配就算匹配成功
match('中文拼音', 'zhwpy', { precision: start }); // [0, 1, 2, 3]
match('中文拼音', 'zhwpy'); // null

// any 任意有一个字母匹配就算匹配成功
match('中文拼音', 'ongwpy', { precision: any }); // [0, 1, 2, 3]
match('中文拼音', 'ongwpy'); // null
```

### 空格处理

使用 `space` 属性控制是否匹配时空格是否不参与匹配

```js
import { match } from 'pinyin-pro';

// 默认不参与匹配
match('汉语拼音', 'han yupinyin'); // [0, 1, 2, 3]

match('汉语拼音', 'han yupinyin', { space: 'preserve' }); // null
```

### 最后一个字符精度

使用 `lastPrecision` 属性可以控制最后一个汉字和拼音匹配的精度。默认情况下，precision 为 `any` 时，lastPrecision 为 `any`; 否则 `lastPrecision` 为 `start`。

```js
import { match } from 'pinyin-pro';

// 默认情况下
match('汉语拼音', 'hanyuyinp'); // [`, 2, 3, 4]

// 显式控制 lastPrecision
match('汉语拼音', 'hanyuyinp', { lastPrecision: 'every' }); // null
```

### 多音字匹配

对于多音字，只要其中一个读音匹配上即算匹配成功

```js
import { match } from 'pinyin-pro';

match('会计', 'kuaiji'); // [0, 1]
match('会计', 'huiji'); // [0, 1]
```

## 语法及参数

### 语法

```js
import { match } from 'pinyin-pro';

match(text, pinyin); // 匹配成功返回匹配汉字对应下标数组; 不成功返回 null
```

### 参数

- `text` (必传)：string 类型，要匹配的文本
- `pinyin` (必传)：string 类型，要匹配的拼音
