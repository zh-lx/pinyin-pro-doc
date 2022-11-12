# 快速开始

## 环境

`pinyin-pro` 支持各种浏览器以及 Nodejs 环境运行。

## 安装

支持使用包管理器安装或者浏览器直接引入。

### 使用包管理器

推荐使用包管理器进行安装：

```perl
# 选择一个你喜欢的包管理器

# NPM
$ npm install pinyin-pro --save

# Yarn
$ yarn add pinyin-pro

# pnpm
$ pnpm install pinyin-pro
```

### 浏览器直接引入

可以通过浏览器的 `script` 标签导入 CDN 文件使用，下面以 [unpkg](https://unpkg.com) 和 [jsDelivr](https://jsdelivr.com) CDN 厂商为例：

#### unpkg

```html
<!-- 引入固定版本 -->
<head>
  <script src="https://unpkg.com/pinyin-pro@3.11.0/dist/index.js"></script>
</head>

<!-- 自动引入最新版本 -->
<head>
  <script src="https://unpkg.com/pinyin-pro"></script>
</head>
```

#### jsDelivr

```html
<!-- 引入固定版本 -->
<head>
  <script src="https://unpkg.com/pinyin-pro@3.11.0/dist/index.js"></script>
</head>

<!-- 自动引入最新版本 -->
<head>
  <script src="https://unpkg.com/pinyin-pro"></script>
</head>
```

::: tip
我们建议使用 CDN 引入 pinyin-pro 的用户在链接地址上锁定版本，以固定版本的方式引入，以免将来 pinyin-pro 升级时受到非兼容性更新的影响。
:::

## 使用

支持多种环境及模块化规范的使用方式。

### 浏览器 ES6

```js
import { pinyin } from 'pinyin-pro';

pinyin('汉语拼音'); // 'hàn yǔ pīn yīn'
```

### 浏览器 esm 动态导入

```js
import('pinyin-pro').then((exports) => {
  exports.pinyin('汉语拼音'); // 'hàn yǔ pīn yīn'
});
```

### 浏览器直接引入

以 CDN 方式浏览器直接引入后，会在 window 全局挂载一个 `pinyinPro` 对象。

```html
<script src="https://unpkg.com/pinyin-pro"></script>

<script>
  var { pinyin } = pinyinPro;
  pinyin('汉语拼音'); // 'hàn yǔ pīn yīn'
</script>
```

### Node CommonJS

```js
const { pinyin } = require('pinyin-pro');

pinyin('汉语拼音'); // 'hàn yǔ pīn yīn'
```
