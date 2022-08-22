/* definite assignment assertion */
(() => {
  (() => {
    let num: number;

    // Variable 'num' is used before being assigned.
    // console.log(num * 2);
  })();

  (() => {
    let num: number;
    initNum();

    // Variable 'num' is used before being assigned.
    // console.log(num * 2);

    function initNum() {
      num = 2;
    }
  })();

  (() => {
    class Foo {
      num1: number = 1;
      num2: number;

      // Property 'num3' has no initializer and is not definitely assigned in
      // the constructor.
      // num3: number;

      constructor() {
        this.num2 = 1;
        this.initNum3();
      }
      initNum3() {
        // this.num3 = 1;
      }
    }
  })();

  (() => {
    // definite assignment assertionを使う
    let num!: number;
    initNum();
    console.log(num * 2); // 2
    function initNum() {
      num = 2;
    }

    class Foo {
      num1: number = 1;
      num2: number;
      num3!: number;

      constructor() {
        this.num2 = 1;
        this.initNum3();
      }
      initNum3() {
        this.num3 = 1;
      }
    }
    const foo = new Foo();
    console.log(foo); // Foo { num1: 1, num2: 1, num3: 1 }
  })();

  (() => {
    // 非Nullアサーション
    let num: number;
    initNum();
    console.log(num! * 2); // 4
    function initNum() {
      num = 2;
    }
  })();

  (() => {
    // より安全なコードを書くには
    let num: number;
    num = initNum();
    console.log(num * 2); // 4
    function initNum() {
      return 2;
    }
  })();
})();
