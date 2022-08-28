/* 残余引数/可変長引数 (rest parameter) */
(() => {
  // 残余引数の書き方
  function func(param1: number, ...params: number[]) {
    console.log(param1, params);
  }
  func(1, 2, 3, 4); // 1 [ 2, 3, 4 ]

  // A rest parameter must be last in a parameter list
  // function foo(...param1: number[], ...param2: number[]) {}
  // function bar(...param1: number[], param2: number) {}

  (() => {
    // 配列を残余引数として渡す
    const scores: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // 残余引数に配列を渡すことはできない
    // Argument of type 'number[]' is not assignable to parameter of type 'number'.
    // const highest = Math.max(scores);

    // スプレッド構文を使う
    const highest = Math.max(...scores);
    console.log(highest); // 10
  })();
})();
