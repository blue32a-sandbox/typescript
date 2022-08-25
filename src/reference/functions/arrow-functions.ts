/* アロー関数 (arrow function) */
(() => {
  // アロー関数の構文
  const add = (a: number, b: number): number => {
    return a + b;
  };
  console.log(add(1, 2));


  // 引数が無い場合は、引数のカッコの省略はできない
  const getOne = () => {
    return 1;
  }
  console.log(getOne());

  // 関数内のコードが式1つだけの場合は、中カッコ{}とreturnが省略できる
  const getZero = () => 0;
  console.log(getZero());

  // 戻り値がオブジェクトリテラルの場合はカッコで囲む必要がある
  const getFoo = () => ({ foo: "foo"});
  console.log(getFoo());

  // アロー関数の型注釈
  const increment = (num: number): number => num + 1;
  console.log(increment(2));

  // 引数と戻り値のどちらも型注釈を書けない
  // const increment = num => num + 1;
  // noImplicitAnyが有効の場合はコンパイルエラーになる
})();
