# match

`pinyin-pro` 内部导出了 `match` 函数，可以进行文字和拼音匹配，并返回匹配的文字在字符串中的下标。

## 示例

### 常规匹配

若拼音和文本匹配，返回匹配的文本下标

```js
import { match } from 'pinyin-pro';

match('汉语拼音', 'hanyupinyin'); // [0, 1, 2, 3]
```

### 不连续匹配

支持不连续的汉字匹配，返回匹配的文本下标

```js
import { match } from 'pinyin-pro';

match('汉语拼音', 'hanpin'); // [0, 2]
```

### 缩写匹配

支持各种格式的拼音的不全拼缩写匹配汉字

```js
import { match } from 'pinyin-pro';

match('汉语拼音', 'hyupy'); // [0, 1, 2, 3]
```

### 汉字拼音混合匹配

支持汉字拼音混合匹配

```js
import { match } from 'pinyin-pro';

match('汉语拼音', 'hyu音'); // [0, 1, 3]
```

### 匹配不成功

未匹配时成功返回 null

```js
import { match } from 'pinyin-pro';

// 完全不匹配，返回 null:
match('汉语拼音', 'lsaf'); // null

// 最后的 le 和音不匹配，匹配不成功，返回 null:
match('汉语拼音', 'hanyupinle'); // null
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

- `text` (必传)：string 类型，要匹配的字符串
- `pinyin` (必传)：string 类型，要匹配的拼音
