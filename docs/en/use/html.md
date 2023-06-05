# html <Badge type="tip" text="v3.15.0+" vertical="middle" />

Use `html` API to get a HTML string of Chinese characters and Pinyin in the format of '<ruby></ruby>'.

## Example

### Basic Use

The returned value of `html` api is a HTML string：

- The outermost layer of each Chinese character and Pinyin is wrapped by a `<span class="py result item"></span>` tag. (the class of the tag can be customized through the `resultClass` attribute)
- The inner layer is wrapped with `<ruby></ruby>` to display Chinese characters and Pinyin.
- The Chinese character part is wrapped by a `<span class="py-chinese-item"></span>` tag. (the class of the tag can be customized through the `chineseClass` attribute)
- The Pinyin part is wrapped by a `<rt class="py-pinyin-item"></rt>` tag. (the class of the tag can be customized through the `pinyinClass` attribute)
- By default, non Chinese character isn't be wrapped. By setting the value of the `wrapNonChinese` attribute to `true`, non Chinese character part will be wrapped by a `<span class="py non Chinese item"></span>` tag. (The class of the tag can be customized through the `nonChineseClass` attribute)

```js
import { html } from 'pinyin-pro';

const htmlString = html('汉语拼音');

/*
<span class="py-result-item">
  <ruby>
    <span class="py-chinese-item">汉</span>
    <rp>(</rp>
    <rt class="py-pinyin-item">hàn</rt>
    <rp>)</rp>
  </ruby>
</span>
<span class="py-result-item">
  <ruby>
    <span class="py-chinese-item">语</span>
    <rp>(</rp>
    <rt class="py-pinyin-item">yǔ</rt>
    <rp>)</rp>
  </ruby>
</span>
<span class="py-result-item">
  <ruby>
    <span class="py-chinese-item">拼</span>
    <rp>(</rp>
    <rt class="py-pinyin-item">pīn</rt>
    <rp>)</rp>
  </ruby>
</span>
<span class="py-result-item">
  <ruby>
    <span class="py-chinese-item">音</span>
    <rp>(</rp>
    <rt class="py-pinyin-item">yīn</rt>
    <rp>)</rp>
  </ruby>
</span>
*/
```

The preview of the `htmlString` in the browser is as follows:

<html-basic-demo></html-basic-demo>

### Without Tone

When the value of the `tone` attribute is `true`, the Pinyin in the returned value has no tone.

```js
import { html } from 'pinyin-pro';

const htmlString = html('汉语拼音', { tone: false });

/*
<span class="py-result-item">
  <ruby>
    <span class="py-chinese-item">汉</span>
    <rp>(</rp>
    <rt class="py-pinyin-item">han</rt>
    <rp>)</rp>
  </ruby>
</span>
<span class="py-result-item">
  <ruby>
    <span class="py-chinese-item">语</span>
    <rp>(</rp>
    <rt class="py-pinyin-item">yu</rt>
    <rp>)</rp>
  </ruby>
</span>
<span class="py-result-item">
  <ruby>
    <span class="py-chinese-item">拼</span>
    <rp>(</rp>
    <rt class="py-pinyin-item">pin</rt>
    <rp>)</rp>
  </ruby>
</span>
<span class="py-result-item">
  <ruby>
    <span class="py-chinese-item">音</span>
    <rp>(</rp>
    <rt class="py-pinyin-item">yin</rt>
    <rp>)</rp>
  </ruby>
</span>
*/
```

The preview of the above code in the browser is as follows:

<html-no-tone-demo></html-no-tone-demo>

### Custom Style

You can control the specific style by using the class in the returned value of `html` api. In the following example, we let the Chinese character part in blue and the Pinyin part in red.

```js
// js
import { html } from 'pinyin-pro';

const htmlString = html('汉语拼音');
```

```css
/* css */
.py-chinese-item {
  color: blue;
}
.py-pinyin-item {
  color: red;
}
```

The preview of the above code in the browser is as follows:

<html-style-demo></html-style-demo>

## API

### Function

```ts
import { customPinyin } from 'pinyin-pro';

interface HtmlOptions {
  resultClass?: string;
  pinyinClass?: string;
  chineseClass?: string;
  wrapNonChinese?: boolean;
  nonChineseClass?: string;
  tone?: boolean;
}

function html(text: string, options?: HtmlOptions): string {}
```

### Parameters

- `text` (required): <b>string</b>, the Chinese character string to convert.
- `options` (optional): <b>object</b>, the configuration related to the return value, more specific information is shown in the table below：

<table>
    <tr>
        <th>Key</th>
        <th>Type</th>
        <th>Description</th>
        <th>Optional Values</th>
        <th>Default Value</th>
    </tr>
    <tr>
        <td>resultClass</td>
        <td>string</td>
        <td>class of the outermost &lt;span&gt; tag of Chinese characters and pinyin</td>
        <td>-</td>
        <td>py-result-item</td>
    </tr>
    <tr>
        <td>pinyinClass</td>
        <td>string</td>
        <td>class of the outer &lt;rt&gt; tag of Pinyin</td>
        <td>-</td>
        <td>py-pinyin-item</td>
    </tr>
    <tr>
        <td>chineseClass</td>
        <td>string</td>
        <td>class of the outer &lt;span&gt; tag of Chinese character</td>
        <td>-</td>
        <td>py-chinese-item</td>
    </tr>
    <tr>
        <td>wrapNonChinese</td>
        <td>string</td>
        <td>Whether use &lt;span&gt; to wrap non Chinese characters. If you want to do some custom style processing for non Chinese characters, it is recommended to set it to true; If the input text parameter is also an HTML string, it is recommended to set it to false to prevent affecting the structure of the text.</td>
        <td>true/false</td>
        <td>false</td>
    </tr>
    <tr>
        <td>nonChineseClass</td>
        <td>string</td>
        <td>class of the outer &lt;span&gt; tag of non Chinese character(Only when the value of wrapNonChinese is true, it is work.)</td>
        <td>-</td>
        <td>py-non-chinese-item</td>
    </tr>
    <tr>
        <td>tone</td>
        <td>boolean</td>
        <td>Whether the tone in Pinyin should be displayed.</td>
        <td>true/false</td>
        <td>true</td>
    </tr>
</table>
