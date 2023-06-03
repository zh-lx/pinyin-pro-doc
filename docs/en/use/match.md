# match

Using `match` api to match Chinese text string with pinyin string.

## Example

### Normal Match

If Pinyin matches text, return the indexes of the matching text.

```js
import { match } from 'pinyin-pro';

match('汉语拼音', 'hanyupinyin'); // [0, 1, 2, 3]
```

### Discontinuous matching

Support discontinuous Chinese character matching and return the indexes of the matching text

```js
import { match } from 'pinyin-pro';

match('汉语拼音', 'hanpin'); // [0, 2]
```

### Abbreviation matching

Support incomplete pinyin abbreviation matching of Chinese characters in various formats

```js
import { match } from 'pinyin-pro';

match('汉语拼音', 'hyupy'); // [0, 1, 2, 3]
```

### Chinese Pinyin Hybrid Matching

Support Chinese Pinyin hybrid matching

```js
import { match } from 'pinyin-pro';

match('汉语拼音', 'hyu音'); // [0, 1, 3]
```

### Matching unsuccessful

Return `null` on unsuccessful matching.

```js
import { match } from 'pinyin-pro';

// 完全不匹配，返回 null:
match('汉语拼音', 'lsaf'); // null

// 最后的 le 和音不匹配，匹配不成功，返回 null:
match('汉语拼音', 'hanyupinle'); // null
```

### Polyphonic matching

For polyphonic characters, as long as one of the pronunciations matches, the matching is considered successful.

```js
import { match } from 'pinyin-pro';

match('会计', 'kuaiji'); // [0, 1]
match('会计', 'huiji'); // [0, 1]
```

## API

### Function

```js
import { match } from 'pinyin-pro';

match(text, pinyin); // 匹配成功返回匹配汉字对应下标数组; 不成功返回 null
```

### Parameters

- `text` (required)：<b>string</b> string to match
- `pinyin` (required)：<b>string</b> pinyin to match
