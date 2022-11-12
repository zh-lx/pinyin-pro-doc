// import

declare module '*.vue' {
  import { defineComponent } from 'vue';
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}

interface Window {
  pinyin: Function;
  match: Function;
  customPinyin: Function;
}
