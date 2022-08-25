/* 関数式 (function expression) */
(() => {
  // 関数式の構文
  // 構文は関数宣言と同じ
  function hello() {
    console.log("hello");
  }

  // 関数式は式。式は値になるので、変数に直接代入できる
  const add = function add(a: number, b: number): number {
    return a + b;
  }

  // 関数名の省略
  const increment = function (n: number) {
    return n + 1;
  };
  console.log(increment(1)); // 呼び出し

  // オブジェクトのプロパティに直接代入できる
  const obj = {
    hoge_func: function () {},
  };

  // 別の関数の引数に直接渡すこともできる
  function exec(callback: Function) {
    callback();
  }
  exec(function() {
    console.log("hoge");
  });

  // 関数式と型注釈
  const decrement = function (
    n: number // 省略するとany型になる
  ): number // 省略するとロジックから推論される
  {
    return n - 1;
  };

  // 関数式の関数名
  const factorial = function fact(n: number): number {
    if (n <= 1) {
      return 1;
    }
    return n * fact(n - 1);
    // return n * factorial(n - 1); // 変数名を使った再帰呼び出しも可能
  }
  console.log(factorial(5));
})();
