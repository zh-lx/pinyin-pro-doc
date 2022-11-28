<template>
  <div>
    <vxe-table
      border
      :column-config="{ resizable: true }"
      :data="data"
      :span-method="optionSpanMethod"
    >
      <vxe-column field="name" title="属性" width="80"></vxe-column>
      <vxe-column field="type" title="类型" width="70"></vxe-column>
      <vxe-column field="optionDesc" title="描述" width="100"></vxe-column>
      <vxe-column field="value" title="可选值" width="92"></vxe-column>
      <vxe-column field="desc" title="说明">
        <template #default="{ row }">
          <div>
            {{ row.desc }}
            <vxe-button size="mini" @click="() => handleViewDemo(row)"
              >查看示例</vxe-button
            >
          </div>
        </template>
      </vxe-column>
      <vxe-column field="default" title="默认值" width="70"></vxe-column>
    </vxe-table>
    <vxe-modal v-model="dialogVisible" :title="title" class="my-dialog">
      <pre v-html="highlight(demo, javascript, 'javascript')"></pre>
    </vxe-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import 'prismjs';
const Prism = (window as any).Prism;
const highlight = Prism.highlight;
const { javascript } = Prism.languages;

const dialogVisible = ref(false);
const demo = ref('');
const title = ref('');

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
        example: `// 返回拼音全拼
pinyin('汉语拼音', { pattern: 'pinyin' }); // 'hàn yǔ pīn yīn'
pinyin('汉语拼音', { pattern: 'pinyin', toneType: 'none' }); // 'han yu pin yin'
pinyin('汉语拼音', { pattern: 'pinyin', toneType: 'num' }); // 'han4 yu3 pin1 yin1'
pinyin('汉语拼音', { pattern: 'pinyin', type: 'array' }); // ["hàn", "yǔ", "pīn", "yīn"]
pinyin('汉语拼音', { pattern: 'pinyin', toneType: 'none', type: 'array' }); // ["han", "yu", "pin", "yin"]
`,
      },
      {
        value: 'initial',
        desc: '返回声母',
        example: `// 返回声母
pinyin('汉语拼音', { pattern: 'initial' }); // 'h y p y'
pinyin('汉语拼音', { pattern: 'initial', type: 'array' }); // ["h", "y", "p", "y"]
`,
      },
      {
        value: 'final',
        desc: '返回韵母',
        example: `// 返回韵母
pinyin('汉语拼音', { pattern: 'final' }); // 'àn ǔ īn īn'
pinyin('汉语拼音', { pattern: 'final', toneType: 'none' }); // 'an u in in'
pinyin('汉语拼音', { pattern: 'final', type: 'array' }); // ["àn", "ǔ", "īn", "īn"]
pinyin('汉语拼音', { pattern: 'final', toneType: 'none', type: 'array' }); // ["an", "u", "in", "in"]
`,
      },
      {
        value: 'finalHead',
        desc: '返回韵头（介音）',
        example: `// 返回韵头（介音）
pinyin('村庄', { pattern: 'finalHead', type: 'array' }); // [ '', 'u' ]
`,
      },
      {
        value: 'finalBody',
        desc: '返回韵腹',
        example: `// 返回韵腹
pinyin('村庄', { pattern: 'finalBody', type: 'array' }); // [ 'ū', 'ā' ]
`,
      },
      {
        value: 'finalTail',
        desc: '返回韵尾',
        example: `// 返回韵尾
pinyin('村庄', { pattern: 'finalTail', type: 'array' }); // [ 'n', 'ng' ]
`,
      },
      {
        value: 'num',
        desc: '返回音调对应数字(轻声返回 0)',
        example: `// 返回音调
pinyin('汉语拼音', { pattern: 'num' }); // '4 3 1 1'
pinyin('汉语拼音', { pattern: 'num', type: 'array' }); // ["4", "3", "1", "1"]
`,
      },
      {
        value: 'first',
        desc: '返回拼音首字母',
        example: `// 返回首字母
pinyin('赵钱孙李额', { pattern: 'first' }); // 'z q s l é'
pinyin('赵钱孙李额', { pattern: 'first', toneType: 'none' }); // 'z q s l e'
pinyin('赵钱孙李额', { pattern: 'first', toneType: 'none', type: 'array' }); // ['z', 'q', 's', 'l', 'e']`,
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
      {
        value: 'all',
        desc: '输出完整信息的对象数组',
        example: `pinyin('拼音', { type: 'all' }); 
/** result:
[
  {
    origin: '拼',
    pinyin: 'pīn',
    initial: 'p',
    final: 'īn',
    first: 'p',
    finalHead: '',
    finalBody: 'ī',
    finalTail: 'n',
    num: 1,
    isZh: true,
  },
  {
    origin: '音',
    pinyin: 'yīn',
    initial: 'y',
    final: 'īn',
    first: 'y',
    finalHead: '',
    finalBody: 'ī',
    finalTail: 'n',
    num: 1,
    isZh: true,
  },
]
*/`,
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

const optionSpanMethod = ({ row, column, _rowIndex, columnIndex }) => {
  console.log(row, column);
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

const handleViewDemo = (row) => {
  demo.value = row.example;
  title.value = `options.${row.name} = ${row.value}`;
  dialogVisible.value = true;
};
</script>

<style lang="scss">
table {
  margin: 0;
}
td,
th {
  border: none;
}

.vxe-modal--wrapper .vxe-modal--box {
  max-height: 70vh;
  overflow: scroll;
  width: 800px !important;
  * {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
}
</style>
