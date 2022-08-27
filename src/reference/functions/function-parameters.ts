/* 関数の引数 (function parameter) */
(() => {
  (() => {
    // 引数の個数
    function increment(n: number) {
      return n + 1;
    }
    console.log(increment(1)); // 2

    // TypeScriptでは、関数の引数の数が一致していないとコンパイルエラー
    // Expected 1 arguments, but got 2.
    // console.log(increment(1, 2));
  })();

  (() => {
    // 引数の型
    // TypeScriptでは、関数の引数に型注釈が書ける
    function len(str: string) {
      return str.length;
    }
    console.log(len("abc")); // 3

    //  Argument of type 'number' is not assignable to parameter of type 'string'.
    // console.log(len(1));
  })();
})();
