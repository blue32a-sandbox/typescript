/* リテラル型 (literal type) */
(() => {
  // 1だけが代入可能な型
  let x: 1;
  x = 1;

  // Type '100' is not assignable to type '1'.
  // x = 100;

  // リテラル型として表現できるもの
  let isTrue: true = true;
  let num: 123 = 123;
  let str: "foo" = "foo";

  // リテラル型の用途
  let num2: 1 | 2 | 3 = 1;
})();
