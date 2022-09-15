/* インデックスアクセス型 (indexed access types) */
(() => {
  type A = { foo: number };
  type Foo = A["foo"];
  const foo: Foo = 1;
  console.log(foo); // 1

  const arr = [1, 2, 3];
  console.log(arr[2]); // 3

  (() => {
    // オブジェクト型とインデックスアクセス型

    // ユニオン型も使える
    type Person = { name: string; age: number; };
    type P = Person["name" | "age"];
    const p1: P = "Jon";
    const p2: P = 23;
    console.log(p1, p2); // "Jon" 23

    // keyof型演算子と組み合わせると、オブジェクトの全プロパティの型がユニオン型で得られる
    type Bar = { a: number; b: string; c: boolean; };
    type B = Bar[keyof Bar];
    const b1: B = 10;
    const b2: B = "bar";
    const b3: B = true;
    console.log(b1, b2, b3); // 10 "bar" true

    // 存在しないプロパティ名を指定するとエラー
    type Account = { name: string; };
    // Property 'password' does not exist on type 'Account'.
    // type A2 = Account["password"];
  })();

  (() => {
    // 配列型とインデックスアクセス型

    // 要素の型を参照するには、配列型に[number]をつける
    type StringArray = string[];
    type SA = StringArray[number]; // string
    const sa: SA = "hoge";
    console.log(sa);

    type MixedArray = (string | undefined)[];
    type MA = MixedArray[number]; // string | undefined
    const ma1: MA = "hoge";
    const ma2: MA = undefined;
    console.log(ma1, ma2);

    const stateList = ["open", "closed"] as const;
    type State = typeof stateList[number]; // "open" | "closed"
    const open: State = "open";
    const closed: State = "closed";
    console.log(open, closed);
  })();

  (() => {
    // タプル型とインデックスアクセス型
    type Tuple = [string, number];
    type T1 = Tuple[0];
    type T2 = Tuple[1];
    const t1: T1 = "hoge";
    const t2: T2 = 8;
    console.log(t1, t2);
  })();
})();
