/* 戻り値がない関数とvoid型 (void type) */
(() => {
  (() => {
    // 戻り値がない関数の型注釈にvoid
    function print(message: string): void {
      console.log(message);
    }
    print("hello");
  })();

  (() => {
    // undefined型とvoid型の違い
    function print(message: string): undefined {
      console.log(message);
      return undefined; // これがないとコンパイルエラー
    }
    print("hello");

    // 戻り値がundefinedを含みうる関数の場合は、undefined型を含んだユニオン型を使う
    function getIfExists(numbers: number[], search: number): number | undefined {
      if (numbers.includes(search)) {
        return search;
      }
      return undefined;
    }
    console.log(getIfExists([1, 2, 3], 2));
  })();

  (() => {
    // void型は関数戻り値の型注釈だけに使う
    const v: void = undefined;
    // Type 'void' is not assignable to type 'undefined'.
    // const u: undefined = v;
  })();
})();
