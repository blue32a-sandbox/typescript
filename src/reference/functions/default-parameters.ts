/* デフォルト引数 (default parameter) */
(() => {
  function foo(x: any = 1) {
    console.log(x);
  }
  foo(); // 1
  foo(undefined); // 1
  foo(null); // null

  (() => {
    // 引数リストの途中に書ける
    function foo(x: any, y = 2, z: any) {
      console.log(x, y, z);
    }
    foo(1, undefined, 3); // 1 2 3
  })();

  (() => {
    // 初期化処理が書ける
    function foo(x = 2 * 2) {
      console.log(x);
    }
    foo(); // 4

    // 非同期処理は書けない
    // 'await' expressions cannot be used in a parameter initializer.
    // async function bar(x = await Promise.resolve(1)) {}
  })();

  (() => {
    // 型推論が効く
    function foo(x = 1/* number */) {}
  })();
})();
