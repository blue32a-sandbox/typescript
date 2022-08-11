/* 変数宣言の型推論 */
(() => {
  let x = 1; // let x: number = 1;
  console.log(x);
  // x = "hello"; // 型 'string' を型 'number' に割り当てることはできません。
})();
