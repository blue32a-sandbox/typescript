/* オープンエンドと宣言マージ (open-ended and declaration merging) */
(() => {
  // 同じ名前のインターフェースを複数宣言してもエラーにならない（オープンエンド）
  interface Foo {
    a: number;
  }
  interface Foo {
    b: number;
  }

  // 同じ名前のインターフェイスがマージされる（宣言マージ）
  const foo: Foo = {
    a: 1,
    b: 2,
  };
  console.log(foo);
})();
