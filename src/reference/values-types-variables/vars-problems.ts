/* varはもう使わない */
(() => {
  // varの変数宣言
  var name = "taro";

  // 同名の変数宣言
  function test() {
    var x = 1;
    var x = 2;
    console.log(x); // 2
  }
  test();

  // 変数の巻き上げ
  // console.log(greeting); // Variable 'greeting' is used before being assigned.
  // var greeting = "こんにちは";

  // グローバル変数の上書き
  // var innerWidth = 10;
  // console.log(window.innerWidth); // バックエンドはwindowがない

  // スコープ
  function print1() {
    var x = 1;
    if (true) {
      var x = 2;
      console.log(x); // 2
    }
    console.log(x); // 2
  }
  print1();

  function print2() {
    const x = 1;
    if (true) {
      const x = 2;
      console.log(x); // 2
    }
    console.log(x); // 1
  }
  print2();
})();
