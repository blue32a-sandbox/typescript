/* 型変数 (type variables) */
(() => {
  function printAndReturn<T>(value: T): T {
    let values: T[] = [];
    const doSomething = (value: T) => {};
    console.log(value);
    return value;
  }

  // Cannot find name 'T'.
  // let value: T;

  const value = printAndReturn<number>(123);
  console.log(value);

  // 型変数に使える文字
  function func1<T>(x: T) {}
  function func2<Foo>(x: Foo) {}
  function func3<fooBar>(x: fooBar) {}
  function func4<$>(x: $) {}
  function func5<かた>(x: かた) {}

  // 数字で始まるものや予約後は使用できない
  // function func6<1>(x: 1) {}
  // function func7<class>(x: class) {}

  // Tが用いられることが多い。次はアルファベット順にU。
  function compare<T, U>(a: T, b: U) {}
  compare<string, number>("hoge", 5);

  // Tを接頭辞にした命名
  function makeKeyValuePair<TKey, TValue>(key: TKey, value: TValue) {}
  makeKeyValuePair<string, boolean>("key", false);
})();
