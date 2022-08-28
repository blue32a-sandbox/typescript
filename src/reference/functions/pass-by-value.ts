/* 値渡しと参照渡し */
(() => {
  // 値渡し
  function change(n: number) {
    n = 2;
  }
  let n = 1;
  change(n);
  console.log(n); // 1

  (() => {
    // オブジェクトはどこでも参照になる
    const x = { n: 1 };
    const y = x;
    y.n = 2;
    console.log(x); // { n: 2 }
  })();

  (() => {
    // 別の値を代入した場合は、共通のオブジェクトを参照しなくなる
    const x = { n: 1 };
    let y = x;
    y = { n: 2 }; // 別のオブジェクトを再代入
    y.n = 3;
    console.log(x); // { n: 1 }
  })();

  (() => {
    // 引数も関数呼び出し元のオブジェクトに影響する
    function change(y: any) {
      y.n = 2;
    }
    const x = { n: 1 };
    change(x);
    console.log(x); // { n: 2 }
  })();

  (() => {
    // 引数の場合も、再代入した場合は影響しなくなる
    function change(y: any) {
      y = { n: 2 };
      y.n = 3;
    }
    const x = { n: 1 };
    change(x);
    console.log(x); // { n: 1 }
  })();
})();
