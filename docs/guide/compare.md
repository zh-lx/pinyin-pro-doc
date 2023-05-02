# 性能/准确率

以下为 `pinyin-pro` 性能及准确率测试结果及与竞品的对比。

## 测试环境

- 设备:
  - 名称：联想小新 13 Pro
  - 系统：Windows 64 位环境
  - RAM：16 GB
- 环境: Nodejs v18.12.1

## 测试结果

| 对比项              | pinyin           | pinyin-pro |
| ------------------- | ---------------- | ---------- |
| 准确率              | 95.894%          | 99.744%    |
| 5k 字转换所需时间   | 190.192ms        | 7.199ms    |
| 1w 字转换所需时间   | 内存溢出转换失败 | 13.199ms   |
| 100w 字转换所需时间 | 内存溢出转换失败 | 646.973ms  |

## 测试数据

- 准确率测试数据可见: [accuracy](https://github.com/zh-lx/pinyin-pro/blob/main/benchmark/accuracy.js)
- 性能测试数据可见：[speed](https://github.com/zh-lx/pinyin-pro/blob/main/benchmark/speed.js)
