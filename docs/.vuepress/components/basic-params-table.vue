<template>
  <div>
    <el-table
      title="options 参数属性说明表"
      :data="data"
      :span-method="optionSpanMethod"
      border
      style="width: 100%; margin-top: 20px"
    >
      <el-table-column
        prop="name"
        label="属性及描述"
        width="150"
        align="center"
      >
        <template #default="scope">
          <div>
            <div>options.{{ scope.row.name }}</div>
            <div
              :style="{
                marginTop: '8px',
                color: 'var(--el-text-color-placeholder)',
              }"
            >
              {{ scope.row.optionDesc }}
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="type" label="类型" width="70" />
      <el-table-column
        :style="{ textAlign: 'center' }"
        prop="value"
        label="可选值"
        width="92"
      />
      <el-table-column
        :style="{ textAlign: 'center' }"
        prop="desc"
        label="说明"
      />
      <el-table-column prop="example" label="example" width="180">
        <template #default="scope">
          <div
            v-html="highlight(scope.row.example, javascript, 'javascript')"
          ></div>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        :style="{ textAlign: 'center' }"
        prop="default"
        label="默认值"
        width="62"
      />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import 'prismjs';
const Prism = (window as any).Prism;
const highlight = Prism.highlight;
const { javascript } = Prism.languages;

const options = [
  {
    option: 'pattern',
    type: 'string',
    description: '输出的结果信息',
    default: 'pinyin',
    children: [
      {
        value: 'pinyin',
        desc: '返回拼音全拼',
        example: `pinyin('汉语拼音'); // 'hàn yǔ pīn yīn'`,
      },
      {
        value: 'initial',
        desc: '返回声母',
        example: `pinyin('汉语拼音', { pattern: 'initial' }); // 'h y p y'`,
      },
      { value: 'final', desc: '返回韵母' },
      { value: 'num', desc: '返回音调对应数字(轻声返回 0)' },
      { value: 'first', desc: '返回拼音首字母' },
    ],
  },
  {
    option: 'toneType',
    type: 'string',
    description: '音调输出形式',
    default: 'symbol',
    children: [
      { value: 'symbol', desc: '作为音调符号带在拼音字母上' },
      { value: 'pinyin', desc: '作为数字跟在拼音后' },
      { value: 'pinyin', desc: '不加音调' },
    ],
  },
  {
    option: 'type',
    type: 'string',
    description: '输出结果的类型',
    default: 'string',
    children: [
      { value: 'string', desc: '输出字符串，拼音之间以空格隔开' },
      { value: 'array', desc: '输出为数组' },
    ],
  },
  {
    option: 'multiple',
    type: 'boolean',
    description: '是否输出多音字(仅在 text 为单字时生效)',
    default: 'false',
    children: [
      { value: 'false', desc: '输出汉字最常用的拼音' },
      { value: 'true', desc: '输出汉字的所有拼音' },
    ],
  },
  {
    option: 'mode',
    type: 'string',
    description: '拼音优先匹配的库模式',
    default: 'normal',
    children: [
      { value: 'normal', desc: '常规模式' },
      { value: 'surname', desc: '姓氏模式(优先匹配姓氏字库)' },
    ],
  },
  {
    option: 'nonZh',
    type: 'string',
    description: '非汉字字符的处理形式',
    default: 'spaced',
    children: [
      { value: 'spaced', desc: '非汉字在结果中空格隔开输出' },
      { value: 'consecutive ', desc: '非汉字在结果中紧凑输出' },
      { value: 'removed ', desc: '非汉字在结果中移除' },
    ],
  },
  {
    option: 'v',
    type: 'boolean',
    description: '是否将结果中的 ü 替换为 v(带音调的 ǖ,ǘ,ǚ,ǜ 不会被转换)',
    default: 'false',
    children: [
      { value: 'true', desc: '将结果中的 ü 替换为 v' },
      { value: 'false ', desc: '结果中的 ü 保留' },
    ],
  },
];

const getOptionsTable = () => {
  const data: any[] = [];
  options.forEach((option) => {
    option.children.forEach((child, index) => {
      data.push({
        id: option.option + child.value,
        name: option.option,
        siblingCount: option.children.length,
        siblingIndex: index,
        type: option.type,
        optionDesc: option.description,
        default: option.default,
        value: child.value,
        desc: child.desc,
        example: child.example || '',
      });
    });
  });
  return data;
};

const data = getOptionsTable();

const optionSpanMethod = ({ row, column, rowIndex, columnIndex }) => {
  if (['name', 'type', 'optionDesc', 'default'].includes(column.property)) {
    if (row.siblingIndex === 0) {
      return {
        rowspan: row.siblingCount,
        colspan: 1,
      };
    } else {
      return {
        rowspan: 0,
        colspan: 1,
      };
    }
  }
};
</script>

<style>
table {
  margin: 0;
}
td,
th {
  border: none;
}
.el-table .cell {
  padding: 0 4px !important;
}
</style>
