/* bigint型 */
(() => {
  const x: bigint = 100n;
  console.log(x); // 100n

  // BigInt関数
  const y = BigInt(100);
  console.log(y); // 100n

  const z = BigInt("9007199254740991");
  console.log(z); // 9007199254740991n

  // bigint型を数値型と計算する
  // 2n + 3; // Operator '+' cannot be applied to types '2n' and '3'.
  console.log(2n + BigInt(3)); // 5n
})();
