/* 従来の関数とアロー関数の違い */
(() => {
  (() => {
    // 構文の簡潔さ
    [1, 2, 3].map(function (n) {
      return n + 1;
    });
    [1, 2, 3].map((n) => n + 1);
  })();

  (() => {
    // コンストラクタ
    function Cat(name: string) {
    }
    // TypeScriptでは、従来の関数でもコンストラクタとして使えない
    // const cat = new Cat("ミケ");
  })();

  (() => {
    // thisの指すもの
    function showThis(this: any) {
      console.log(this);
    }
    showThis(); // undefined

    const foo = { name: "Foo", showThis };
    foo.showThis();
  })();

  (() => {
    // アロー関数のthisはレキシカルスコープで静的
    const oneSecond = 1000;
    const timer = {
      message: "時間です！",
      start: function () {
        // thisはtimerを指す
        console.log(this); // { message: '時間です！', start: [Function: start] }

        setTimeout(function (this: any) {
          // thisはグローバルオブジェクトを指す
          console.log(this.message); // undefined
        }, oneSecond);

        setTimeout(() => {
          // thisはtimerを指す
          console.log(this.message); // 時間です！
        }, oneSecond);
      }
    }
    timer.start();
  })();

  (() => {
    // call、apply、bindの振る舞い
    function showThis(this: any) {
      console.log(this);
    }
    const obj = { name: "foo" };
    showThis.bind(obj)(); // { name: 'foo' }

    // const showThisArrow = () => {
    //   // TypeScriptではエラーになる
    //   // The containing arrow function captures the global value of 'this'.
    //   console.log(this);
    // }
    // showThisArrow.bind(obj)(); // {}
  })();

  (() => {
    // arguments変数の有無
    function foo(...num: number[]) {
      console.log(arguments);
    }
    foo(1, 2, 3); // [Arguments] { '0': 1, '1': 2, '2': 3 }

    // アロー関数にはargumentsがないので、残余引数を用いる
    const bar = (...args: number[]) => {
      console.log(args);
    };
    bar(1, 2, 3); // [ 1, 2, 3 ]
  })();

  (() => {
    // ジェネレーター
    function* generateNumbers() {
      yield 1;
      yield 2;
      yield 3;
    }
    for (const value of generateNumbers()) {
      console.log(value);
      // 1
      // 2
      // 3
    }

    // アロー関数はジェネレーター構文をサポートしていない
  })();

  (() => {
    // アロー関数はstrictモードのオンオフにかかわらず常に構文エラーなる
    // TypeScriptでは従来の関数もアロー関数もどちらもエラーになる

    // Duplicate identifier 'a'.
    // const foo = (a: number, a: number) => {};

    // Duplicate identifier 'a'.
    // function bar(a: number, a: number) {}
  })();

  (() => {
    // 関数名の重複

    // 関数宣言で作った関数はvarに相当する
    // TypeScriptではコンパイルエラーになる
    // Duplicate function implementation.
    // function foo() {
    //   console.log("first foo");
    // }
    function foo() {
      console.log("second foo");
    }
    foo(); // "second foo"

    // アロー関数は、letやconstを使っていれば重複は起こりえない
    // Cannot redeclare block-scoped variable 'bar'.
    // const bar = () => {};
    const bar = () => {};
  })();

  (() => {
    // 巻き上げと関数定義と呼び出しの順序
    foo(); // "実行しました"
    function foo() {
      console.log("実行しました");
    }
  })();
})();
