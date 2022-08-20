/* タプル (tuple) */
(() => {
  function tuple(): [number, string, boolean] {
    return [1, "ok", true];
  }
  const list: [number, string, boolean] = tuple();

  // タプルへのアクセス
  console.log(list[0].toExponential()); // 1e+0
  console.log(list[1].length); // 2
  console.log(list[2].valueOf()); // true

  // Tuple type '[number, string, boolean]' of length '3' has no element at index '3'.
  // list[3];

  // list.push(3);
  // Tuple type '[number, string, boolean]' of length '3' has no element at index '3'.
  // list[3];

  // 分割代入を使ってタプルにアクセスする
  const [num, str, bool]: [number, string, boolean] = tuple();
  console.log(num); // 1
  console.log(str); // "ok"
  console.log(bool); // true
})();
