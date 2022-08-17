/* オブジェクトをループする方法 */
(() => {
  (() => {
    // for-in文
    const foo: {[K: string]: number} = { a: 1, b: 2, c: 3 };
    for (const prop in foo) {
      // for-in文はプロトタイプのプロパティも含めてループする仕様があるので、
      // hasOwnPropertyでプロパティがプロトタイプのものでないことをチェックしたほうが安全。
      if (Object.prototype.hasOwnProperty.call(foo, prop)) {
        console.log(prop, foo[prop]);
      }
    }
  })();

  (() => {
    // Object.entries
    const foo: {[K: string]: number} = { a: 1, b: 2, c: 3 };
    for (const [key, value] of Object.entries(foo)) {
      console.log(key, value);
    }
  })();

  (() => {
    // Object.keys
    const foo: {[K: string]: number} = { a: 1, b: 2, c: 3 };
    for (const key of Object.keys(foo)) {
      console.log(key);
    }
  })();

  (() => {
    // Object.values
    const foo: {[K: string]: number} = { a: 1, b: 2, c: 3 };
    for (const value of Object.values(foo)) {
      console.log(value);
    }
  })();
})();
