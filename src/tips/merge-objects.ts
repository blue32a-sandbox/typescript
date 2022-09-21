/* オブジェクトをマージ (結合) する */
(() => {
  const obj1 = {
    a: "aaa",
    b: "bbb",
    c: "ccc",
  };
  const obj2 = {
    d: "ddd",
    e: "eee",
  };
  console.log({ ...obj1, ...obj2 });
  // { a: 'aaa', b: 'bbb', c: 'ccc', d: 'ddd', e: 'eee' }
})();
(() => {
  // 同名のキーがある場合、必ず最後に書かれているものが優先される
  const obj1 = {
    a: "aaa",
    b: "bbb",
  };
  const obj2 = {
    b: "BBB",
    c: "ccc",
  };
  console.log({ ...obj1, ...obj2 }); // { a: 'aaa', b: 'BBB', c: 'ccc' }
})();
