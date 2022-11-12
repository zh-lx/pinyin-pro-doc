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
        label="属性、类型及描述"
        width="150"
        align="center"
      >
        <template #default="scope">
          <div>
            <div>options.{{ scope.row.name }}</div>
            <div :style="{ color: 'var(--el-color-success)' }">
              {{ scope.row.type }}
            </div>
            <div
              :style="{
                color: 'var(--el-text-color-placeholder)',
              }"
            >
              {{ scope.row.optionDesc }}
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        :style="{ textAlign: 'center' }"
        prop="value"
        label="可选值"
        width="92"
      />
      <el-table-column prop="desc" label="说明">
        <template #default="scope">
          <div>{{ scope.row.desc }}</div>
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
        example: `pinyin('汉语拼音', { pattern: 'pinyin' }); // 'hàn yǔ pīn yīn'`,
      },
      {
        value: 'initial',
        desc: '返回声母',
        example: `pinyin('汉语拼音', { pattern: 'initial' }); // 'h y p y'`,
      },
      {
        value: 'final',
        desc: '返回韵母',
        example: `pinyin('汉语拼音', { pattern: 'final' }); // 'àn ǔ īn īn'`,
      },
      {
        value: 'num',
        desc: '返回音调对应数字(轻声返回 0)',
        example: `pinyin('汉语拼音', { pattern: 'num' }); // '4 3 1 1'`,
      },
      {
        value: 'first',
        desc: '返回拼音首字母',
        example: `pinyin('赵钱孙李额', { pattern: 'first' }); // 'z q s l é'`,
      },
    ],
  },
  {
    option: 'toneType',
    type: 'string',
    description: '音调输出形式',
    default: 'symbol',
    children: [
      {
        value: 'symbol',
        desc: '作为音调符号带在拼音字母上',
        example: `pinyin('汉语拼音', { toneType: 'symbol' }); // 'hàn yǔ pīn yīn'`,
      },
      {
        value: 'num',
        desc: '作为数字跟在拼音后',
        example: `pinyin('汉语拼音', { toneType: 'num' }); // 'han4 yu3 pin1 yin1'`,
      },
      {
        value: 'none',
        desc: '不加音调',
        example: `pinyin('汉语拼音', { toneType: 'none' }); // 'han yu pin yin'`,
      },
    ],
  },
  {
    option: 'type',
    type: 'string',
    description: '输出结果的类型',
    default: 'string',
    children: [
      {
        value: 'string',
        desc: '输出字符串，拼音之间以空格隔开',
        example: `pinyin('汉语拼音', { type: 'string' }); // 'hàn yǔ pīn yīn'`,
      },
      {
        value: 'array',
        desc: '输出为数组',
        example: `pinyin('汉语拼音', { type: 'array' }); // ["hàn", "yǔ", "pīn", "yīn"]`,
      },
    ],
  },
  {
    option: 'multiple',
    type: 'boolean',
    description: '是否输出多音字(仅在 text 为单字时生效)',
    default: 'false',
    children: [
      {
        value: 'false',
        desc: '输出汉字最常用的拼音',
        example: `pinyin('好', { multiple: false }); // 'hǎo'`,
      },
      {
        value: 'true',
        desc: '输出汉字的所有拼音',
        example: `pinyin('好', { multiple: true }); // 'hǎo hào'`,
      },
    ],
  },
  {
    option: 'mode',
    type: 'string',
    description: '拼音优先匹配的库模式',
    default: 'normal',
    children: [
      {
        value: 'normal',
        desc: '常规模式',
        example: `pinyin('我叫曾小贤', { mode: 'normal' }); // 'wǒ jiào céng xiǎo xián'`,
      },
      {
        value: 'surname',
        desc: '姓氏模式(优先匹配姓氏字库)',
        example: `pinyin('我叫曾小贤', { mode: 'surname' }); // 'wǒ jiào zēng xiǎo xián'`,
      },
    ],
  },
  {
    option: 'nonZh',
    type: 'string',
    description: '非汉字字符的处理形式',
    default: 'spaced',
    children: [
      {
        value: 'spaced',
        desc: '非汉字在结果中空格隔开输出',
        example: `pinyin('我very喜欢你', { nonZh: 'spaced' }); // 'wǒ v e r y xǐ huān nǐ'`,
      },
      {
        value: 'consecutive ',
        desc: '非汉字在结果中紧凑输出',
        example: `pinyin('我very喜欢你', { nonZh: 'consecutive' }); // 'wǒ very xǐ huān nǐ'`,
      },
      {
        value: 'removed ',
        desc: '非汉字在结果中移除',
        example: `pinyin('我very喜欢你', { nonZh: 'removed' }); // 'wǒ xǐ huān nǐ'`,
      },
    ],
  },
  {
    option: 'v',
    type: 'boolean',
    description: '是否将结果中的 ü 替换为 v(带音调的 ǖ,ǘ,ǚ,ǜ 不会被转换)',
    default: 'false',
    children: [
      {
        value: 'true',
        desc: '将结果中的 ü 替换为 v',
        example: `pinyin('吕布', { toneType: 'none', v: true }); // lv bu`,
      },
      {
        value: 'false ',
        desc: '结果中的 ü 保留',
        example: `pinyin('吕布', { toneType: 'none', v: false }); // lü bu`,
      },
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
