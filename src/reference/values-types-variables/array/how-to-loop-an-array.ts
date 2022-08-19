/* 配列をループする方法 */
(() => {
  (() => {
    // for文
    const arr = ["a", "b", "c"];
    for (let i = 0; i < arr.length; i++) {
      console.log(i, arr[i]);
      // 0 a
      // 1 b
      // 2 c
    }
  })();
  (() => {
    // for-of文
    const arr = ["a", "b", "c"];
    for (const value of arr) {
      console.log(value);
      // a
      // b
      // c
    }
  })();
  (() => {
    // Arrayのメソッド
    const arr = ["a", "b", "c"];
    arr.forEach((value, i) => {
      console.log(value, i);
      // a 0
      // b 1
      // c 2
    })
  })();
  (() => {
    // for-in文は使わない
    const arr: any = ["a", "b", "c"];
    arr.for = "bar";
    for (const x in arr) {
      console.log(x, arr[x]);
      // 0 a
      // 1 b
      // 2 c
      // for bar
    }
  })();
})();
