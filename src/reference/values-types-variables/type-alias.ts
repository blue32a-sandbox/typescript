/* 型エイリアス (type alias) */
(() => {
  // 型エイリアスの宣言
  type StringOrNumber = string | number;
  const value: StringOrNumber = 123;
  console.log(value);

  // 型エイリアスの使用例
  type Str = string;
  type OK = 200;
  type Numbers = number[];
  type UserObject = { id: number, name: string };
  type NmberOrNull = number | null;
  type CallbackFunction = (value: string) => boolean;
})();
