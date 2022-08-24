/* 関数宣言 (function declaration) */
(() => {
  // 関数宣言構文
  function hello() {
    return "hello";
  }

  // 関数宣言構文の型注釈
  function increment(num: number): number {
    return num + 1;
  }

  // 引数の型を省略するとany型と解釈される
  // Parameter 'num' implicitly has an 'any' type.
  // function hoge(num): number {
  //   return num + 1;
  // }

  // 戻り値の型を省略すると、コードから型推論される
  function fuga(num: number) { // number
    return num + 1;
  }
  console.log(fuga(1)); // 2

  // 複数の違い方を返している場合はユニオン型になる
  function getFirst(items: number[]) { // number | null
    if (typeof items[0] === "number") {
      return items[0];
    }
    return null;
  }
  console.log(getFirst([1, 2, 3])); // 1
})();
