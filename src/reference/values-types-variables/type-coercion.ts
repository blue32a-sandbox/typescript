/* 型強制 (type coercion) */
(() => {
  // The left-hand side of an arithmetic operation must be of type 'any',
  // 'number', 'bigint' or an enum type.
  // console.log("1" - 1); // 文字列型の"1"が数値型の1に型強制された上で-1される

  // 数値型の1が文字列型の"1"に型強制された上で文字列結合される
  console.log("1" + 1); // 11
})();
