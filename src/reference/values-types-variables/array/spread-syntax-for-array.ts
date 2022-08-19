/* 配列のスプレッド構文「...」(spread syntax) */
(() => {
  (() => {
    // 配列の作成
    const arr = [1, 2, 3];
    const arr2 = [...arr, 4];
    console.log(arr2); // [ 1, 2, 3, 4 ]
  })();
  (() => {
    // 配列のコピー
    const arr = [1, 2, 3];
    const arr2 = [...arr];
    console.log(arr2); // [ 1, 2, 3, ]
  })();
  (() => {
    // 配列の連結
    const arr = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const conected = [...arr, ...arr2];
    console.log(conected); // [ 1, 2, 3, 4, 5, 6 ]
  })();
})();
