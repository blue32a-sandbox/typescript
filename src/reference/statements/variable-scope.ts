/* 変数のスコープ (scope) */
(() => {
  (() => {
    // 関数スコープ
    function func() {
      const variable = 123;
      return variable; // 参照できる
    }
    console.log(func()); // 123

    // Cannot find name 'variable'.
    // console.log(variable); // 参照できない
  })();

  (() => {
    // レキシカルスコープ
    const x = 100;
    function a() {
      console.log(x); // 関数の外の変数が見える
    }
    a();
  })();

  (() => {
    // ブロックスコープ
    {
      const x = 100;
      console.log(x); // 参照できる
    }
    // Cannot find name 'x'.
    // console.log(x); // 参照できない

    let type; // ブロックスコープの外で変数宣言する
    if (typeof "Hello" === "string") {
      type = "string";
    } else {
      type = "string以外";
    }
    console.log(type); // 参照できる
  })();

  (() => {
    // 意図しないグローバル変数への代入
    function func() {
      // Cannot find name 'foo'.
      // foo = "ローカル変数のつもり"; // TypeScriptではエラー
    }
    func();
  })();
})();
