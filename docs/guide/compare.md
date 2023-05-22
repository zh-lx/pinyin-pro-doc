# Why pinyin-pro

以下为 `pinyin-pro` 性能及准确率测试结果及与竞品的对比，可以看到 `pinyin-pro` 无论在准确率、性能还是环境的兼容性上都是遥遥领先的。

## 测试环境

- 设备:
  - 名称：联想小新 13 Pro
  - 系统：Windows 64 位环境
  - RAM：16 GB
- 环境: Nodejs v18.12.1

## 测试结果

<table>
    <tr>
        <th colspan="2">对比项</th>
        <th>pinyin</th>
        <th>@napi-rs/pinyin</th>
        <th>pinyin-pro</th>
    </tr>
    <tr>
        <td rowspan="2" colspan="2">准确率</td>
        <td>😕Node 版: 97.844%</td>
        <td rowspan="2">😕97.433%</td>
        <td rowspan="2">🤩99.744%</td>
    </tr>
    <tr>
        <td>😕Web 版: 94.507%	</td>
    </tr>
    <tr>
        <td rowspan="3">性能</td>
        <td>5k字转换耗时</td>
        <td>🐢489.252ms</td>
        <td>🚲115.723ms</td>
        <td>🚀5.909ms</td>
    </tr>
    <tr>
        <td>1w字转换耗时</td>
        <td>🐢511.573ms</td>
        <td>🚲115.887ms</td>
        <td>🚀15.260ms</td>
    </tr>
    <tr>
        <td>100w字转换耗时</td>
        <td>⛔内存溢出转换失败</td>
        <td>🚀570.994ms</td>
        <td>🚀565.131ms</td>
    </tr>
    <tr>
        <td rowspan="3">兼容性</td>
        <td>Web 环境</td>
        <td>✔️支持</td>
        <td>❌不支持</td>
        <td>✔️支持</td>
    </tr>
    <tr>
        <td>Node 环境</td>
        <td>✔️支持</td>
        <td>✔️支持</td>
        <td>✔️支持</td>
    </tr>
    <tr>
        <td>ESM</td>
        <td>❌不支持</td>
        <td>❌不支持</td>
        <td>✔️支持</td>
    </tr>
</table>

## 测试数据

- 准确率测试数据可见: [accuracy](https://github.com/zh-lx/pinyin-pro/blob/main/benchmark/accuracy.js)
- 性能测试数据可见：[speed](https://github.com/zh-lx/pinyin-pro/blob/main/benchmark/speed.js)
