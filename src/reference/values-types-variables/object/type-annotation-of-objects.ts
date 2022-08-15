/* オブジェクトの型注釈 (type annotation) */
(() => {
  let box: {
    width: number;
    height: number;
  };
  box = { width: 1080, height: 720 };
  console.log(box);

  // Type 'string' is not assignable to type 'number'.
  // box = { width: "1080", height: 720 };

  // Property 'height' is missing in type '{ width: number; }' but required
  // in type '{ width: number; height: number; }'.
  // box = { width: 1080 };

  // 型エイリアス
  type Box = {
    width: number;
    height: number;
  };
  let box2: Box = { width: 1080, height: 720 };
  console.log(box2);

  // メソッドの型注釈
  let calculator: {
    sum(x: number, y: number) :number;
  }

  calculator = {
    sum(x, y) {
      return x + y;
    },
  };
  console.log(calculator.sum(1, 2));

  // オブジェクトの型推論
  let box3 = { width: 1080, height: 720 };
  // 値から方が自動的に判別される
  // let box3: {
  //   width: number;
  //   height: number;
  // }

  // Record<Keys, Type>
  let foo: Record<string, number>;
  foo = { a: 1, b: 2 };
  console.log(foo);


  // object型
  let box4: object;
  box4 = { width: 1080, height: 720 };
  console.log(box4);
})();
