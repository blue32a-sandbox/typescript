/* 配列はオブジェクト */
(() => {
  // オブジェクトのインスタンスが異なると==では期待する比較ができない
  const list1 = [1, 2, 3];
  const list2 = [1, 2, 3];
  console.log(list1 == list2); // false
})();
