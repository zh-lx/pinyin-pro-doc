# customPinyin <Badge type="tip" text="v3.4.0+" vertical="middle" />

`customPinyin` api allows users to customize the pinyin of words and sentences. When Chinese matches the user defined pinyin of words and sentences, the user defined pinyin is preferred.

## Example

### Without customPinyin

When it comes to polyphonic characters, some complex pinyin or person names may not be accurately recognized, for example, if you have a person named `张会(zhāng kuài)`

```js
import { pinyin } from 'pinyin-pro';

pinyin('他叫张会'); // 'tā jiào zhāng huì'
```

### With customPinyin

Using the `customPinyin` api, you can supplement this section with inaccurate pinyin recognition yourself.

```js
import { pinyin, customPinyin } from 'pinyin-pro';

customPinyin({
  张会: 'zhāng kuài',
});

pinyin('他叫张会'); // 'tā jiào zhāng kuài'
```

## API

### Function

```ts
import { customPinyin } from 'pinyin-pro';

interface PinyinMap {
  [key: string]: string;
}

customPinyin(map: PinyinMap);
```

### Parameters

- `map` (required)：<b>object</b> customized pinyin mapping, where key is a Chinese character and value is pinyin
