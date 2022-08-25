/* 関数の型の宣言 (function type declaration) */
(() => {
  // 関数の型宣言構文
  type Increment = (num: number) => number;

  // 型宣言を型注釈で使う（引数と戻り値の型は省略できる）
  const increment: Increment = (num) => num + 1;
  console.log(increment(1));

  // 関数式(function式)の型注釈にも使える
  // const increment: Increment = function (num: number): number {
  //   return num + 1;
  // };

  // メソッド構文による関数の型宣言
  type Decrement = {
    (num: number): number;
  };

  // 関数から関数の型を宣言する
  type Increment2 = typeof increment;
})();
