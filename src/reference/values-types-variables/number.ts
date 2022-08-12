/* 数値型 (number type) */
(() => {
  console.log(123); // 整数
  console.log(-123); // 整数（負の数）
  console.log(20.315); // 小数
  console.log(.1); // 0.1
  console.log(5.); // 5.0

  // 2進数、8進数、16進数
  console.log(0b1010); // 2進数
  console.log(0o755); // 8進数
  console.log(0xfff); // 16進数

  // 数値の区切り文字(numeric separators)
  console.log(100_000_000); // 100000000

  // 数値リテラルのプロパティ
  console.log(5..toString()); // '5'
  console.log((5).toString()); // '5'

  // 数値型の型注釈
  const count: number = 123;

  // NaN
  const price = parseInt("百円");
  console.log(price); // NaN
  console.log(Number.isNaN(price)); // true
  console.log(NaN == NaN); // false
  console.log(NaN === NaN); // false

  // Infinity
  console.log(1 / 0); // Infinity
})();
