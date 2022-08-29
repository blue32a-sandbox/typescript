/* 分割代入引数 (destructuring assignment parameter) */
(() => {
  (() => {
    // 分割代入引数の構文
    function foo({ a, b }: { a: number, b: number }) {
      console.log(a, b);
    }
    foo({ a: 1, b: 2 }); // 1 2

    function bar({ a: x, b: y}: { a: number, b: number}) {
      console.log(x, y);
    }
    bar({ a: 1, b: 2 }); // 1 2

    function arr([a, b]: [number, number]) {
      console.log(a, b);
    }
    arr([1, 2]); // 1 2

    const arrow = ({ a, b }: { a: number, b: number }) => {
      console.log(a, b);
    };
    arrow({ a: 1, b: 2 }); // 1 2
  })();
  (() => {
    // 既定値とコンパイルエラー
    function foo({ a, b }: { a: number, b: number }) {}
    // Argument of type '{ a: number; }' is not assignable to parameter of type '{ a: number; b: number; }'.
    // Property 'b' is missing in type '{ a: number; }' but required in type '{ a: number; b: number; }'.
    // foo({ a: 1 });

    function bar([a, b]: [number, number]) {}
    // Argument of type '[number]' is not assignable to parameter of type '[number, number]'.
    // Source has 1 element(s) but target requires 2.
    // bar([1]);
  })();
  (() => {
    // 分割代入引数のデフォルト引数
    function foo({ a = 0 }) {
      console.log(a);
    }
    foo({}); // 0

    function bar([a = 0]) {
      console.log(a);
    }
    bar([]); // 0
  })();
  (() => {
    // 分割代入引数の全体の既定値
    function foo({ a, b }: { a?: number, b?: number } = { a: 0, b: 0 }) {
      console.log(a, b);
    }
    foo(); // 0 0
    foo({ a: 1 }); // 1 undefined
    foo({ a: 1, b: 2 }) // 1 2
  })();
  (() => {
    // 呼び出し時のプロパティ名の省略
    function bmi({ height, weight }: { height: number, weight: number }) {
      console.log(height, weight);
    }
    const height = 170;
    const weight = 65;
    bmi({ height, weight }); // 170 65
  })();
})();
